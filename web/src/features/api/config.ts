import axios from 'axios'
// TODO: Fix it.
// import { getAuthToken } from '#/features/auth/auth-store'

import { client } from './client'

const axiosInstance = axios.create({
  baseURL: 'https://offapi.chipyab.com',
  withCredentials: true,
})

axiosInstance.interceptors.request.use((config: any) => {
  // const token = getAuthToken()

  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`
  // }

  return config
})

export function configApiClient() {
  client.setConfig({
    axios: axiosInstance,
  })
}
