import { createI18n } from 'vue-i18n'
import zh from './zh'
import en from './en'

const messages = {
    en: {
        ...en
    },
    zh: {
        ...zh
    },
}

const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem('language')||'zh',
    fallbackLocale: 'en',
    messages,
})

export default i18n

