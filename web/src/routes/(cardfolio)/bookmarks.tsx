import { BookmarksPage } from '#/features/Cardfolio/pages/BookmarksPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(cardfolio)/bookmarks')({
  component: BookmarksPage,
})
