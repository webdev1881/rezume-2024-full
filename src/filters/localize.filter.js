import store from '@/store'
import ua from '@/languages/ua.json'
import en from '@/languages/en.json'

const locales = {
    'ua': ua,
    'en': en
}

export default function localizeFilter(key) {
    const locale = store.getters.locale || 'en'
    return locales[locale][key] || `[localize ERROR]: key "${key}"not found `
}