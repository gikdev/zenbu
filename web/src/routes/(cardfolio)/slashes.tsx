import { createFileRoute } from '@tanstack/react-router'

import { SlashesPage } from '#/features/Cardfolio/pages/slashes'

export const Route = createFileRoute('/(cardfolio)/slashes')({
  component: SlashesPage,
})
