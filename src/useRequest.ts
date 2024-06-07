import { ref, onMounted } from 'vue'
import { Request, UseRequestOptions, UseRequestReturn } from './useRequest.d'

export default function useRequest<TData, TParams extends any[]>(
  request: Request<TData, TParams>,
  options: UseRequestOptions<TParams> = {},
): UseRequestReturn<TData, TParams> {
  const data = ref<TData>()
  const loading = ref(false)
  const error = ref<Error>()
  const params = ref<TParams>()

  function doRequest(...args: TParams): Promise<TData> {
    params.value = args
    loading.value = true
    return request(...args)
      .then(res => {
        data.value = res
        return data.value
      })
      .catch(err => {
        error.value = err
        return Promise.reject(err)
      })
      .finally(() => {
        loading.value = false
      })
  }

  onMounted(() => {
    if (!options?.manual) {
      const currentParams = options.defaultParams ?? ([] as unknown as TParams)
      doRequest(...currentParams)
    }
  })

  return {
    data,
    error,
    loading,
    run: doRequest,
    params,
  }
}
