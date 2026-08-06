import { useI18nContext } from './i18n-react'

export const useIsRtl = () => useI18nContext().locale === 'fa'
