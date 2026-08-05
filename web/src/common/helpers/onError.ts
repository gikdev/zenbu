import { toast } from 'react-toastify'

import { extractErrorMessage } from './extractErrorMessage'

/** Default error handler for the app */
export const onError = (error: unknown) => toast.error(extractErrorMessage(error))
