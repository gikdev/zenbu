import { ok, type Result } from 'neverthrow'
import { v4 } from 'uuid'

type Duration = { type: 'manual'; value: number } | { type: 'timed'; startAt: string; endAt: string | null }

export type IFocusSession = {
  id: string
  duration: Duration
  createdAt: string
}

export class FocusSession implements IFocusSession {
  id: string
  duration: Duration
  createdAt: string

  constructor(p: IFocusSession) {
    this.id = p.id
    this.duration = structuredClone(p.duration)
    this.createdAt = p.createdAt
  }

  static fromJsonString(input: string): Result<FocusSession, string> {
    const parsed = JSON.parse(input)
    return ok(new FocusSession(parsed))
  }

  static createNewTimed = (endAt: string | null): FocusSession =>
    new FocusSession({
      id: v4(),
      createdAt: new Date().toISOString(),
      duration: {
        type: 'timed',
        startAt: new Date().toISOString(),
        endAt,
      },
    })

  static createNewManual = (duration: number): FocusSession =>
    new FocusSession({
      id: v4(),
      createdAt: new Date().toISOString(),
      duration: {
        type: 'manual',
        value: duration,
      },
    })

  toObject = (): IFocusSession => ({
    id: this.id,
    createdAt: this.createdAt,
    duration: structuredClone(this.duration),
  })

  clone = (): FocusSession => new FocusSession(this.toObject())

  toJsonString = (): string => JSON.stringify(this.toObject())

  changeEndAt(endAt: string | null) {
    if (this.duration.type === 'manual') return this

    this.duration.endAt = endAt

    return this
  }

  getDurationInMinutes(): number | null {
    if (this.duration.type === 'manual') {
      return this.duration.value
    } else if (this.duration.type === 'timed') {
      const start = new Date(this.duration.startAt)
      const end = this.duration.endAt ? new Date(this.duration.endAt) : new Date()
      const minutes = (end.getTime() - start.getTime()) / (1000 * 60)
      return Math.max(0, Math.round(minutes))
    } else {
      return null
    }
  }
}
