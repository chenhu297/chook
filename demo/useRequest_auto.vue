<!-- 自动发起请求, 可通过 defaultParams 设置默认参数, 仅在 manual 为 false 时有效 -->

<template>
  <div v-loading="loading">
    <div v-if="error">系统出错了, 请重试</div>
    <div v-else>
      {{ data }}
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useRequest } from '../index'
  import { getFilterData } from './service'

  const {
    error, loading, data,
  } = useRequest(getFilterData, {
    defaultParams: ['注意用数组形式'],
    manual: false,
  })

</script>
