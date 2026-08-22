import {
  AddressBookIcon,
  CardsIcon,
  GearIcon,
  KanbanIcon,
  MusicNoteIcon,
  NotePencilIcon,
  PencilIcon,
  PenNibStraightIcon,
  TimerIcon,
  UserCircleIcon,
} from '@phosphor-icons/react'
import { linkOptions } from '@tanstack/react-router'
import { useMemo } from 'react'

import { useI18nContext } from '../i18n'
import type { DockApp } from './DockApp'
import { DockAppTag } from './DockAppTag'

export const useDockApps = (): DockApp[] => {
  const { LL, locale } = useI18nContext()

  return useMemo(
    () => [
      {
        id: 'sucof',
        name: LL.sucof.title(),
        icon: TimerIcon,
        url: linkOptions({ to: '/apps/sucof' }),
        description: LL.sucof.description(),
        tags: [DockAppTag.App, DockAppTag.Bookmarked],
      },
      {
        id: 'writing-area',
        name: LL.writingArea.title(),
        icon: PencilIcon,
        url: linkOptions({ to: '/apps/writing-area' }),
        description: LL.writingArea.description(),
        tags: [DockAppTag.Mvp],
      },
      {
        id: 'lyrics-editor',
        name: LL.lyricsEditor.title(),
        icon: PenNibStraightIcon,
        url: linkOptions({ to: '/apps/lyrics-editor' }),
        description: LL.lyricsEditor.description(),
        tags: [DockAppTag.Mvp],
      },
      {
        id: 'lyrics-player',
        name: LL.lyricsPlayer.title(),
        icon: MusicNoteIcon,
        url: linkOptions({ to: '/apps/lyrics-player' }),
        description: LL.lyricsPlayer.description(),
        tags: [DockAppTag.Mvp],
      },
      {
        id: 'account-manager',
        name: LL.accountManager.title(),
        icon: UserCircleIcon,
        url: linkOptions({ to: '/apps/account-manager' }),
        description: LL.accountManager.description(),
        tags: [DockAppTag.Wip],
      },
      {
        id: 'settings',
        name: LL.settings.title(),
        icon: GearIcon,
        url: linkOptions({ to: '/apps/settings' }),
        description: LL.settings.description(),
        tags: [DockAppTag.Mvp],
      },
      {
        id: 'jot',
        name: 'Jot',
        icon: NotePencilIcon,
        url: linkOptions({ to: '/apps/jot' }),
        description: 'Track small changing values like book pages, episodes, or counts.',
        tags: [DockAppTag.Wip],
      },
      {
        id: 'nokhodi-crm',
        name: 'Nokhodi CRM',
        icon: AddressBookIcon,
        url: linkOptions({ to: '.' }),
        description: 'A very small and minimal CRM for a single-person business.',
        tags: [DockAppTag.Idea],
      },
      {
        id: 'potk',
        name: 'Potk',
        icon: KanbanIcon,
        url: linkOptions({ to: '.' }),
        description: 'Simple project & tasks manager with kanban and list views.',
        tags: [DockAppTag.Idea],
      },
      {
        id: 'kanji-cards',
        name: 'Kanji Cards',
        icon: CardsIcon,
        url: linkOptions({ to: '.' }),
        description: 'Collect kanji flashcards with ranks, stroke counts, and Jisho links.',
        tags: [DockAppTag.Idea],
      },
    ],
    // oxlint-disable-next-line react-hooks/exhaustive-deps
    [locale],
  )
}
