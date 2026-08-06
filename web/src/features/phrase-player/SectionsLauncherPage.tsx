import { HouseIcon, MusicNotesPlusIcon, PlayCircleIcon, type Icon } from '@phosphor-icons/react'
import { Link, linkOptions } from '@tanstack/react-router'

import { useI18nContext } from '#/features/i18n'

export function SectionsLauncherPage() {
  const { LL } = useI18nContext()

  return (
    <div className='bg-bg-1 text-text-muted flex h-dvh flex-col overflow-hidden md:flex-row'>
      <Section
        url={linkOptions({ to: '/apps/phrase-player/player' }).to}
        icon={PlayCircleIcon}
        title={LL.phrasePlayer.launchSection.player.title()}
        description={LL.phrasePlayer.launchSection.player.description()}
      />

      <Section
        url={linkOptions({ to: '/apps/phrase-player/editor' }).to}
        icon={MusicNotesPlusIcon}
        title={LL.phrasePlayer.launchSection.editor.title()}
        description={LL.phrasePlayer.launchSection.editor.description()}
      />

      <Section
        url={linkOptions({ to: '/apps' }).to}
        icon={HouseIcon}
        title={LL.phrasePlayer.launchSection.home.title()}
        description={LL.phrasePlayer.launchSection.home.description()}
      />
    </div>
  )
}

const Section = (p: { icon: Icon; title: string; description: string; url: string }) => (
  <Link to={p.url} className='hover:bg-bg-2 flex flex-1 flex-col items-center justify-center rounded-none text-center'>
    <p.icon size={48} weight='duotone' />
    <p className='text-text-important text-2xl font-bold'>{p.title}</p>
    <p>{p.description}</p>
  </Link>
)
