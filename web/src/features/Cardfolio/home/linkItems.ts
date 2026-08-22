import { TranslateIcon, VideoIcon } from '@phosphor-icons/react'
import { linkOptions } from '@tanstack/react-router'

import type { LinkItem } from './LinkItem'

export const linkItems: LinkItem[] = [
  {
    id: 'languages',
    title: 'زبان‌ها',
    url: linkOptions({ to: '/languages' }).to,
    tags: [],
    icon: TranslateIcon,
  },
  {
    id: 'animes',
    title: 'انیمه‌ها',
    url: linkOptions({ to: '/animes' }).to,
    tags: [],
    icon: VideoIcon,
  },
]
