import { EnvelopeIcon, GithubLogoIcon, ReadCvLogoIcon } from '@phosphor-icons/react'
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
    ],
    [],
  )

export const usePinnedLinkItems = (pinned: boolean) => {
  const linkItems = useLinkItems()

  const pinnedLinkItems = useMemo(
    () =>
      linkItems.filter(item => {
        const hasPinnedTag = item.tags.includes('pinned')
        return pinned ? hasPinnedTag : !hasPinnedTag
      }),
    [linkItems, pinned],
  )

  return pinnedLinkItems
}
