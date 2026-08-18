import { LinkSimpleIcon } from '@phosphor-icons/react'
import { Link } from '@tanstack/react-router'

import type { SlashPage } from './SlashPage'

export const SlashPageCard = (p: { page: SlashPage }) => (
  <Link
    to={`/${p.page.slash}` as any}
    className='hover:text-text-important flex min-w-min flex-1 flex-col items-center gap-2 rounded-xl bg-white/5 px-5 py-4 transition-all hover:bg-white/10 sm:flex-row'
  >
    <LinkSimpleIcon size={24} className='self-start sm:self-auto' />
    <span className='me-auto self-start sm:self-auto'>{p.page.title}</span>
    <code lang='en' dir='ltr' className='text-text-important self-end font-bold sm:self-auto'>
      /{p.page.slash}
    </code>
  </Link>
)
