import { ContactMethodBtn } from './ContactMethodBtn'
import { contactMethodItems } from './contactMethodItems'

export const ContactMethods = () => (
  <div className='flex flex-col'>
    <span className='inline-flex max-w-max items-center gap-1 rounded-lg rounded-b-none bg-white/5 px-2 py-1'>
      راه‌های ارتباطی
    </span>

    <div className='flex w-full flex-wrap gap-0 overflow-clip rounded-xl rounded-tr-none'>
      {contactMethodItems.map(item => (
        <ContactMethodBtn key={item.id} item={item} className='rounded-none' />
      ))}
    </div>
  </div>
)
