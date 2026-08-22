import { useMemo } from 'react'

import { PageShell } from '#/common/molecules/PageShell'

import { AppVersion } from '../versioning/AppVersion'
import type { DockApp } from './DockApp'
import { DockAppCard } from './DockAppCard'
import { DockAppTag } from './DockAppTag'
import { useDockApps } from './useDockApps'

export const DockPage = () => {
  const apps = useDockApps()

  const { pinnedApps, otherApps } = useMemo(() => {
    const pinned = apps.filter(app => app.tags.includes(DockAppTag.Bookmarked))
    const others = apps.filter(app => !app.tags.includes(DockAppTag.Bookmarked))

    const sortByName = (a: DockApp, b: DockApp) => a.name.localeCompare(b.name)

    pinned.sort(sortByName)
    others.sort(sortByName)

    return { pinnedApps: pinned, otherApps: others }
  }, [apps])

  return (
    <PageShell variants={{ class: 'items-center justify-center gap-8 px-2 py-8' }}>
      <div className='flex flex-col gap-8 p-4'>
        <header className='flex flex-row items-center gap-2'>
          <img className='size-8' src='/zenbu.svg' alt='' />
          <p className='text-text-important text-3xl font-bold'>Dock</p>
          <AppVersion />
        </header>

        <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
          {pinnedApps.map(app => (
            <DockAppCard key={app.id} dockApp={app} />
          ))}

          {otherApps.map(app => (
            <DockAppCard key={app.id} dockApp={app} />
          ))}
        </div>
      </div>
    </PageShell>
  )
}
