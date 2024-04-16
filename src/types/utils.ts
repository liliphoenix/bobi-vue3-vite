export type deviceType = () => {
  userTime: Date
  browserCode: string
  browserName: string
  browserVersion: string
  hardwarePlatform: string
  userAgent: string
}
export interface time {
  h: string | number
  s: string | number
  m: string | number
}
