import type { JottingResponse } from '../api/client'
import { WiredJottingCard } from './WiredJottingCard'

export const JottingCards = (p: { jottings: JottingResponse[] }) => (
  <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3'>
    {p.jottings.map(jotting => (
      <WiredJottingCard key={jotting.id} jotting={jotting} />
    ))}
  </div>
)
