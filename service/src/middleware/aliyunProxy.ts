import type { NextFunction, Request, Response } from 'express'
import type { AxiosError, AxiosResponse } from 'axios'
import axios from 'axios'

// 导入mlog函数用于日志记录
import { mlog } from '../utils'

const ALIYUN_BASE_URL = 'https://dashscope.aliyuncs.com/api/v1'

export async function aliyunProxy(req: Request, res: Response, next: NextFunction): Promise<void | Response> {
  // 只处理阿里云 API 相关的请求
  if (!req.path.includes('/aliyun/'))
    return next()

  try {
    // 从原始请求中获取认证信息
    const authHeader = req.headers.authorization
    if (!authHeader)
      return res.status(401).json({ error: 'No authorization token provided' })

    // 构建转发到阿里云的请求URL
    // 处理路径，确保正确映射到阿里云API
    let targetPath = req.path

    // 移除前缀，处理多种可能的路径格式
    if (targetPath.startsWith('/api/aliyun'))
      targetPath = targetPath.substring('/api/aliyun'.length)
    else if (targetPath.startsWith('/aliyun'))
      targetPath = targetPath.substring('/aliyun'.length)

    // 确保路径以/开头
    if (!targetPath.startsWith('/'))
      targetPath = `/${targetPath}`

    // 处理特殊路径，确保符合阿里云API要求
    if (targetPath.includes('/services/aigc/text2image/image-synthesis')) {
      // 文生图API的特殊处理
      targetPath = '/services/aigc/text2image/image-synthesis'
    }
    else if (targetPath.includes('/tasks/')) {
      // 任务查询API的特殊处理
      const taskId = targetPath.split('/tasks/')[1]
      targetPath = `/tasks/${taskId}`
    }
    else if (targetPath.includes('/services/aigc/text2image/models')) {
      // 阿里云没有提供模型列表API，需要重定向到图像合成API
      // 这里我们将模型列表请求重定向到图像合成API，以便验证API密钥
      targetPath = '/services/aigc/text2image/image-synthesis'
    }

    const targetUrl = `${ALIYUN_BASE_URL}${targetPath}`

    // 仅在开发环境记录最基本的请求信息
    if (process.env.NODE_ENV === 'development')
      mlog('处理阿里云API请求:', `${req.method} ${targetPath}`)

    // 确保Authorization头部格式正确
    const authValue = authHeader.startsWith('Bearer ') ? authHeader : `Bearer ${authHeader}`

    // 转发请求到阿里云API
    const response: AxiosResponse = await axios({
      method: req.method,
      url: targetUrl,
      data: req.body,
      headers: {
        'Authorization': authValue,
        'Content-Type': 'application/json',
        'X-DashScope-Async': req.headers['x-dashscope-async'] as string || 'enable',
      },
    })

    // 仅在开发环境记录响应状态
    if (process.env.NODE_ENV === 'development')
      mlog('阿里云API响应状态:', response.status)

    // 返回阿里云API的响应
    return res.status(response.status).json(response.data)
  }
  catch (error) {
    const axiosError = error as AxiosError
    // 仅记录错误状态码和消息，不记录详细信息
    mlog('阿里云API代理错误:', `${axiosError.response?.status || 500} - ${axiosError.message}`)

    return res.status(axiosError.response?.status || 500).json({
      error: axiosError.response?.data || 'Internal Server Error',
      message: axiosError.message,
      request_id: axiosError.response?.headers?.['x-dashscope-request-id'] || '',
    })
  }
}
