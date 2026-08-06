import { ArrowLeftIcon } from '@phosphor-icons/react'
import { Link } from '@tanstack/react-router'

import { styleBtn } from '#/common/atoms/btn'
import { PageShell } from '#/common/molecules/PageShell'

import { useI18nContext, useIsRtl } from '../i18n'
import { TimestampSongPlayer } from './timestamp-song-player'

export const PlayerPage = () => {
  const { LL } = useI18nContext()
  const isRtl = useIsRtl()

  return (
    <PageShell variants={{ heightFull: 'max' }}>
      <title>{LL.phrasePlayer.player.title()}</title>

      <div className='flex items-center justify-between px-4 py-2'>
        <div className='flex items-center gap-1'>
          <Link to='/apps/phrase-player' className={styleBtn({ size: 'icon' })}>
            <ArrowLeftIcon mirrored={isRtl} size={20} />
          </Link>

          <h1 className='text-text-important text-lg font-bold tracking-wide'>{LL.phrasePlayer.player.title()}</h1>
        </div>
      </div>

      <div className='flex-1' />

      <TimestampSongPlayer />
    </PageShell>
  )
}
