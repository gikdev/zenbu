import { CheckIcon } from '@phosphor-icons/react'

import { styleBtn } from '#/common/atoms/btn'
import { useAppForm } from '#/features/forms'

interface BatchAddBlockFormProps {
  onSubmit: (input: string) => void
}

export const BatchAddBlockForm = (p: BatchAddBlockFormProps) => {
  const form = useAppForm({
    defaultValues: {
      input: '',
    },
    onSubmit(props) {
      p.onSubmit(props.value.input)
    },
  })

  return (
    <form.AppForm>
      <div className='flex flex-col gap-2'>
        <form.AppField name='input' children={field => <field.SimpleTextInput title='Input' isMultiline />} />

        <form.SimpleSubmitBtn className={styleBtn({ variant: 'primary' })}>
          <CheckIcon size={20} />
          <span>OK</span>
        </form.SimpleSubmitBtn>
      </div>
    </form.AppForm>
  )
}
