// 🌸 获取uuid
export const getUUID = (): string => {
  return +new Date() + Math.random().toString(16).replace('.', '')
}

// 🌸 获取随机数
export const randomString = (len = 32): string => {
  const t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnoprstuvwxyz1234567890'
  const a = t.length
  let str = ''

  for (let i = 0; i < len; i++) {
    str += t.charAt(Math.floor(Math.random() * a))
  }
  return str
}
