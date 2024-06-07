import { Ref } from 'vue'

export type Request<TData, TParams extends any[]> = (...args: TParams) => Promise<TData>

export interface UseRequestOptions<TParams extends any[]> {
  manual?: boolean
  defaultParams?: TParams
}

export interface UseRequestReturn<TData, TParams extends any[]> {
  data: Ref<TData | undefined>
  run: Request<TData, TParams>
  loading: Ref<boolean>
  error: Ref<Error | undefined>
  params: Ref<TParams | undefined>
}
