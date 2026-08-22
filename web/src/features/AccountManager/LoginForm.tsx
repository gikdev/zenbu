import { FloppyDiskBackIcon } from '@phosphor-icons/react'

import { styleBtn } from '#/common/atoms/btn'
import { useAppForm } from '#/features/forms'

import type { LoginCommand } from '../api/client'

export const LoginForm = (p: { onSubmit: (data: LoginCommand) => Promise<void> }) => {
  const form = useAppForm({
    defaultValues: {
      email: '',
      password: '',
    },
    onSubmit: ({ value }) => p.onSubmit(value).then(() => form.reset()),
  })

  return (
    <div className='border-border-muted bg-bg-2 flex w-full flex-col gap-2 rounded-lg border p-4'>
      <p className='text-text-important mb-4 text-2xl font-bold'>Login</p>

      <form.AppForm>
        <form.AppField name='email' children={field => <field.SimpleTextInput title='Email' />} />
        <form.AppField name='password' children={field => <field.SimpleTextInput title='Password' isSecret />} />

        <div className='flex-1' />

        <form.SimpleSubmitBtn className={styleBtn({ variant: 'primary' })}>
          <FloppyDiskBackIcon size={20} weight='fill' />
          <span>Login</span>
        </form.SimpleSubmitBtn>
      </form.AppForm>
    </div>
  )
}
