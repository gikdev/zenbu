import {
  GearIcon,
  MusicNoteIcon,
  PencilIcon,
  PenNibStraightIcon,
  TimerIcon,
  UserCircleIcon,
} from '@phosphor-icons/react'
import { linkOptions } from '@tanstack/react-router'
import { useMemo } from 'react'

import { useI18nContext } from '../i18n'
import type { IAppShortcut } from './IAppShortcut'

export const useAppShortcuts = (): IAppShortcut[] => {
  const { LL, locale } = useI18nContext()

  return useMemo(
    () => [
      {
        id: 'time-log',
        name: LL.timeLog.title(),
        icon: TimerIcon,
        url: linkOptions({ to: '/apps/time-log' }).to,
        disabled: false,
        description: LL.timeLog.description(),
      },
      {
        id: 'writing',
        name: LL.writingArea.title(),
        icon: PencilIcon,
        disabled: false,
        url: linkOptions({ to: '/apps/writing-area' }).to,
        description: LL.writingArea.description(),
      },
      {
        id: 'lyrics-editor',
        name: LL.lyricsEditor.title(),
        icon: PenNibStraightIcon,
        url: linkOptions({ to: '/apps/lyrics-editor' }).to,
        disabled: false,
        description: LL.lyricsEditor.description(),
      },
      {
        id: 'lyrics-player',
        name: LL.lyricsPlayer.title(),
        icon: MusicNoteIcon,
        url: linkOptions({ to: '/apps/lyrics-player' }).to,
        disabled: false,
        description: LL.lyricsPlayer.description(),
      },
      {
        id: 'account-manager',
        name: LL.accountManager.title(),
        icon: UserCircleIcon,
        url: linkOptions({ to: '.' }).to,
        disabled: true,
        description: LL.accountManager.description(),
      },
      {
        id: 'settings',
        url: linkOptions({ to: '/apps/settings' }).to,
        name: LL.settings.title(),
        icon: GearIcon,
        disabled: false,
        description: LL.settings.description(),
      },
    ],
    // oxlint-disable-next-line react-hooks/exhaustive-deps
    [locale],
  )
}
