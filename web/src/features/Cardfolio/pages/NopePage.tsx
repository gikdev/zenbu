import { CardPage } from '../common/CardPage'
import { SlashHeader } from '../common/SlashHeader'

export const NopePage = () => {
  return (
    <CardPage>
      <SlashHeader slash='/nope' title='نه' />

      <p className='text-center font-bold text-text-important'>فعلا چیزی ندارم بنویسم. پس خالیه.</p>
    </CardPage>
  )
}
