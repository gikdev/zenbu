import { CircleNotchIcon } from '@phosphor-icons/react'

export const JottingsLoading = () => (
  <div className='bg-bg-2 mx-auto flex w-full max-w-120 flex-col items-center gap-4 rounded-lg px-4 py-8'>
    <CircleNotchIcon size={48} className='animate-spin' />

    <div className='flex flex-col items-center gap-2 text-center'>
      <p className='text-text-important text-2xl font-bold'>Be Patient!</p>
      <p className=''>Loading your jottings... 🖋️</p>
    </div>
  </div>
)
