import type { ReactNode } from 'react'

export const LabelContainer = (p: {
  title: string | null
  htmlFor?: string
  slot?: ReactNode
  children: ReactNode
}) => (
  <div className='flex flex-col gap-2'>
    <p className='flex flex-wrap items-center justify-between'>
      {p.title && <label htmlFor={p.htmlFor}>{p.title}</label>}
      {p.slot}
    </p>

    {p.children}
  </div>
)
