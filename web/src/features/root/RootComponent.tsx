import { Outlet } from '@tanstack/react-router'

import { Show } from '#/common/helpers/Show'
import { useHandleLanguageChange, useI18nContext } from '#/features/i18n'
import { SettingsBtn, SettingsDialog } from '#/features/settings'
import { useCurrentTheme, useHandleThemeChange } from '#/features/theming'

import { useConfigApiClient } from '../api/config'

export function RootComponent() {
  useConfigApiClient()
  useHandleLanguageChange()
  useHandleThemeChange()
  const theme = useCurrentTheme()
  const { LL } = useI18nContext()
  const isDev = import.meta.env.DEV

  return (
    <div data-theme={theme} className='bg-bg-1 text-text-muted'>
      <title>{LL.welcome.title()}</title>

      <Show if={isDev}>
        <SettingsBtn />
        <SettingsDialog />
      </Show>

      <Outlet />
    </div>
  )
}
