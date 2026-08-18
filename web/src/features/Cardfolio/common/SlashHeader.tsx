import { HouseIcon } from '@phosphor-icons/react'
import { Link } from '@tanstack/react-router'

import { styleBtn } from '#/common/atoms/btn'

/** A header component useful for all slash pages. */
export const SlashHeader = (p: { title: string; slash: string }) => (
  <div className='flex w-full flex-col flex-wrap items-center gap-1 sm:flex-row'>
    <title>{p.title}</title>

    <Link to='/' className={styleBtn({ size: 'icon', class: 'self-start sm:self-auto' })}>
      <HouseIcon mirrored size={24} />
    </Link>

    <p className='text-text-important me-auto self-start text-xl font-bold sm:self-auto'>{p.title}</p>

    <code lang='en' dir='ltr' className='text-text-important self-end text-xl font-bold uppercase sm:self-auto'>
      {p.slash}
    </code>
  </div>
)
