/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable eqeqeq */
/* eslint-disable no-unreachable-loop */
// 🌸 替换字符串或数组中的内容
export const replaceString = (strs, target, value): any => {
  if (!strs || !target || !value) return
  if (Array.isArray(strs)) {
    return strs.map((item) => item.replace(new RegExp(target, 'g'), value))
  } else if (typeof strs === 'string') {
    return strs.replace(new RegExp(target, 'g'), value)
  }
}

// 🌸 数组 对象 null 判空
export const isEmpty = function (obj): boolean {
  const tostring = Object.prototype.toString
  if (obj == null) return true

  if (
    tostring.call(obj) == '[object Array]' ||
    tostring.call(obj) == '[object String]'
  ) {
    return obj.length === 0
  }

  if (tostring.call(obj) == '[object Object]') {
    for (const name in obj) {
      console.log(name)

      return false
    }
  }
  return true
}
