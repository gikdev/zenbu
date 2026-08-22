import { Link } from '@tanstack/react-router'

import { CardPage } from '../common/CardPage'
import { HomeBtn } from './HomeBtn'
import { usePinnedLinkItems } from './usePinnedLinkItems'

export const HomePage = () => {
  const pinnedLinkItems = usePinnedLinkItems(true)
  const unPinnedLinkItems = usePinnedLinkItems(false)

  return (
    <CardPage>
      <div className='flex flex-col items-center gap-4'>
        <img className='size-32 rounded-4xl' src='/cardfolio/AnimeMe.png' alt='' />

        <p className='text-text-important text-center text-4xl font-bold'>
          <title>بهرامی</title>
          <span>بهرامی‌ام!</span>
          <Link to='/welcome' className='cursor-pointer'>
            👋🏻
          </Link>
        </p>

        <p className='text-center text-lg'>
          <span>برنامه‌نویس فول‌استک وب</span>
          <span className='relative top-1 mx-2'>•</span>
          <Link to='/languages' className='text-brand hover:text-text-important border-b transition-all'>
            خوره‌ی زبان
          </Link>
        </p>
      </div>

      <div className='flex flex-col'>
        <span className='inline-flex max-w-max items-center gap-1 rounded-lg rounded-b-none bg-white/5 px-2 py-1'>
          راه‌های ارتباطی
        </span>

        <div className='flex w-full flex-wrap gap-0 overflow-clip rounded-xl rounded-tr-none'>
          {pinnedLinkItems.map(item => (
            <HomeBtn key={item.id} item={item} className='rounded-none' />
          ))}
        </div>
      </div>

      <div className='flex w-full flex-col gap-2'>
        {unPinnedLinkItems.map(item => (
          <HomeBtn key={item.id} item={item} />
        ))}
      </div>
    </CardPage>
  )
}
