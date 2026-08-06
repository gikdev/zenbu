import axios from 'axios'

import { client } from './client'
import { useEffect } from 'react'
import { useI18nContext } from '../i18n'

export function useConfigApiClient() {
  const { locale } = useI18nContext()

  useEffect(() => {
    const newInstance = axios.create({
      withCredentials: true,
      headers: {
        "Accept-Language": locale,
      },
    })

    client.setConfig({
      axios: newInstance,
    })
  }, [locale])
}
