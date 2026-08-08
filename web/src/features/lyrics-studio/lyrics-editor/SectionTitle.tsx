export const SectionTitle = (p: { title: string; className?: string }) => (
  <div className='flex items-center gap-2'>
    <hr className='bg-bg-3 h-0.5 w-full rounded border-none' />
    <p className='text-text-important text-center font-bold'>{p.title}</p>
    <hr className='bg-bg-3 h-0.5 w-full rounded border-none' />
  </div>
)
