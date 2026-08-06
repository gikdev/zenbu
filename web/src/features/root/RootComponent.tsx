import { Outlet, useLocation } from '@tanstack/react-router'
import { AnimatePresence, motion } from 'motion/react'

import { useHandleLanguageChange, useI18nContext } from '#/features/i18n'
import { useCurrentTheme, useHandleThemeChange } from '#/features/theming'

import { useConfigApiClient } from '../api/config'

export function RootComponent() {
  useConfigApiClient()
  useHandleLanguageChange()
  useHandleThemeChange()
  const theme = useCurrentTheme()
  const { LL } = useI18nContext()
  const location = useLocation()

  return (
    <div data-theme={theme} className='bg-bg-1 text-text-muted'>
      <title>{LL.welcome.title()}</title>

      <AnimatePresence mode='popLayout'>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.2, ease: 'linear' }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
