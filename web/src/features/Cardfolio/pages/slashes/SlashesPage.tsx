import { Link } from '@tanstack/react-router'

import { CardPage } from '../../common/CardPage'

export const SlashesPage = () => {
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
    </CardPage>
  )
}
