import { Outlet, createRootRoute } from '@tanstack/react-router'

import { useHandleLanguageChange } from '#/features/i18n/useHandleLanguageChange'
import { SettingsBtn, SettingsDialog } from '#/features/settings'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  useHandleLanguageChange()

  return (
    <div className='font-main bg-mist-950 text-mist-400'>
      <SettingsBtn />
      <SettingsDialog />
      <Outlet />
    </div>
  )
}
