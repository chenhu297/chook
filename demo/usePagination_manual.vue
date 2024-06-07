<!-- 手动发起请求, 添加 filter -->

<template>
  <div>
    <div v-if="error">系统出错了, 请重试</div>
    <div v-else>
      <Filter @change="handleFilterChange" />
      <Table
        :data-source="data?.list"
        :loading="loading"
      />
      <Pagination
        v-model="pagination.current"
        :total="data?.total"
        :page-size="pagination.pageSize"
        @change="pagination.onChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { usePagination } from '../index'
  import Table from './components/Table.vue'
  import Pagination from './components/Pagination.vue'
  import Filter from './components/Filter.vue'
  import { getFilterTableData } from './service'

  const {
    error, loading, data, pagination, run,
  } = usePagination(getFilterTableData, {
    manual: false, //  可不传, 默认 false. false 时自动发起请求
    defaultCurrent: 1, // 可不传, 默认 1
    defaultPageSize: 10, // 可不传, 默认 10
  })

  const handleFilterChange = (p: string) => {
    // 筛选条件改变时, 重置分页到 1
    run({ current: 1, pageSize: pagination.value.pageSize }, p)
  }

</script>
