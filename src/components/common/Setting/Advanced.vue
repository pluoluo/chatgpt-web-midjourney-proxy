<script lang="ts" setup>
import { ref } from 'vue'
import { NButton, NInput, NSlider, useMessage } from 'naive-ui'
import { useSettingStore } from '@/store'
import type { SettingsState } from '@/store/modules/settings/helper'
import { t } from '@/locales'
import { gptServerStore } from '@/store'

const settingStore = useSettingStore()

const ms = useMessage()

const systemMessage = ref(settingStore.systemMessage ?? '')

const temperature = ref(settingStore.temperature ?? 0.5)

const top_p = ref(settingStore.top_p ?? 1)

// 阿里云设置
const aliyunApiKey = ref(gptServerStore.myData.ALIYUN_API_KEY ?? '')
const aliyunServer = ref(gptServerStore.myData.ALIYUN_SERVER ?? 'https://dashscope.aliyuncs.com/api/v1')

function updateSettings(options: Partial<SettingsState>) {
  if ('ALIYUN_API_KEY' in options || 'ALIYUN_SERVER' in options) {
    gptServerStore.setMyData(options)
    ms.success(t('common.success'))
    return
  }
  settingStore.updateSetting(options)
  ms.success(t('common.success'))
}

function handleReset() {
  settingStore.resetSetting()
  aliyunApiKey.value = ''
  aliyunServer.value = 'https://dashscope.aliyuncs.com/api/v1'
  gptServerStore.setMyData({
    ALIYUN_API_KEY: '',
    ALIYUN_SERVER: 'https://dashscope.aliyuncs.com/api/v1'
  })
  ms.success(t('common.success'))
  window.location.reload()
}
</script>

<template>
  <div class="p-4 space-y-5 min-h-[200px]">
    <div class="space-y-6">
      <div class="flex items-center space-x-4">
        <span class="flex-shrink-0 w-[120px]">{{ $t('setting.role') }}</span>
        <div class="flex-1">
          <NInput v-model:value="systemMessage" type="textarea" :autosize="{ minRows: 1, maxRows: 4 }" />
        </div>
        <NButton size="tiny" text type="primary" @click="updateSettings({ systemMessage })">
          {{ $t('common.save') }}
        </NButton>
      </div>

      <!-- 阿里云 API 设置 -->
      <div class="flex items-center space-x-4">
        <span class="flex-shrink-0 w-[120px]">阿里云 API Key</span>
        <div class="flex-1">
          <NInput v-model:value="aliyunApiKey" type="password" placeholder="请输入阿里云 API Key" />
        </div>
        <NButton size="tiny" text type="primary" @click="updateSettings({ ALIYUN_API_KEY: aliyunApiKey })">
          {{ $t('common.save') }}
        </NButton>
      </div>

      <div class="flex items-center space-x-4">
        <span class="flex-shrink-0 w-[120px]">阿里云服务地址</span>
        <div class="flex-1">
          <NInput v-model:value="aliyunServer" type="text" placeholder="阿里云服务地址，默认为 https://dashscope.aliyuncs.com/api/v1" />
        </div>
        <NButton size="tiny" text type="primary" @click="updateSettings({ ALIYUN_SERVER: aliyunServer })">
          {{ $t('common.save') }}
        </NButton>
      </div>

      <div class="flex items-center space-x-4">
        <span class="flex-shrink-0 w-[120px]">{{ $t('setting.temperature') }} </span>
        <div class="flex-1">
          <NSlider v-model:value="temperature" :max="2" :min="0" :step="0.1" />
        </div>
        <span>{{ temperature }}</span>
        <NButton size="tiny" text type="primary" @click="updateSettings({ temperature })">
          {{ $t('common.save') }}
        </NButton>
      </div>
      <div class="flex items-center space-x-4">
        <span class="flex-shrink-0 w-[120px]">{{ $t('setting.top_p') }} </span>
        <div class="flex-1">
          <NSlider v-model:value="top_p" :max="1" :min="0" :step="0.1" />
        </div>
        <span>{{ top_p }}</span>
        <NButton size="tiny" text type="primary" @click="updateSettings({ top_p })">
          {{ $t('common.save') }}
        </NButton>
      </div>
      <div class="flex items-center space-x-4">
        <span class="flex-shrink-0 w-[120px]">&nbsp;</span>
        <NButton size="small" @click="handleReset">
          {{ $t('common.reset') }}
        </NButton>
      </div>
    </div>
  </div>
</template>
