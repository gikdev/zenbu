import { useQuery } from '@tanstack/react-query'

import { getAllJottingsOptions } from '#/features/api/client'

export const useJottingsQ = () => useQuery(getAllJottingsOptions())
