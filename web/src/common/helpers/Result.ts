export type Result<TData = void, TError = string> = { ok: false; error: TError } | { ok: true; data: TData }

export const voidValue = undefined as unknown as void

export const ok = <TData>(data: TData): Result<TData> => ({
  ok: true,
  data,
})

ok.void = () => ok(voidValue)

export const err = <TError>(error: TError): Result<never, TError> => ({
  ok: false,
  error,
})

export const unwrapOr = <TData, TValue>(result: Result<TData>, fallback: TValue, callback: (data: TData) => TValue) =>
  result.ok ? callback(result.data) : fallback
