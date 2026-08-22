import axios from 'axios'
import { useEffect } from 'react'
import z from 'zod'

import { useI18nContext } from '../i18n'
import { client } from './client'

const baseURL = z
  .string()
  .min(1)
  .parse(import.meta.env.VITE_API_URL)

export function useConfigApiClient() {
  const { locale } = useI18nContext()

  useEffect(() => {
    const newInstance = axios.create({
      withCredentials: false,
      baseURL,
      headers: {
        'Accept-Language': locale,
      },
    })

    client.setConfig({
      baseURL,
      axios: newInstance,
    })
  }, [locale])
}
