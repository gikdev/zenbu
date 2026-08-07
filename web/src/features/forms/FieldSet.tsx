import type { ReactNode } from 'react'

export const FieldSet = (p: { title: string; children: ReactNode }) => (
  <fieldset className='border-border-muted flex flex-col gap-2 rounded-md border px-4 py-2'>
    <legend className='px-4'>{p.title}</legend>

    {p.children}
  </fieldset>
)
