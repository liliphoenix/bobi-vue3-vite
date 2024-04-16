import type { deviceType } from 'types/utils'
export const getUserDevice: deviceType = () => {
  console.log()
  const userTime = new Date()
  const browserCode = navigator.appCodeName
  const browserName = navigator.appName
  const browserVersion = navigator.appVersion
  const hardwarePlatform = navigator.platform
  const userAgent = navigator.userAgent

  return {
    userTime,
    browserCode,
    browserName,
    browserVersion,
    hardwarePlatform,
    userAgent
  }
}
