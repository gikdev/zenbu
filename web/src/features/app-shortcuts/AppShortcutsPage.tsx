import { useQuery } from '@tanstack/react-query'

import { version } from '#/App/configs/version.json'
import { PageShell } from '#/common/molecules/PageShell'
import { useI18nContext } from '#/features/i18n'

import { AppShortcutsSection } from './AppShortcutsSection'
import { welcomeOptions } from '#/features/api/client'

export function AppShortcutsPage() {
  const sth = useQuery(welcomeOptions())
  const { LL } = useI18nContext()

  return (
    <PageShell variants={{ class: 'items-center justify-center gap-8 px-2 py-8' }}>
      <div className='flex flex-row items-center gap-2'>
        <img className='size-12' src='/zenbu.svg' alt='' />


        <p className='text-text-important text-3xl font-bold'>{LL.welcome.title()}</p>

        <code className='text-xs'>v{version}</code>
      </div>

        {sth.data?.message}
      <AppShortcutsSection />
    </PageShell>
  )
}
