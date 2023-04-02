<template>
  <div>
    <div border-b-solid>{{ letter }}</div>
    <div
      v-for="(item, i) in users"
      :key="i"
      flex
      items-center
      h-40px
      cursor-pointer
      hover="bg-#eee"
      border-b="1px solid #eee"
      @click="emits('showDetail', item)"
    >
      <i class="i-mdi:image-outline"></i>
      <div>{{ item.name }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { User } from "../utils"

defineProps<{
  letter: string
  users: User[]
}>()
const emits = defineEmits<{
  (event: "showDetail", val: User)
}>()
</script>
