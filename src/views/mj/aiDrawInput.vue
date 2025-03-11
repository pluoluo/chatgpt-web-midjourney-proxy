<script setup lang="ts">
import { NTabs, NTabPane, NSpace, NCard } from 'naive-ui';
import aiDrawInputItem from './aiDrawInputItem.vue'
import aiFace from './aiFace.vue'
import aiBlend from './aiBlend.vue'
import aiDall from './aiDall.vue'
import aiIdeoInput from './aiIdeoInput.vue'
import aiAliyun from './aiAliyun.vue'
import aiPollinations from './aiPollinations.vue'
import { useBasicLayout } from '@/hooks/useBasicLayout'
import { SvgIcon } from '@/components/common'
import { onMounted, ref, watch } from 'vue';
import { gptServerStore } from '@/store';
import { mlog } from '@/api';
import { useRoute } from 'vue-router'; 

const route = useRoute();
const $emit=defineEmits(['drawSent','close']);
const drawSent=(d:any )=> $emit('drawSent',d);
const {isMobile}= useBasicLayout()

const st= ref({
  drawType:'draw',
  tab:'',
  activeComponent: 'midjourney'
});

const components = {
  midjourney: {
    component: aiDrawInputItem,
    label: 'MidJourney',
    icon: 'ri:image-2-fill'
  },
  dalle: {
    component: aiDall,
    label: 'Dall·E',
    icon: 'ri:openai-fill'
  },
  ideogram: {
    component: aiIdeoInput,
    label: 'IdeoGram',
    icon: 'ri:palette-fill'
  },
  aliyun: {
    component: aiAliyun,
    label: '阿里云',
    icon: 'ri:alipay-fill'
  },
  pollinations: {
    component: aiPollinations,
    label: 'Pollinations',
    icon: 'ri:flower-fill'
  }
};

onMounted(()=>{
  if(gptServerStore.myData.DRAW_TYPE) {
    st.value.drawType = gptServerStore.myData.DRAW_TYPE;
    st.value.activeComponent = gptServerStore.myData.DRAW_TYPE;
  }
})

const handleUpdateValue=(v:string)=>{
   st.value.activeComponent = v;
   gptServerStore.setMyData({DRAW_TYPE:v})
}

const initLoad=()=>{
    if(route.query.tab){
        st.value.tab = 'midjourney';
        let tt = (route.query.tab as string).toLocaleLowerCase();
        if(['dall.e','ideogram'].indexOf(tt)>-1){
           st.value.tab = tt;
        }
        handleUpdateValue(st.value.tab)
    }
    else st.value.tab = (gptServerStore.myData.DRAW_TYPE?gptServerStore.myData.DRAW_TYPE:'midjourney')
}
initLoad();
</script>

<template>
<div class="overflow-y-auto bg-[#fafbfc] pt-2 dark:bg-[#18181c] h-full px-4">
  <!-- 第一排选项卡 -->
  <div class="grid grid-cols-3 gap-2 mb-2">
    <div v-for="(item, key) in ['midjourney', 'dalle', 'ideogram']" :key="key"
      class="cursor-pointer rounded-lg transition-all duration-300"
      :class="st.activeComponent === item ? 'bg-primary text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-800'"
      @click="handleUpdateValue(item)">
      <div class="py-1 px-2 text-center">
        <span>{{ components[item].label }}</span>
      </div>
    </div>
  </div>

  <!-- 第二排选项卡 -->
  <div class="grid grid-cols-2 gap-2 mb-2">
    <div v-for="(item, key) in ['aliyun', 'pollinations']" :key="key"
      class="cursor-pointer rounded-lg transition-all duration-300"
      :class="st.activeComponent === item ? 'bg-primary text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-800'"
      @click="handleUpdateValue(item)">
      <div class="py-1 px-2 text-center">
        <span>{{ components[item].label }}</span>
      </div>
    </div>
  </div>

  <!-- 内容区域 -->
  <div class="mt-2">
    <!-- MidJourney 特殊处理 -->
    <template v-if="st.activeComponent === 'midjourney'">
      <n-tabs type="segment" animated default-value="draw23" size="small">
        <n-tab-pane name="draw23" :tab="$t('mjchat.draw')">
          <aiDrawInputItem @draw-sent="drawSent" @close="$emit('close')" />
        </n-tab-pane>
        <n-tab-pane name="face" :tab="$t('mjchat.face')">
          <div class="p-4"><aiFace /></div>
        </n-tab-pane>
        <n-tab-pane name="blend" :tab="$t('mjchat.blend')">
          <div class="p-4"><aiBlend /></div>
        </n-tab-pane>
      </n-tabs>
    </template>

    <!-- 其他组件 -->
    <template v-else>
      <component :is="components[st.activeComponent].component" />
    </template>
  </div>

  <!-- 移动端关闭按钮 -->
  <div v-if="isMobile" class="mt-4 flex justify-center">
    <div class="cursor-pointer p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg" @click="$emit('close')">
      <SvgIcon icon="ri:close-circle-line" class="text-xl" />
    </div>
  </div>
</div>
</template>

<style scoped>
.bg-primary {
  background-color: var(--primary-color);
}
</style>