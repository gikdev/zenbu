import { createFileRoute } from '@tanstack/react-router'

import { LanguagesPage } from '#/features/Cardfolio/languages'

export const Route = createFileRoute('/(cardfolio)/languages')({
  component: LanguagesPage,
})
