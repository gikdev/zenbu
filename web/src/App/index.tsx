import { RouterProvider } from '@tanstack/react-router'
import { StrictMode } from 'react'

import './configs/styles.css'
import { I18nProvider } from '#/features/i18n'

import { QueryProvider } from './configs/QueryProvider'
import { router } from './configs/router'
import { ToastProvider } from './configs/ToastProvider'

export function App() {
  return (
    <StrictMode>
      <QueryProvider>
        <I18nProvider>
          <RouterProvider router={router} />
          <ToastProvider />
        </I18nProvider>
      </QueryProvider>
    </StrictMode>
  )
}
