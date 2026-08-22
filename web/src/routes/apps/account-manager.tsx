import { createFileRoute } from '@tanstack/react-router'

import { AccountManagerPage } from '#/features/AccountManager'

export const Route = createFileRoute('/apps/account-manager')({
  component: AccountManagerPage,
})
