/**
 * Formats a total number of minutes into `[-]HH:mm` format.
 * - Positive: `"01:30"` (1 hour 30 min)
 * - Negative: `"-00:45"` (minus 45 minutes)
 * - Zero: `"00:00"`
 */
export function formatTotalMinutes(totalMinutes: number): string {
  const sign = totalMinutes < 0 ? '-' : ''
  const absolute = Math.abs(totalMinutes)

  // Use Math.floor to avoid rounding up (e.g., 1.9 min → 1 min)
  const hours = Math.floor(absolute / 60)
  const minutes = Math.floor(absolute % 60)

  const paddedHours = String(hours).padStart(2, '0')
  const paddedMinutes = String(minutes).padStart(2, '0')

  return `${sign}${paddedHours}:${paddedMinutes}`
}
