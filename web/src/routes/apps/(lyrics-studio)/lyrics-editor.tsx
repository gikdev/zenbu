import { createFileRoute } from '@tanstack/react-router'

import { LyricsEditorPage } from '#/features/lyrics-studio/lyrics-editor/LyricsEditorPage'

export const Route = createFileRoute('/apps/(lyrics-studio)/lyrics-editor')({
  component: LyricsEditorPage,
})
