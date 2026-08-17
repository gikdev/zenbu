import { EnvelopeIcon, GithubLogoIcon, ReadCvLogoIcon } from '@phosphor-icons/react'
import { Link } from '@tanstack/react-router'
import { useMemo } from 'react'

import { CardPage } from '../CardPage'
import { ProfileButton, type LinkItem } from './ProfileButton'

export const ProfilePage = () => {
  const linkItems = useMemo<LinkItem[]>(
    () => [
      {
        id: 'resume',
        title: 'رزومه',
        url: '#',
        tags: ['disabled', 'external', 'new-tab'],
        icon: {
          type: 'icon',
          icon: ReadCvLogoIcon,
        },
      },
      {
        id: 'github',
        title: 'گیت‌هاب',
        url: 'https://github.com/gikdev',
        tags: ['external', 'new-tab'],
        icon: {
          type: 'icon',
          icon: GithubLogoIcon,
        },
      },
      {
        id: 'eitaa',
        title: 'ایتا',
        url: 'https://eitaa.com/itsbahrami',
        tags: ['external', 'new-tab'],
        icon: {
          type: 'node',
          node: <img alt='' src='/cardfolio/eitaa.svg' className='size-6' />,
        },
      },
      {
        id: 'virasty',
        title: 'ویراستی',
        url: 'https://virasty.com/itsbahrami',
        tags: ['external', 'new-tab'],
        icon: {
          type: 'node',
          node: <img alt='' src='/cardfolio/virasty.svg' className='size-6' />,
        },
      },
      {
        id: 'email',
        title: 'ایمیل',
        url: 'mailto:bahrami@mailfa.com',
        tags: ['external', 'new-tab'],
        icon: {
          type: 'icon',
          icon: EnvelopeIcon,
        },
      },
    ],
    [],
  )

  return (
    <CardPage>
      <div className='flex flex-col items-center gap-4'>
        <img className='size-32 rounded-4xl hover:-scale-x-100' src='/cardfolio/AnimeMe.png' alt='' />

        <p className='text-text-important text-4xl font-bold'>
          <title>بهرامی</title>

          <span>بهرامی‌ام!</span>

          <Link to='/welcome' className='cursor-pointer'>
            👋🏻
          </Link>
        </p>

        <p className='text-center text-lg'>
          برنامه‌نویس فول‌استک وب
          <span className='relative top-1 mx-2'>•</span>
          خوره‌ی زبان
        </p>
      </div>

      <div className='flex w-full flex-col gap-2'>
        {linkItems.map(item => (
          <ProfileButton key={item.id} item={item} />
        ))}
      </div>
    </CardPage>
  )
}
