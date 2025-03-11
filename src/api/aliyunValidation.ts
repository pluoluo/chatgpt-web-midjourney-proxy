import { gptServerStore } from '@/store';
import axios from 'axios';
import { mlog } from './mjapi';

interface ValidationResult {
  isValid: boolean;
  message: string;
}

// 验证API密钥格式
function validateKeyFormat(apiKey: string): boolean {
  // 阿里云API密钥格式验证
  return /^sk-[a-zA-Z0-9]{32}$/.test(apiKey);
}

// 验证API密钥有效性和权限
export async function validateAliyunApiKey(): Promise<ValidationResult> {
  const apiKey = gptServerStore.myData.ALIYUN_API_KEY;
  
  // 检查API密钥是否存在
  if (!apiKey) {
    return {
      isValid: false,
      message: '阿里云API密钥未设置'
    };
  }

  // 验证API密钥格式
  if (!validateKeyFormat(apiKey)) {
    return {
      isValid: false,
      message: 'API密钥格式不正确'
    };
  }

  // 测试API调用权限
  try {
    // 使用图像合成API进行验证，因为阿里云没有提供专门的模型列表API
    const response = await axios.post('/api/aliyun/services/aigc/text2image/image-synthesis', {
      model: 'wanx-v1',
      input: {
        prompt: '测试验证'
      },
      parameters: {
        size: '512*512',
        n: 1
      }
    }, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'X-DashScope-Async': 'enable'
      }
    });

    if (response.status === 200) {
      return {
        isValid: true,
        message: 'API密钥有效且具有所需权限'
      };
    }

    return {
      isValid: false,
      message: '无法访问所需的API服务'
    };

  } catch (error: any) {
    mlog('❌ Aliyun API Validation Error:', error);
    
    if (error.response?.status === 401) {
      return {
        isValid: false,
        message: 'API密钥无效或未授权'
      };
    }

    if (error.response?.status === 403) {
      return {
        isValid: false,
        message: 'API密钥权限不足'
      };
    }

    return {
      isValid: false,
      message: `验证过程中发生错误: ${error.message}`
    };
  }
}