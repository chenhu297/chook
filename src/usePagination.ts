import { ref, watch } from 'vue'
import useRequest from './useRequest'
import {
  UsePaginationOptions,
  Pagination,
  UsePaginationReturn,
  Data,
  Params,
  Service,
} from './usePagination.d'

export default function usePagination<TData extends Data, TParams extends Params>(
  request: Service<TData, TParams>,
  options: UsePaginationOptions = {},
): UsePaginationReturn<TData, TParams> {
  const { defaultPageSize = 10, defaultCurrent = 1, manual } = options

  const {
    data, loading, error, run, params,
  } = useRequest(request, {
    manual,
    // @ts-ignore
    defaultParams: [{ current: defaultCurrent, pageSize: defaultPageSize }],
  })

  const onChange = (_current: number, _pageSize: number) => {
    const [oldPaginationParams = {}, ...restParams] = params.value || []
    // @ts-ignore
    run({ ...oldPaginationParams, current: _current, pageSize: _pageSize }, ...restParams)
  }

  const pagination = ref<Pagination>({
    current: defaultCurrent,
    pageSize: defaultPageSize,
    onChange,
  })

  watch(params, p => {
    if (!p) return
    const [paginationParams] = p
    const { current, pageSize } = paginationParams
    pagination.value.current = current
    pagination.value.pageSize = pageSize
  })

  return {
    pagination,
    data,
    run,
    loading,
    error,
    params,
  }
}
