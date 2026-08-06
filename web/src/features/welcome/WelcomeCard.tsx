import { Link } from '@tanstack/react-router'

import { version } from '#/App/configs/version.json'
import { styleBtn } from '#/common/atoms/btn'
import { useI18nContext } from '#/features/i18n'

export function WelcomeCard() {
  const { LL } = useI18nContext()

  return (
    <div className='flex w-full max-w-60 min-w-20 flex-col items-center gap-4'>
      <img className='size-24 rotate-0 hue-rotate-0' src='/zenbu.svg' alt='' />

      <p className='text-text-important text-5xl font-bold'>{LL.welcome.title()}</p>

      <Link to='/apps' className={styleBtn({ variant: 'primary', size: 'lg', class: 'w-full' })}>
        <span>{LL.welcome.start()}</span>
      </Link>

      <p className='text-center font-mono text-xs'>v{version}</p>
    </div>
  )
}
