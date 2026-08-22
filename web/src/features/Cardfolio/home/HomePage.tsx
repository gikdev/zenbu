import { Link } from '@tanstack/react-router'

import { CardPage } from '../common/CardPage'
import { ContactMethods } from '../contact/ContactMethods'
import { ProfileImage } from '../msg-easter-egg'
import { HomeBtn } from './HomeBtn'
import { linkItems } from './linkItems'

export const HomePage = () => (
  <CardPage>
    <div className='flex flex-col items-center gap-4'>
      <ProfileImage />

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

    <ContactMethods />

    <div className='flex w-full flex-col gap-2'>
      {linkItems.map(item => (
        <HomeBtn key={item.id} item={item} />
      ))}
    </div>
  </CardPage>
)
