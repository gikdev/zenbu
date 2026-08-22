import { ArrowLeftIcon } from '@phosphor-icons/react'
import { Link } from '@tanstack/react-router'

import { styleBtn } from '#/common/atoms/btn'

export const CardHeader = (p: { title: string }) => (
  <div className='flex w-full items-center gap-1'>
    <title>{p.title}</title>

    <Link to='/' className={styleBtn({ size: 'icon' })}>
      <ArrowLeftIcon mirrored size={20} />
    </Link>

    <p className='text-text-important text-lg font-bold'>{p.title}</p>
  </div>
)
