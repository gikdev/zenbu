import { useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'

import { currentLanguageStorage } from './currentLanguageStorage'
import { useI18nContext } from './i18n-react'

export function useHandleLanguageChange() {
  const queryClient = useQueryClient()
  const { locale } = useI18nContext()

  useEffect(() => {
    document.documentElement.setAttribute('dir', locale === 'fa' ? 'rtl' : 'ltr')
    document.documentElement.setAttribute('lang', locale)
  }, [locale])

  useEffect(() => {
    queryClient.invalidateQueries()
  }, [locale])

  useEffect(() => {
    const result = currentLanguageStorage.save({ locale })

    if (!result.ok) {
      console.warn("Saving wasn't successful.", result.error)
    }
  }, [locale])
}
