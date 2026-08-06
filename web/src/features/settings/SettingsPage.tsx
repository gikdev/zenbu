import { ArrowLeftIcon } from '@phosphor-icons/react'
import { Link } from '@tanstack/react-router'

import { styleBtn } from '#/common/atoms/btn'

import { useI18nContext, useIsRtl } from '../i18n'
import { SettingsSection } from './SettingsSection'

export const SettingsPage = () => {
  const { LL } = useI18nContext()
  const isRtl = useIsRtl()

  return (
    <div className='flex min-h-dvh flex-col items-center justify-center p-4'>
      <div className='flex w-full max-w-80 flex-col gap-4'>
        <div className='flex items-center gap-1'>
          <Link to='/apps' className={styleBtn({ size: 'icon' })}>
            <ArrowLeftIcon mirrored={isRtl} size={20} />
          </Link>

          <p className='text-text-important font-bold'>{LL.settings.title()}</p>
        </div>

        <SettingsSection />
      </div>
    </div>
  )
}
