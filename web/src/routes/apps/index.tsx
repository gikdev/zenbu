import { createFileRoute } from '@tanstack/react-router'

import { AppShortcutsPage } from '#/features/app-shortcuts/AppShortcutsPage'

export const Route = createFileRoute('/apps/')({
  component: AppShortcutsPage,
})
