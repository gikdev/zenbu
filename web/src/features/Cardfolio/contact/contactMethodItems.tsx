import { EnvelopeIcon, GithubLogoIcon } from '@phosphor-icons/react'

import type { ContactMethodItem } from './ContactMethodItem'

export const contactMethodItems: ContactMethodItem[] = [
  {
    id: 'github',
    title: 'گیت‌هاب',
    url: 'https://github.com/gikdev',
    icon: {
      type: 'icon',
      icon: GithubLogoIcon,
    },
  },
  {
    id: 'eitaa',
    title: 'ایتا',
    url: 'https://eitaa.com/itsbahrami',
    icon: {
      type: 'node',
      node: <img alt='' src='/cardfolio/eitaa.svg' className='size-6' />,
    },
  },
  {
    id: 'virasty',
    title: 'ویراستی',
    url: 'https://virasty.com/itsbahrami',
    icon: {
      type: 'node',
      node: <img alt='' src='/cardfolio/virasty.svg' className='size-6' />,
    },
  },
  {
    id: 'email',
    title: 'ایمیل',
    url: 'mailto:bahrami@mailfa.com',
    icon: {
      type: 'icon',
      icon: EnvelopeIcon,
    },
  },
]
