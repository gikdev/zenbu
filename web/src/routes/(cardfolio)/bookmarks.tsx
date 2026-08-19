import { createFileRoute } from '@tanstack/react-router'

import { BookmarksPage } from '#/features/Cardfolio/pages/BookmarksPage'

export const Route = createFileRoute('/(cardfolio)/bookmarks')({
  component: BookmarksPage,
})
