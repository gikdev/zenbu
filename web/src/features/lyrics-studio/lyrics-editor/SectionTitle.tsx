import type { ReactNode } from 'react'

export const SectionTitle = (p: { title: string; slot?: ReactNode }) => (
  <div className='flex items-center gap-2'>
    {!p.slot && <hr className='bg-bg-3 h-0.5 w-full rounded border-none' />}

    <p className='text-text-important text-center font-bold'>{p.title}</p>

    <hr className='bg-bg-3 h-0.5 w-full rounded border-none' />

    {!!p.slot && p.slot}
  </div>
)
