### Stable Diffusion API
Stable Diffusion是一个强大的开源图像生成模型，通过API可以轻松集成到您的应用程序中。

#### API参数说明
```
# 图像生成参数
Prompt: **详细的图像描述**
Negative Prompt: **不希望出现在图像中的元素**
Width: **512-1024**
Height: **512-1024**
Steps: **20-50** (生成步数，越高质量越好但速度更慢)
CFG Scale: **7-12** (提示词相关性，越高越严格遵循提示词)
Sampler: **DPM++ 2M Karras** (采样器)
Model: **SD XL 1.0** (模型版本)
```

#### API 文档
```
## Stable Diffusion API Endpoints

### 文本生成图像
生成图像: `POST https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image`

### 图像到图像
图像编辑: `POST https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/image-to-image`

### 图像放大
图像放大: `POST https://api.stability.ai/v1/generation/esrgan-v1-x2plus/image-to-image/upscale`

### 可用模型列表
获取模型列表: `GET https://api.stability.ai/v1/engines/list`

*所有请求都需要在Header中包含 `Authorization: Bearer YOUR_API_KEY`*
```

#### Python 使用示例
```python
import requests
import json
import base64

def generate_image(prompt, api_key):
    url = "https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image"
    
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
    
    payload = {
        "text_prompts": [
            {
                "text": prompt,
                "weight": 1
            }
        ],
        "cfg_scale": 7,
        "height": 1024,
        "width": 1024,
        "samples": 1,
        "steps": 30,
    }
    
    response = requests.post(url, headers=headers, json=payload)
    
    if response.status_code == 200:
        data = response.json()
        # 保存生成的图像
        for i, image in enumerate(data["artifacts"]):
            with open(f"generated_image_{i}.png", "wb") as f:
                f.write(base64.b64decode(image["base64"]))
        return "图像生成成功！"
    else:
        return f"错误: {response.text}"

# 使用示例
api_key = "your-api-key"
prompt = "一只可爱的猫咪在阳光下玩耍"
result = generate_image(prompt, api_key)
print(result)
```

#### Node.js 使用示例
```javascript
const fetch = require('node-fetch');
const fs = require('fs');

async function generateImage(prompt, apiKey) {
    const response = await fetch(
        'https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                text_prompts: [
                    {
                        text: prompt,
                        weight: 1,
                    },
                ],
                cfg_scale: 7,
                height: 1024,
                width: 1024,
                samples: 1,
                steps: 30,
            }),
        }
    );

    if (!response.ok) {
        throw new Error(`生成失败: ${await response.text()}`);
    }

    const responseData = await response.json();
    
    // 保存生成的图像
    responseData.artifacts.forEach((image, index) => {
        const buffer = Buffer.from(image.base64, 'base64');
        fs.writeFileSync(`generated_image_${index}.png`, buffer);
    });

    return '图像生成成功！';
}

// 使用示例
const apiKey = 'your-api-key';
const prompt = '一只可爱的猫咪在阳光下玩耍';

generateImage(prompt, apiKey)
    .then(console.log)
    .catch(console.error);
```

#### Vue 3 组件示例
```vue
<template>
  <div class="image-generator">
    <n-input
      v-model:value="prompt"
      type="textarea"
      placeholder="请输入图像描述..."
    />
    <n-button
      :loading="loading"
      type="primary"
      @click="generateImage"
    >
      生成图像
    </n-button>
    <div v-if="imageUrl" class="image-preview">
      <img :src="imageUrl" alt="Generated Image" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { NInput, NButton } from 'naive-ui'

const prompt = ref('')
const loading = ref(false)
const imageUrl = ref('')

const API_KEY = 'your-api-key'

async function generateImage() {
  if (!prompt.value) return
  
  loading.value = true
  try {
    const response = await fetch(
      'https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`,
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          text_prompts: [
            {
              text: prompt.value,
              weight: 1,
            },
          ],
          cfg_scale: 7,
          height: 1024,
          width: 1024,
          samples: 1,
          steps: 30,
        }),
      }
    )

    if (!response.ok) {
      throw new Error('生成失败')
    }

    const data = await response.json()
    imageUrl.value = `data:image/png;base64,${data.artifacts[0].base64}`
  } catch (error) {
    console.error('生成图像时出错:', error)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.image-generator {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.image-preview {
  margin-top: 20px;
}

.image-preview img {
  max-width: 100%;
  height: auto;
}
</style>
``` 