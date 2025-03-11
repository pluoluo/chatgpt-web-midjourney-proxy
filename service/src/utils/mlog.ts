/**
 * 日志工具函数
 * 用于替代console.log，符合项目的ESLint规则
 */

/**
 * 记录日志信息
 * @param msg 日志消息
 * @param args 其他参数
 */
export function mlog(msg: string, ...args: unknown[]): void {
  // 在开发环境或启用了调试模式时输出日志
  if (process.env.NODE_ENV === 'development' || process.env.DEBUG === 'true') {
    const logStyles = [
      'color:',
    ].join(';')

    const style = `${logStyles}${msg.includes('error') ? 'red' : '#dd9089'}`
    // eslint-disable-next-line no-console
    console.log('%c[aliyun-proxy]', style, msg, ...args)
  }
}
