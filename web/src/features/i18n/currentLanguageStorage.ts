import { StorageEntry, storage, keys } from '../persistence'
import type { Locales } from './i18n-types'

export const defaultLocale: Locales = 'en'

export const currentLanguageStorage = new StorageEntry<{ locale: Locales }>(storage, keys.I18n.CurrentLanguage, {
  locale: defaultLocale,
})
