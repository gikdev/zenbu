import { CaretCircleDownIcon } from '@phosphor-icons/react'
import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { cn } from 'tailwind-variants'

import { styleBtn } from '#/common/atoms/btn'

import { CardPage } from '../CardPage'
import { usePinnedLinkItems } from '../useLinkItems'
import { ProfileButton } from './ProfileButton'

export const ProfilePage = () => {
  const [showMore, setShowMore] = useState(false)

  const pinnedLinkItems = usePinnedLinkItems(true)
  const unPinnedLinkItems = usePinnedLinkItems(false)

  return (
    <CardPage>
      <div className='flex flex-col items-center gap-4'>
        <img className='size-32 rounded-4xl' src='/cardfolio/AnimeMe.png' alt='' />

        <p className='text-text-important text-4xl font-bold'>
          <title>بهرامی</title>
          <span>بهرامی‌ام!</span>
          <Link to='/welcome' className='cursor-pointer'>
            👋🏻
          </Link>
        </p>

        <p className='text-center text-lg'>
          <span>برنامه‌نویس فول‌استک وب</span>
          <span className='relative top-1 mx-2'>•</span>
          <span>خوره‌ی زبان</span>
        </p>
      </div>

      <div className='flex w-full flex-wrap gap-2'>
        {pinnedLinkItems.map(item => (
          <ProfileButton item={item} />
        ))}
      </div>

      <div className='flex items-center justify-center gap-2' onClick={() => setShowMore(p => !p)}>
        {showMore && <hr className='bg-border-muted/50 h-0.5 flex-1 rounded-full border-none' />}

        <button type='button' className={styleBtn({ size: 'icon' })} title='مشاهده بیشتر'>
          <CaretCircleDownIcon size={24} className={cn('transition-all', showMore ? 'rotate-180' : '')} />
        </button>

        {showMore && <hr className='bg-border-muted/50 h-0.5 flex-1 rounded-full border-none' />}
      </div>

      {showMore && (
        <div className='flex w-full flex-col gap-2'>
          {unPinnedLinkItems.map(item => (
            <ProfileButton item={item} />
          ))}
        </div>
      )}
    </CardPage>
  )
}
