import { useMemo } from 'react'

import { useLinkItems } from './useLinkItems'

export const usePinnedLinkItems = (pinned: boolean) => {
  const linkItems = useLinkItems()

  const pinnedLinkItems = useMemo(
    () =>
      linkItems.filter(item => {
        const hasPinnedTag = item.tags.includes('pinned')
        return pinned ? hasPinnedTag : !hasPinnedTag
      }),
    [linkItems, pinned],
  )

  return pinnedLinkItems
}
