import { CardPage } from '../common/CardPage'
import { SlashHeader } from '../common/SlashHeader'

export const NopePage = () => {
  return (
    <CardPage>
      <SlashHeader slash='/nope' title='نه' />

      <p className='text-text-important text-center font-bold'>فعلا چیزی ندارم بنویسم. پس خالیه.</p>
    </CardPage>
  )
}
