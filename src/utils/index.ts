import type { getTokenFun, globalProperties } from '@/types'
import { getCurrentInstance } from 'vue'
// 🌸 获取token方法
export const getToken: getTokenFun = () => {
  const token = localStorage.getItem('token')
  return token
}

/**
 *  🌸 获取vue全局变量
 */
export const getVueGlobalValue: () => globalProperties | null = () => {
  const globalProperties = getCurrentInstance()
  if (globalProperties !== null) {
    return globalProperties.appContext.config.globalProperties
  } else {
    return null
  }
}

export const downloadFile = (url, filename): void => {
  const element = document.createElement('a')
  element.setAttribute('href', url)
  element.setAttribute('download', filename)
  element.style.display = 'none'
  element.click()
  console.log('下载成功')
}
