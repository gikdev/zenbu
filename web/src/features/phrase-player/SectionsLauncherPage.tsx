import { HouseIcon, MusicNotesPlusIcon, PlayCircleIcon, type Icon } from '@phosphor-icons/react'
import { Link, linkOptions } from '@tanstack/react-router'

import { PageShell } from '#/common/molecules/PageShell'
import { useI18nContext } from '#/features/i18n'

export function SectionsLauncherPage() {
  const { LL } = useI18nContext()

  return (
    <PageShell variants={{ heightFull: 'max', class: 'md:flex-row' }}>
      <Section
        url={linkOptions({ to: '/apps/phrase-player/player' }).to}
        icon={PlayCircleIcon}
        title={LL.phrasePlayer.player.title()}
        description={LL.phrasePlayer.player.description()}
      />

      <Section
        url={linkOptions({ to: '/apps/phrase-player/editor' }).to}
        icon={MusicNotesPlusIcon}
        title={LL.phrasePlayer.editor.title()}
        description={LL.phrasePlayer.editor.description()}
      />

      <Section
        url={linkOptions({ to: '/apps' }).to}
        icon={HouseIcon}
        title={LL.phrasePlayer.home.title()}
        description={LL.phrasePlayer.home.description()}
      />
    </PageShell>
  )
}

const Section = (p: { icon: Icon; title: string; description: string; url: string }) => (
  <Link to={p.url} className='hover:bg-bg-2 flex flex-1 flex-col items-center justify-center rounded-none text-center'>
    <p.icon size={48} weight='duotone' />
    <p className='text-text-important text-2xl font-bold'>{p.title}</p>
    <p>{p.description}</p>
  </Link>
)
