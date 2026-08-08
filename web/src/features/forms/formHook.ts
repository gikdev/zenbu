import { createFormHook } from '@tanstack/react-form'

import { FullLanguageCodeSelect } from '../lyrics-studio/forms/FullLanguageCodeSelect'
import { LocalizedTextInput } from '../lyrics-studio/forms/LocalizedTextInput'
import { MiniLanguageCodeSelect } from '../lyrics-studio/forms/MiniLanguageCodeSelect'
import { fieldContext, formContext } from './formHookContexts'
import { SimpleNumberInput } from './SimpleNumberInput'
import { SimpleSubmitBtn } from './SimpleSubmitBtn'
import { SimpleTextInput } from './SimpleTextInput'

export const { useAppForm } = createFormHook({
  formContext,
  fieldContext,
  fieldComponents: {
    SimpleTextInput,
    SimpleNumberInput,
    FullLanguageCodeSelect,
    MiniLanguageCodeSelect,
    LocalizedTextInput,
  },
  formComponents: {
    SimpleSubmitBtn,
  },
})
