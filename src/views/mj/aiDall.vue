<script setup lang="ts">
import { ref ,computed,watch} from 'vue';
import { NButton,NSelect,NInput,NSlider,NInputNumber} from 'naive-ui';
//import {gptFetch, mlog, upImg} from '@/api'
import { homeStore } from '@/store';
import { SvgIcon } from '@/components/common';

//const ms = useMessage();
const config = ref( {
model:[
{  "label": "DALL·E 3", "value": "dall-e-3" }
,{  "label": "DALL·E 2", "value": "dall-e-2" }
,{  "label": "Flux", "value": "flux" }
,{  "label": "Flux-Dev", "value": "flux-dev" }
,{  "label": "Flux-Pro", "value": "flux-pro" }
,{  "label": "Flux.1.1-Pro", "value": "flux.1.1-pro" }
]
});
const st =ref({isGo:false });     
const f = ref({size:'1024x1024', prompt:'', model: "dall-e-3", n: 1, negative_prompt: '', steps: 50, cfg_scale: 7, seed: undefined as number | undefined, style: undefined as string | undefined});
const isDisabled= computed(()=>{
    if(st.value.isGo) return true;
    if(f.value.prompt.trim()=='') return true;
    return false;
});
const create= async ()=>{
    let obj= {
        action:'gpt.dall-e-3',
        data:f.value
    }
    homeStore.setMyData({act:'draw', actData:obj});
    st.value.isGo=true;
}
watch(()=>homeStore.myData.act,(n)=>{
    if(n=='dallReload') {
        st.value.isGo=false;
        f.value.prompt='';
    }
    if(n=='updateChat')  st.value.isGo=false;  
})

const dimensionsList= computed(()=>{
    if(f.value.model=='dall-e-2'){
        return [{ 
                "label": "1024px*1024px",
                "value": "1024x1024"
            }, {
                "label": "512px*512px",
                "value": "512x512"
            }, {
                "label": "256px*256px",
                "value": "256x256"
            }
    ];
    } 
    return [{ 
                "label": "1024px*1024px",
                "value": "1024x1024"
            }, {
                "label": "1792px*1024px",
                "value": "1792x1024"
            }, {
                "label": "1024px*1792px",
                "value": "1024x1792"
            }
     ]
     
})
watch(()=>f.value.model,(n)=>{
    f.value.size='1024x1024';
})

const showAdvancedSettings = computed(() => {
    // DALL-E系列模型不支持高级设置
    if (f.value.model.startsWith('dall-e-')) return false;
    return f.value.model.startsWith('flux-') || 
           f.value.model.startsWith('wanx') || 
           f.value.model.startsWith('stable-diffusion-') ||
           f.value.model.startsWith('pollinations-');
});

const showNegativePrompt = computed(() => {
    return f.value.model.startsWith('flux-') || 
           f.value.model.startsWith('wanx') || 
           f.value.model.startsWith('stable-diffusion-');
});
</script>
<template>
<section class="mb-4 flex justify-between items-center"  >
     <div>{{ $t('mjchat.version') }} </div>
    <n-select v-model:value="f.model" :options="config.model" filterable tag size="small"  class="!w-[70%]" :clearable="false" />
</section>
<section class="mb-4 flex justify-between items-center"  >
     <div>{{ $t('mjchat.size') }}</div>
    <n-select v-model:value="f.size" :options="dimensionsList"  filterable tag size="small"  class="!w-[70%]" :clearable="false" />
</section>
<div class="mb-1">
     <n-input    type="textarea"  v-model:value="f.prompt"   :placeholder="$t('mjchat.prompt')" round clearable maxlength="500" show-count 
      :autosize="{   minRows:3, maxRows:10 }" />
</div>

<!-- 负面提示词 -->
<div v-if="showNegativePrompt" class="mb-1 mt-2">
     <n-input type="textarea" v-model:value="f.negative_prompt" placeholder="负面提示词（可选）" round clearable maxlength="500" show-count 
      :autosize="{ minRows:2, maxRows:5 }" />
</div>

<!-- 高级设置 -->
<div v-if="showAdvancedSettings" class="mt-4 space-y-4">
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
    
    <section v-if="f.model.startsWith('wanx')" class="flex justify-between items-center">
        <div>风格</div>
        <n-select v-model:value="f.style" :options="[
            { label: '写实风格', value: 'realistic' },
            { label: '动漫风格', value: 'anime' },
            { label: '艺术风格', value: 'artistic' }
        ]" class="w-[70%]" clearable placeholder="选择风格（可选）" />
    </section>
</div>

<div class="mb-4 flex justify-end items-center">
    <div class="flex ">
         <n-button type="primary" :block="true" :disabled="isDisabled" @click="create()"  >
            <SvgIcon icon="mingcute:send-plane-fill" />   
             {{ $t('mjchat.imgcreate') }} 
        </n-button>
    </div>
</div>

<ul class="pt-4" v-html="$t('mjchat.dalleInfo')">
   
</ul>
</template>