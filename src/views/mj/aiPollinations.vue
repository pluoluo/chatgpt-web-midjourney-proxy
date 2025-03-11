<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { NButton, NSelect, NInput, NInputNumber } from 'naive-ui';
import { homeStore } from '@/store';
import { SvgIcon } from '@/components/common';

// 移除未使用的 useMessage 声明
const config = ref({
  model: [
    { "label": "Flux", "value": "flux" },
    { "label": "Flux Realism", "value": "flux-realism" },
    { "label": "Any Dark", "value": "any-dark" },
    { "label": "Flux Anime", "value": "flux-anime" },
    { "label": "Flux 3D", "value": "flux-3d" },
    { "label": "Turbo", "value": "turbo" }
  ]
});

const st = ref({ isGo: false });
const f = ref({
  size: '1024x1024',
  prompt: '',
  model: "flux",
  seed: undefined as number | undefined
});

const isDisabled = computed(() => {
  if (st.value.isGo) return true;
  if (f.value.prompt.trim() == '') return true;
  return false;
});

const create = async () => {
  // 解析尺寸
  const [width, height] = f.value.size.split('x').map(Number);
  
  // 构建 Pollinations URL
  const baseUrl = 'https://image.pollinations.ai/prompt/';
  const params = [];
  const prompt = encodeURIComponent(f.value.prompt);
  
  if (width) params.push(`width=${width}`);
  if (height) params.push(`height=${height}`);
  if (f.value.seed) params.push(`seed=${f.value.seed}`);
  if (f.value.model) params.push(`model=${f.value.model}`);
  
  const imageUrl = `${baseUrl}${prompt}${params.length > 0 ? '?' + params.join('&') : ''}`;
  
  let obj = {
    action: 'gpt.dall-e-3',
    data: {
      prompt: f.value.prompt,
      imageUrl: imageUrl,
      model: 'pollinations'  // 添加一个标识，表明这是 Pollinations API 调用
    }
  }
  homeStore.setMyData({ act: 'draw', actData: obj });
  st.value.isGo = true;
}

watch(() => homeStore.myData.act, (n) => {
  if (n == 'dallReload') {
    st.value.isGo = false;
    f.value.prompt = '';
  }
  if (n == 'updateChat') st.value.isGo = false;
})

const dimensionsList = computed(() => {
  return [{
    "label": "1024x1024",
    "value": "1024x1024"
  }, {
    "label": "1792x1024",
    "value": "1792x1024"
  }, {
    "label": "1024x1792",
    "value": "1024x1792"
  }]
});
</script>

<template>
  <section class="mb-4 flex justify-between items-center">
    <div>{{ $t('mjchat.version') }}</div>
    <n-select v-model:value="f.model" :options="config.model" filterable tag size="small" class="!w-[70%]"
      :clearable="false" />
  </section>

  <section class="mb-4 flex justify-between items-center">
    <div>{{ $t('mjchat.size') }}</div>
    <n-select v-model:value="f.size" :options="dimensionsList" filterable tag size="small" class="!w-[70%]"
      :clearable="false" />
  </section>

  <div class="mb-1">
    <n-input type="textarea" v-model:value="f.prompt" :placeholder="$t('mjchat.prompt')" round clearable maxlength="500"
      show-count :autosize="{ minRows: 3, maxRows: 10 }" />
  </div>

  <!-- 高级设置 -->
  <div class="mt-4 space-y-4">
    <section class="flex justify-between items-center">
      <div>随机种子</div>
      <n-input-number v-model:value="f.seed" :min="0" :max="2147483647" class="w-[70%]" placeholder="留空随机生成" />
    </section>
  </div>

  <div class="mb-4 flex justify-end items-center">
    <div class="flex">
      <n-button type="primary" :block="true" :disabled="isDisabled" @click="create()">
        <SvgIcon icon="mingcute:send-plane-fill" />
        {{ $t('mjchat.imgcreate') }}
      </n-button>
    </div>
  </div>

  <div class="pt-4 text-sm text-gray-500">
    * Pollinations 是一个免费的图像生成服务，不需要 API Key
  </div>
</template>