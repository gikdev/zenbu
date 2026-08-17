import { createFileRoute } from '@tanstack/react-router'

import { ProfilePage } from '#/features/Cardfolio/pages/ProfilePage'

export const Route = createFileRoute('/(cardfolio)/')({
  component: ProfilePage,
})
