import { useEffect, useState, type ReactNode } from 'react'

import { currentLanguageStorage, defaultLocale } from './currentLanguageStorage'
import TypesafeI18n from './i18n-react'
import { loadLocaleAsync } from './i18n-util.async'

interface Props {
  children: ReactNode
}

export function I18nProvider(p: Props) {
  const langResult = currentLanguageStorage.load()
  const lang = langResult.ok ? langResult.data.locale : defaultLocale
  const [wasLoaded, setWasLoaded] = useState(false)

  useEffect(() => {
    Promise.resolve()
      .then(() => loadLocaleAsync('en'))
      .then(() => loadLocaleAsync('fa'))
      .then(() => loadLocaleAsync('ja'))
      .then(() => setWasLoaded(true))
      .catch(console.error)
  }, [])

  if (!wasLoaded) return null

  return <TypesafeI18n locale={lang}>{p.children}</TypesafeI18n>
}
