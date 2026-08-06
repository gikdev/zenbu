import { ArrowLeftIcon } from '@phosphor-icons/react'
import { Link } from '@tanstack/react-router'

import { styleBtn } from '#/common/atoms/btn'
import { PageShell } from '#/common/molecules/PageShell'

import { useI18nContext, useIsRtl } from '../i18n'
import { SettingsSection } from './SettingsSection'

export const SettingsPage = () => {
  const { LL } = useI18nContext()

  return (
    <PageShell variants={{ class: 'items-center justify-center p-4' }}>
      <title>{LL.settings.title()}</title>

      <SettingsCard />
    </PageShell>
  )
}

const SettingsCard = () => {
  const isRtl = useIsRtl()
  const { LL } = useI18nContext()

  return (
    <div className='flex w-full max-w-80 flex-col gap-4'>
      <div className='flex items-center gap-1'>
        <Link to='/apps' className={styleBtn({ size: 'icon' })}>
          <ArrowLeftIcon mirrored={isRtl} size={20} />
        </Link>

        <p className='text-text-important font-bold'>{LL.settings.title()}</p>
      </div>

      <SettingsSection />
    </div>
  )
}
