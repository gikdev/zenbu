import { useQuery } from '@tanstack/react-query'

import { RenderQuery } from '#/common/helpers/RenderQuery'

import { getAllJottingsOptions } from '../api/client'
import { JottingCards } from './JottingCards'
import { JottingsError } from './JottingsError'
import { JottingsLoading } from './JottingsLoading'
import { NoJottings } from './NoJottings'

export const JottingsSection = () => {
  const jottingsQ = useQuery(getAllJottingsOptions())

  return (
    <RenderQuery
      isList={true}
      status={jottingsQ.status}
      items={jottingsQ.data ?? []}
      emptyView={<NoJottings />}
      errorView={<JottingsError error={jottingsQ.error} onRetry={jottingsQ.refetch} />}
      loadingView={<JottingsLoading />}
      fullView={jottings => <JottingCards jottings={jottings} />}
    />
  )
}
