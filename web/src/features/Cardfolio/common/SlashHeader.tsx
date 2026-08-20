import { ArrowUpIcon, HouseIcon } from '@phosphor-icons/react'
import { Link } from '@tanstack/react-router'

import { styleBtn } from '#/common/atoms/btn'

export const SlashHeader = (p: { title: string; slash: string }) => (
  <div className='flex w-full flex-col items-center gap-1 sm:flex-row'>
    <title>{p.title}</title>

    {/* Left Group: Home + Title */}
    <div className='flex flex-1 items-center gap-2 justify-start w-full'>
      <Link to='/' className={styleBtn({ size: 'icon' })}>
        <HouseIcon mirrored size={20} />
      </Link>

      <p className='text-text-important text-lg font-bold'>{p.title}</p>
    </div>

    {/* Right Group: Slashes + Code */}
    <div className='flex flex-1 items-center gap-2 justify-start w-full' dir="ltr">
      <Link to='/slashes' className={styleBtn({ size: 'icon' })}>
        <ArrowUpIcon mirrored size={20} />
      </Link>

      <code lang='en' dir='ltr' className='text-text-important text-lg font-bold uppercase'>
        {p.slash}
      </code>
    </div>
  </div>
)
