<script setup lang="ts">
  import { defineModel } from 'vue'

  defineProps<{
    total: number
    pageSize: number
    onChange:(current: number, pageSize: number) => void
  }>()

  defineModel<number>()
</script>
