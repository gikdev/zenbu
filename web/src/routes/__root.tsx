import { Outlet, createRootRoute } from '@tanstack/react-router'

import { useHandleLanguageChange } from '#/features/i18n/useHandleLanguageChange'
import { SettingsBtn, SettingsDialog } from '#/features/settings'
import { useCurrentTheme, useHandleThemeChange } from '#/features/theming'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
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
