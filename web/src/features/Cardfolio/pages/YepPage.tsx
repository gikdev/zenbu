import { CardPage } from '../common/CardPage'
import { SlashHeader } from '../common/SlashHeader'

export const YepPage = () => {
  return (
    <CardPage>
      <SlashHeader slash='/yep' title='آره' />

      <p className='text-text-important text-center font-bold'>فعلا چیزی ندارم بنویسم. پس خالیه.</p>
    </CardPage>
  )
}
