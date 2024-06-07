<!-- 自动发起请求 -->

<template>
  <div>
    <div v-if="error">系统出错了, 请重试</div>
    <div v-else>
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
  import { getSimpleTableData } from './service'

  const {
    error, loading, data, pagination,
  } = usePagination(getSimpleTableData)
</script>
