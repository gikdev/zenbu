import { RouterProvider } from '@tanstack/react-router'
import { StrictMode } from 'react'

import { I18nProvider } from '#/features/i18n'

import './configs/styles.css'
import { router } from './configs/router'
import { ToastProvider } from './configs/ToastProvider'

export function App() {
  return (
    <StrictMode>
      <I18nProvider>
        <RouterProvider router={router} />
        <ToastProvider />
      </I18nProvider>
    </StrictMode>
  )
}
