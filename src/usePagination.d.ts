import { Ref } from 'vue'
import { UseRequestReturn } from './useRequest.d'

export type Data = {
  total: number
  list: any[]
}
export type Params = [{
  current: number
  pageSize: number
}, ...any[]]
export type Service<TData extends Data, TParams extends Params> = (...args: TParams) => Promise<TData>

export interface UsePaginationOptions {
  manual?: boolean
  defaultCurrent?: number
  defaultPageSize?: number
}

export interface Pagination {
  current: number
  pageSize: number
  onChange: (current: number, pageSize: number) => void
}

export interface UsePaginationReturn<TData extends Data, TParams extends Params>
  extends UseRequestReturn<TData, TParams> {
  pagination: Ref<Pagination>
}
