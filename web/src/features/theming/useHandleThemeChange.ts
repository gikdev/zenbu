import { useEffect } from 'react'

import { useCurrentTheme } from '../theming/store'
import { currentThemeStorage } from './currentThemeStorage'

export function useHandleThemeChange() {
  const theme = useCurrentTheme()

  useEffect(() => {
    const result = currentThemeStorage.save({ theme })

    if (!result.ok) {
      console.warn("Saving wasn't successful.", result.error)
    }
  }, [theme])
}
