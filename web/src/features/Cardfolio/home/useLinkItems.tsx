import { EnvelopeIcon, GithubLogoIcon, ReadCvLogoIcon, TranslateIcon, VideoIcon } from '@phosphor-icons/react'
import { useMemo } from 'react'

import type { LinkItem } from './LinkItem'

export const useLinkItems = () =>
  useMemo<LinkItem[]>(
    () => [
      {
        id: 'resume',
        title: 'رزومه',
        url: '#',
        tags: ['disabled', 'new-tab', 'pinned'],
        icon: {
          type: 'icon',
          icon: ReadCvLogoIcon,
        },
      },
      {
        id: 'github',
        title: 'گیت‌هاب',
        url: 'https://github.com/gikdev',
        tags: ['new-tab', 'pinned'],
        icon: {
          type: 'icon',
          icon: GithubLogoIcon,
        },
      },
      {
        id: 'eitaa',
        title: 'ایتا',
        url: 'https://eitaa.com/itsbahrami',
        tags: ['new-tab', 'pinned'],
        icon: {
          type: 'node',
          node: <img alt='' src='/cardfolio/eitaa.svg' className='size-6' />,
        },
      },
      {
        id: 'virasty',
        title: 'ویراستی',
        url: 'https://virasty.com/itsbahrami',
        tags: ['new-tab', 'pinned'],
        icon: {
          type: 'node',
          node: <img alt='' src='/cardfolio/virasty.svg' className='size-6' />,
        },
      },
      {
        id: 'email',
        title: 'ایمیل',
        url: 'mailto:bahrami@mailfa.com',
        tags: ['new-tab', 'pinned'],
        icon: {
          type: 'icon',
          icon: EnvelopeIcon,
        },
      },
      {
        id: 'languages',
        title: 'زبان‌ها',
        url: '/languages',
        tags: [],
        icon: {
          type: 'icon',
          icon: TranslateIcon,
        },
      },
      {
        id: 'animes',
        title: 'انیمه‌ها',
        url: '/animes',
        tags: [],
        icon: {
          type: 'icon',
          icon: VideoIcon,
        },
      },
    ],
    [],
  )
