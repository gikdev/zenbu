import type { PropsWithChildren } from 'react'

import { PageShell } from '#/common/molecules/PageShell'

import styles from './CardPage.module.css'

export const CardPage = (p: PropsWithChildren) => (
  <PageShell variants={{ heightFull: 'min', class: styles.circuits }}>
    <div lang='fa' dir='rtl' className='use-lang-font flex flex-1 flex-col items-center justify-center'>
      <div className='flex w-full max-w-160 flex-col gap-8 rounded-4xl px-4 py-8'>{p.children}</div>
    </div>
  </PageShell>
)
