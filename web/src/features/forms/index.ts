import { createFormHook, createFormHookContexts } from '@tanstack/react-form'

import { SimpleSubmitBtn } from './SimpleSubmitBtn'
import { SimpleTextInput } from './SimpleTextInput'

const { fieldContext, formContext, useFieldContext, useFormContext } = createFormHookContexts()
const { useAppForm } = createFormHook({
  formContext,
  fieldContext,
  fieldComponents: {
    SimpleTextInput,
  },
  formComponents: {
    SimpleSubmitBtn,
  },
})

export { useAppForm, useFieldContext, useFormContext }
