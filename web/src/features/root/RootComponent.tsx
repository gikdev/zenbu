import { Outlet } from '@tanstack/react-router'

import { useHandleLanguageChange } from '#/features/i18n'
import { SettingsBtn, SettingsDialog } from '#/features/settings'
import { useCurrentTheme, useHandleThemeChange } from '#/features/theming'
import { useConfigApiClient } from '../api/config'

export function RootComponent() {
  useConfigApiClient()
  useHandleLanguageChange()
  useHandleThemeChange()
  const theme = useCurrentTheme()

  return (
    <div data-theme={theme} className='bg-bg-1 text-text-muted'>
      <SettingsBtn />
      <SettingsDialog />
      <Outlet />
    </div>
  )
}
