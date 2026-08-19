import { v4 } from 'uuid'

import { styleBtn } from '#/common/atoms/btn'

import { CardPage } from '../common/CardPage'
import { SlashHeader } from '../common/SlashHeader'
import { BookmarkSimpleIcon } from '@phosphor-icons/react'

interface BookmarkItem {
  id: string
  url: string
  name: string
}

const bookmarks: BookmarkItem[] = [
  { id: v4(), url: 'https://chat.deepseek.com/', name: 'دیپ‌سیک' },
  { id: v4(), url: 'https://google.com/', name: 'گوگل' },
  { id: v4(), url: 'https://songsara.net/', name: 'سانگ‌سرا' },
  { id: v4(), url: 'https://my.files.ir/', name: 'فایلز' },
  { id: v4(), url: 'https://animegate.ir/', name: 'انیمه‌گیت' },
  { id: v4(), url: 'https://time.ir/', name: 'تایم' },
  { id: v4(), url: 'https://b85.chbkn.dev/', name: 'بهرامی' },
  { id: v4(), url: 'https://jisho.org/', name: 'Jisho' },
  { id: v4(), url: 'https://www.animesonglyrics.com/', name: 'Anime Song Lyrics' },
  { id: v4(), url: 'https://animex.click/', name: 'انیمکس' },
  { id: v4(), url: 'https://super-productivity.com/', name: 'Super Productivity' },
  { id: v4(), url: 'https://git.ir/', name: 'گیت' },
  { id: v4(), url: 'https://programmerhumor.io/', name: 'Programmer Humor' },
].sort((a, b) => a.name.localeCompare(b.name))

export const BookmarksPage = () => {
  return (
    <CardPage>
      <SlashHeader slash='/bookmarks' title='نشانک‌ها' />

      <div className='flex max-w-2xl flex-wrap gap-2'>
        {bookmarks.map(item => (
          <a
            key={item.id}
            href={item.url}
            target='_blank'
            rel='noopener noreferrer'
            dir='auto'
            className={styleBtn({ class: 'inline-flex flex-1', variant: 'secondary' })}
          >
            <BookmarkSimpleIcon size={20} />
            <span>{item.name}</span>
          </a>
        ))}
      </div>
    </CardPage>
  )
}
