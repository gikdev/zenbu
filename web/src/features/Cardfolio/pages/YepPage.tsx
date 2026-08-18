import { CardPage } from '../common/CardPage'
import { SlashHeader } from '../common/SlashHeader'

export const YepPage = () => {
  return (
    <CardPage>
      <SlashHeader slash='/yep' title='آره' />

      <p className='text-center font-bold text-text-important'>فعلا چیزی ندارم بنویسم. پس خالیه.</p>
    </CardPage>
  )
}
