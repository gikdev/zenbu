import axios from 'axios'
import { useEffect } from 'react'

import { useI18nContext } from '../i18n'
import { client } from './client'

export function useConfigApiClient() {
  const { locale } = useI18nContext()

  useEffect(() => {
    const newInstance = axios.create({
      withCredentials: true,
      headers: {
        'Accept-Language': locale,
      },
    })

    client.setConfig({
      axios: newInstance,
    })
  }, [locale])
}
