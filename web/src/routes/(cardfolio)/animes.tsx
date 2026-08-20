import { createFileRoute } from '@tanstack/react-router'

import { AnimesPage } from '#/features/Cardfolio/pages/animes'

export const Route = createFileRoute('/(cardfolio)/animes')({
  component: AnimesPage,
})
