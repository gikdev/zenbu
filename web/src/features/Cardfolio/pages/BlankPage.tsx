import { CardPage } from '../common/CardPage'
import { SlashHeader } from '../common/SlashHeader'

export const BlankPage = () => {
  return (
    <CardPage>
      <SlashHeader slash='/blank' title='خالی' />

      <p className='text-text-important text-center font-bold'>این صفحه از قصد خالی هست.</p>
    </CardPage>
  )
}
