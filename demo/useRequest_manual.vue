<!-- 手动发起请求, 自定义传参 -->

<template>
  <div>
    <div v-loading="loading">
      <div v-if="error">系统出错了, 请重试</div>
      <div v-else>
        {{ data }}
      </div>
    </div>
    <button @click="handleBtnClick">手动发起请求</button>
  </div>
</template>

<script setup lang="ts">
  import { useRequest } from '../index'
  import { getFilterData } from './service'

  const {
    error, loading, data, run,
  } = useRequest(getFilterData, {
    manual: true, //  可不传, 默认 false. false 时自动发起请求
  })

  const handleBtnClick = () => {
    run('手动发起请求')
  }

</script>
