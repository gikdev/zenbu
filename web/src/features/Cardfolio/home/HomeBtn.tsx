import { Link } from '@tanstack/react-router'
import { tv } from 'tailwind-variants'

import type { LinkItem } from './LinkItem'

interface HomeBtnProps {
  item: LinkItem
  className?: string
}

const styleBtnBase = tv({
  base: `
    flex flex-1 items-center gap-3
    min-w-max
    rounded-xl bg-white/5 px-5 py-4
    transition-all hover:bg-white/10
    hover:text-text-important
  `,
})

export const HomeBtn = (p: HomeBtnProps) => {
  const { icon: Icon, tags, title, url } = p.item
  const isNewTab = tags.includes('new-tab')

  return (
    <Link
      to={url}
      title={title}
      className={styleBtnBase({ class: ['group', p.className] })}
      target={isNewTab ? '_blank' : '_self'}
    >
      <span className='me-auto flex items-center gap-3'>{title}</span>

      <Icon size={24} className='shrink-0 transition-all group-hover:rotate-10' />
    </Link>
  )
}
