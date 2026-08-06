import { HouseIcon } from '@phosphor-icons/react'
import { Link } from '@tanstack/react-router'

import { styleBtn } from '#/common/atoms/btn'
import { PageShell } from '#/common/molecules/PageShell'
import { useI18nContext, useIsRtl } from '#/features/i18n'

export const LyricsEditorPage = () => {
  const { LL } = useI18nContext()
  const isRtl = useIsRtl()

  return (
    <PageShell variants={{ heightFull: 'max' }}>
      <div className='flex items-center justify-between px-4 py-2'>
        <div className='flex items-center gap-1'>
          <Link to='/apps' className={styleBtn({ size: 'icon' })}>
            <HouseIcon mirrored={isRtl} size={20} />
          </Link>

          <title>{LL.lyricsEditor.title()}</title>
          <h1 className='text-text-important text-lg font-bold tracking-wide'>{LL.lyricsEditor.title()}</h1>
        </div>
      </div>

      <div className='flex-1' />
    </PageShell>
  )
}
