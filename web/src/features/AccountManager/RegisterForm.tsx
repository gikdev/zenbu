import { FloppyDiskBackIcon } from '@phosphor-icons/react'

import { styleBtn } from '#/common/atoms/btn'
import type { RegisterCommand } from '#/features/api/client'
import { useAppForm } from '#/features/forms'

export const RegisterForm = (p: { onSubmit: (data: RegisterCommand) => Promise<void> }) => {
  const form = useAppForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: ({ value }) => p.onSubmit(value).then(() => form.reset()),
  })

  return (
    <div className='border-border-muted bg-bg-2 flex w-full flex-col gap-2 rounded-lg border p-4'>
      <p className='text-text-important mb-4 text-2xl font-bold'>Register</p>
      <p className=''>After registeration, u'd need to log in.</p>

      <form.AppForm>
        <form.AppField name='firstName' children={field => <field.SimpleTextInput title='First Name' />} />
        <form.AppField name='lastName' children={field => <field.SimpleTextInput title='Last Name' />} />
        <form.AppField name='email' children={field => <field.SimpleTextInput title='Email' />} />
        <form.AppField name='password' children={field => <field.SimpleTextInput title='Password' isSecret />} />
        <form.AppField
          name='confirmPassword'
          children={field => <field.SimpleTextInput title='Confirm Password' isSecret />}
        />

        <div className='flex-1' />

        <form.SimpleSubmitBtn className={styleBtn({ variant: 'primary' })}>
          <FloppyDiskBackIcon size={20} weight='fill' />
          <span>Register</span>
        </form.SimpleSubmitBtn>
      </form.AppForm>
    </div>
  )
}
