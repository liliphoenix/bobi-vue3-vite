import type { time } from 'types/utils'
// 🌸 13位时间戳格式转化为 yyyy/m/dd h:m Am
export const getDateTime = (timeStamp): string => {
  const date = new Date(timeStamp)
  const y = date.getFullYear()
  let minute: number | string = date.getMinutes()
  let m: number | string = date.getMonth() + 1
  let d: number | string = date.getDate()
  let h: number | string = date.getHours()
  m = m < 10 ? '0' + m : m
  d = d < 10 ? '0' + d : d
  minute = minute < 10 ? '0' + minute : minute
  const unit = h < 12 ? 'AM' : 'PM'
  h = h < 12 ? h : h - 12
  return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ' ' + unit
}
// 🌸 时间戳转换为h、m、s

export const getClock = (timeStamp): time => {
  const date = new Date(timeStamp)
  let h: number | string = date.getHours()
  h = h < 10 ? '0' + h : h
  let m: number | string = date.getMinutes()
  m = m < 10 ? '0' + m : m
  let s: number | string = date.getSeconds()
  s = s < 10 ? '0' + s : s
  return { h, m, s }
}

/**
 * 🌸 毫秒值转换为h、m、s
 * seconds:毫秒值 必填
 * type:modify 根据毫秒值自行匹配hms/dhm
 */
export const formatTimeMap = (seconds, type = 'modify'): any => {
  if (seconds < 0) return
  if (seconds > 3600 * 24 && type !== 'hms') {
    const d = Math.floor(seconds / 86400)
    const h = Math.floor((seconds % 86400) / 3600)
    const m = Math.floor((seconds % 3600) / 60)
    return { d, h, m }
  } else {
    // 🌸 超过24小时也要展示时分秒
    const h = Math.floor(seconds / 3600)
    const m = Math.floor((seconds / 60) % 60)
    const s = Math.floor(seconds % 60)
    return { h, m, s }
  }
}

/**
 * 🌸 国际化时间
 * id（hh.mm  dd/mm/yy）   eg:15.03  30/11/2021
 * my (hh.mm  dd/mm/yy)    eg:15.03  30/11/2021
 * ph（mm/dd/yy h:mm unit）  eg:11/30/2021  3:03pm
 * za (hh:mm dd/mm/yyyy)   eg:15:03  30/11/2021
 */
export const getInternationalDateTime = (timeStamp, country): string => {
  const date = new Date(timeStamp)
  const y = date.getFullYear()
  let minute: number | string = date.getMinutes()
  let m: number | string = date.getMonth() + 1
  let d: number | string = date.getDate()
  let h: number | string = date.getHours()
  m = m < 10 ? '0' + m : m
  d = d < 10 ? '0' + d : d
  const h2 = h < 12 ? h : h - 12
  minute = minute < 10 ? '0' + minute : minute
  const unit = h < 12 ? 'am' : 'pm'
  h = h < 10 ? '0' + h : h
  if (country === 'ph') {
    return `${m}/${d}/${y} ${h2}:${minute}${unit}`
  } else if (country === 'za') {
    return `${h}:${minute} ${d}/${m}/${y}`
  } else if (country === 'eg') {
    return `${d}/${m}/${y} ${h}:${minute}`
  } else {
    return `${h}.${minute} ${d}/${m}/${y}`
  }
}
