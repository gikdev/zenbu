import { Link } from '@tanstack/react-router'

import { version } from '#/App/configs/version.json'
import { styleBtn } from '#/common/atoms/btn'
import { useI18nContext } from '#/features/i18n'
import { useQuery } from '@tanstack/react-query'
import { welcomeOptions } from '../api/client'
import { RenderQuery } from '#/common/helpers/RenderQuery'

export function WelcomeCard() {
  const { LL } = useI18nContext()
  const welcomeQ = useQuery(welcomeOptions())

  return (
    <div className='flex w-full max-w-60 min-w-20 flex-col items-center gap-4'>
      <div className='flex w-full items-end justify-center overflow-x-clip'>
        <img className='size-16 -rotate-12 -hue-rotate-75 rtl:rotate-12' src='/zenbu.svg' alt='' />
        <img className='size-24 rotate-0 hue-rotate-0' src='/zenbu.svg' alt='' />
        <img className='size-16 rotate-12 hue-rotate-90 rtl:-rotate-12' src='/zenbu.svg' alt='' />
      </div>

      <p className='text-text-important text-5xl font-bold'>{LL.welcome.title()}</p>

      <p className='text-text-important'>{LL.welcome.slogan()}</p>

      <RenderQuery
        isList={false}
        data={welcomeQ.data!}
        errorView={<p>Errored.</p>}
        loadingView={<p>---</p>}
        status={welcomeQ.status}
        successView={data => <p>{data.message}</p>}
      />

      <p className='text-center'>{LL.welcome.description()}</p>

      <Link to='/' className={styleBtn({ variant: 'primary', size: 'lg', class: 'w-full' })}>
        <span>{LL.welcome.start()}</span>
      </Link>

      <p className='text-center font-mono text-xs'>v{version}</p>
    </div>
  )
}
