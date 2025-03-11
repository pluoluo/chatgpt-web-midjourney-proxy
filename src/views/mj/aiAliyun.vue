<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { NButton, NSelect, NInput, NSlider, NInputNumber } from 'naive-ui';
import { homeStore } from '@/store';
import { SvgIcon } from '@/components/common';

const config = ref({
  model: [
    { "label": "Flux Schnell", "value": "flux-schnell" },
    { "label": "Flux Dev", "value": "flux-dev" },
    { "label": "SD 3.5", "value": "stable-diffusion-3.5-large" },
    { "label": "SD 3.5 Turbo", "value": "stable-diffusion-3.5-large-turbo" },
    { "label": "万象 2.1 Turbo", "value": "wanx2.1-t2i-turbo" },
    { "label": "万象 2.1 Plus", "value": "wanx2.1-t2i-plus" },
    { "label": "万象 2.0 Turbo", "value": "wanx2.0-t2i-turbo" }
  ]
});

const st = ref({ isGo: false });
const f = ref({
  size: '1024*1024',
  prompt: '',
  model: "flux-schnell",
  n: 1,
  negative_prompt: '',
  steps: 50,
  cfg_scale: 7,
  seed: undefined as number | undefined,
  style: undefined as string | undefined
});

const isDisabled = computed(() => {
  if (st.value.isGo) return true;
  if (f.value.prompt.trim() == '') return true;
  return false;
});

const create = async () => {
  let obj = {
    action: 'gpt.dall-e-3',
    data: f.value
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
  // 根据模型类型返回不同的尺寸选项
  if (f.value.model.startsWith('wanx')) {
    // 万象模型支持的尺寸
    return [
      { "label": "512*512", "value": "512*512" },
      { "label": "768*768", "value": "768*768" },
      { "label": "1024*1024", "value": "1024*1024" },
      { "label": "720*1280", "value": "720*1280" },
      { "label": "1280*720", "value": "1280*720" },
      { "label": "768*1280", "value": "768*1280" },
      { "label": "1280*768", "value": "1280*768" }
    ];
  } else if (f.value.model.startsWith('stable-diffusion')) {
    // SD 3.5 模型支持的尺寸
    return [
      { "label": "512*512", "value": "512*512" },
      { "label": "768*768", "value": "768*768" },
      { "label": "1024*1024", "value": "1024*1024" },
      { "label": "512*768", "value": "512*768" },
      { "label": "768*512", "value": "768*512" },
      { "label": "768*1024", "value": "768*1024" },
      { "label": "1024*768", "value": "1024*768" }
    ];
  } else {
    // Flux 模型支持的尺寸
    return [
      { "label": "512*512", "value": "512*512" },
      { "label": "768*768", "value": "768*768" },
      { "label": "1024*1024", "value": "1024*1024" },
      { "label": "512*768", "value": "512*768" },
      { "label": "768*512", "value": "768*512" },
      { "label": "768*1024", "value": "768*1024" },
      { "label": "1024*768", "value": "1024*768" }
    ];
  }
});

const showStyleOptions = computed(() => {
  return f.value.model.startsWith('wanx');
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

  <!-- 负面提示词 -->
  <div class="mb-1 mt-2">
    <n-input type="textarea" v-model:value="f.negative_prompt" placeholder="负面提示词（可选）" round clearable maxlength="500"
      show-count :autosize="{ minRows: 2, maxRows: 5 }" />
  </div>

  <!-- 高级设置 -->
  <div class="mt-4 space-y-4">
    <section class="flex justify-between items-center">
      <div>采样步数</div>
      <n-slider v-model:value="f.steps" :min="20" :max="150" :step="1" class="w-[70%]" />
      <div class="w-12 text-right">{{ f.steps }}</div>
    </section>

    <section class="flex justify-between items-center">
      <div>提示词相关性</div>
      <n-slider v-model:value="f.cfg_scale" :min="1" :max="20" :step="0.1" class="w-[70%]" />
      <div class="w-12 text-right">{{ f.cfg_scale }}</div>
    </section>

    <section class="flex justify-between items-center">
      <div>随机种子</div>
      <n-input-number v-model:value="f.seed" :min="0" :max="2147483647" class="w-[70%]" placeholder="留空随机生成" />
    </section>

    <section v-if="showStyleOptions" class="flex justify-between items-center">
      <div>风格</div>
      <n-select v-model:value="f.style" :options="[
        { label: '写实风格', value: 'realistic' },
        { label: '动漫风格', value: 'anime' },
        { label: '艺术风格', value: 'artistic' }
      ]" class="w-[70%]" clearable placeholder="选择风格（可选）" />
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
</template>