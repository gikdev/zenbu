import { Outlet } from '@tanstack/react-router'

import { useHandleLanguageChange, useI18nContext } from '#/features/i18n'
import { useCurrentTheme, useHandleThemeChange } from '#/features/theming'

import { useConfigApiClient } from '../api/config'

export function RootComponent() {
  useConfigApiClient()
  useHandleLanguageChange()
  useHandleThemeChange()
  const theme = useCurrentTheme()
  const { LL } = useI18nContext()

  return (
    <div data-theme={theme} className='bg-bg-1 text-text-muted'>
      <title>{LL.welcome.title()}</title>

      <Outlet />
    </div>
  )
}
