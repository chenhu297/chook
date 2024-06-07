interface PageParams {
  current: number
  pageSize: number
}

export function getFilterData(name: string): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`success ${name}`)
    }, 1000)
  })
}

/**
 * 模拟调后端接口, 简单分页
 * 注意入参和回参格式
 */
export function getSimpleTableData({
  current,
  pageSize,
}: PageParams): Promise<{ list: string[]; total: number }> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        list: new Array(pageSize).fill(`success ${current}`),
        total: 100,
      })
    }, 1000)
  })
}

/**
 * 模拟调后端接口, 带筛选条件的分页
 * 注意入参和回参格式
 */
export function getFilterTableData(
  { current, pageSize }: PageParams,
  name?: string,
): Promise<{ list: string[]; total: number }> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        list: new Array(pageSize).fill(`success ${current} ${name}`),
        total: 100,
      })
    }, 1000)
  })
}
