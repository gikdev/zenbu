import { PageShell } from '#/common/molecules/PageShell'

import { useI18nContext } from '../i18n'
import { SucofCard } from './SucofCard'

export const SucofPage = () => {
  const { LL } = useI18nContext()

  return (
    <PageShell variants={{ heightFull: 'max', class: 'items-center justify-center' }}>
      <title>{LL.sucof.title()}</title>

      <SucofCard />
    </PageShell>
  )
}
