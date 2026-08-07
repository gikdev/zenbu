export type Result<TData = void, TError = string> = { ok: false; error: TError } | { ok: true; data: TData }

export const voidValue = undefined as unknown as void

export const ok = <TData, TError>(data: TData): Result<TData, TError> => ({
  ok: true,
  data,
})

ok.void = () => ok(voidValue)

export const err = <TError>(error: TError): Result<never, TError> => ({
  ok: false,
  error,
})

export const unwrapOr = <TData, TValue>(result: Result<TData>, callback: (data: TData) => TValue, fallback: TValue) =>
  result.ok ? callback(result.data) : fallback

export const convertResult = <TInput, TOutput, TError>(
  result: Result<TInput, TError>,
  convert: (data: TInput) => TOutput,
): Result<TOutput, TError> => (result.ok ? ok(convert(result.data)) : err(result.error))
