import { createFileRoute } from '@tanstack/react-router'

import { ColophonPage } from '#/features/Cardfolio/pages/ColophonPage'

export const Route = createFileRoute('/(cardfolio)/colophon')({
  component: ColophonPage,
})
