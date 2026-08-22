import { Link } from '@tanstack/react-router'
import { tv } from 'tailwind-variants'

import type { ContactMethodItem } from './ContactMethodItem'

interface ContactMethodBtnProps {
  item: ContactMethodItem
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

export const ContactMethodBtn = (p: ContactMethodBtnProps) => {
  const { icon, title, url } = p.item

  return (
    <Link
      to={url}
      title={title}
      className={styleBtnBase({ class: ['group justify-center', p.className] })}
      target='_blank'
    >
      {icon.type === 'icon' && <icon.icon size={24} className='shrink-0 transition-all group-hover:rotate-10' />}

      {icon.type === 'node' && <span className='shrink-0 transition-all group-hover:rotate-10'>{icon.node}</span>}
    </Link>
  )
}
