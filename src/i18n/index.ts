import { createI18n } from 'vue-i18n'
import en from './en'
import zh from './zh'
const i18n = createI18n({
  locale: 'en',
  allowComposition: true,
  legacy: false,
  messages: {
    en,
    zh
  },
  globalInjection: true
})

export default i18n
