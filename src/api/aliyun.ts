import { gptServerStore } from '@/store';
import { useAuthStore } from '@/store';
import axios from 'axios';
import { mlog } from './mjapi';

// 阿里云 API 配置接口
interface AliyunConfig {
  apiKey: string;
  baseUrl: string;
}

// 图像生成参数接口
export interface AliyunImageParams {
  model: string;
  prompt: string;
  negativePrompt?: string;
  n?: number;
  size?: string;
  steps?: number;
  seed?: number;
  cfgScale?: number;
  style?: string;
  refImage?: string;
  refMode?: string;
  refStrength?: number;
}

// 支持的模型类型
export const AliyunModels = {
  FLUX_SCHNELL: 'flux-schnell',
  FLUX_DEV: 'flux-dev',
  STABLE_DIFFUSION_V35: 'stable-diffusion-3.5-large',
  STABLE_DIFFUSION_V35_TURBO: 'stable-diffusion-3.5-large-turbo',
  WANX_V21_TURBO: 'wanx2.1-t2i-turbo',
  WANX_V21_PLUS: 'wanx2.1-t2i-plus',
  WANX_V20_TURBO: 'wanx2.0-t2i-turbo'
};

// 获取 API 配置
function getAliyunConfig(): AliyunConfig {
  // 使用本地代理服务器地址
  const baseUrl = '/api/aliyun/services/aigc/text2image';
  return {
    apiKey: gptServerStore.myData.ALIYUN_API_KEY || '',
    baseUrl
  };
}

// 获取请求头
function getHeaders() {
  const config = getAliyunConfig();
  let headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'X-DashScope-Async': 'enable'
  };
  
  if (!config.apiKey) {
    const authStore = useAuthStore();
    if (authStore.token) {
      headers['x-ptoken'] = authStore.token;
      return headers;
    }
    return headers;
  }
  
  headers['Authorization'] = `Bearer ${config.apiKey}`;
  return headers;
}

// 创建图像生成任务
export async function createImageGenerationTask(params: AliyunImageParams) {
  const config = getAliyunConfig();
  const url = `${config.baseUrl}/services/aigc/text2image/image-synthesis`;

  try {
    // 定义请求体类型，确保类型安全
    interface RequestBody {
      model: string;
      input: {
        prompt: string;
        negative_prompt?: string;
      };
      parameters: {
        n: number;
        size: string;
        steps?: number;
        seed?: number;
        cfg_scale?: number;
        style?: string;
        ref_image?: string;
        ref_mode?: string;
        ref_strength?: number;
      };
    }

    // 创建请求体
    const requestBody: RequestBody = {
      model: params.model,
      input: {
        prompt: params.prompt
      },
      parameters: {
        n: params.n || 1,
        size: params.size ? validateAndFormatSize(params.size) : '1024*1024'
      }
    };

    // 验证并格式化尺寸参数
    function validateAndFormatSize(size: string): string {
      // 允许的尺寸列表
      const allowedSizes = [
        '512*1024', '768*512', '768*1024', '1024*576', 
        '576*1024', '1024*1024', '1024*768', '768*1024', 
        '1280*720', '960*960', '720*1280', '1088*832', '832*1088'
      ];
      
      // 将'x'替换为'*'
      const formattedSize = size.replace(/x/g, '*');
      
      // 检查是否是允许的尺寸
      if (allowedSizes.includes(formattedSize)) {
        return formattedSize;
      }
      
      // 如果不是允许的尺寸，返回默认尺寸
      mlog('⚠️ 不支持的尺寸:', size, '使用默认尺寸: 1024*1024');
      return '1024*1024';
    }

    // 只添加有值的可选参数
    if (params.negativePrompt) {
      requestBody.input.negative_prompt = params.negativePrompt;
    }

    if (params.steps) {
      requestBody.parameters.steps = params.steps;
    }

    if (params.seed) {
      requestBody.parameters.seed = params.seed;
    }

    if (params.cfgScale) {
      requestBody.parameters.cfg_scale = params.cfgScale;
    }

    if (params.style) {
      requestBody.parameters.style = params.style;
    }

    if (params.refImage) {
      requestBody.parameters.ref_image = params.refImage;
    }

    if (params.refMode) {
      requestBody.parameters.ref_mode = params.refMode;
    }

    if (params.refStrength) {
      requestBody.parameters.ref_strength = params.refStrength;
    }

    const response = await axios.post(url, requestBody, {
      headers: getHeaders()
    });

    return response.data;
  } catch (error) {
    mlog('❌ Aliyun API Error:', error);
    throw error;
  }
}

// 查询任务状态
export async function checkTaskStatus(taskId: string) {
  const config = getAliyunConfig();
  const url = `${config.baseUrl}/tasks/${taskId}`;

  try {
    const response = await axios.get(url, {
      headers: getHeaders()
    });

    return response.data;
  } catch (error) {
    mlog('❌ Aliyun Task Status Error:', error);
    throw error;
  }
}

// 等待任务完成
export async function waitForTaskCompletion(taskId: string, maxAttempts = 30, interval = 2000): Promise<any> {
  let attempts = 0;

  while (attempts < maxAttempts) {
    const status = await checkTaskStatus(taskId);
    
    if (status.output.task_status === 'SUCCEEDED') {
      return status;
    } else if (status.output.task_status === 'FAILED') {
      throw new Error(`Task failed: ${status.output.message || 'Unknown error'}`);
    }

    await new Promise(resolve => setTimeout(resolve, interval));
    attempts++;
  }

  throw new Error('Task timed out');
}

// 生成图像的主函数
export async function generateImage(params: AliyunImageParams) {
  try {
    // 创建任务
    const task = await createImageGenerationTask(params);
    const taskId = task.output.task_id;

    // 等待任务完成
    const result = await waitForTaskCompletion(taskId);

    // 返回结果
    return {
      success: true,
      images: result.output.results.map((r: any) => ({
        url: r.url,
        prompt: r.orig_prompt,
        actualPrompt: r.actual_prompt
      }))
    };
  } catch (error) {
    mlog('❌ Image Generation Error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}