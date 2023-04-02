<template>
  <div
    absolute
    w-15
    right-0
    top-0
    h-full
    flex
    flex-col
    justify-center
    items-center
    text-sm
  >
    <div
      cursor-pointer
      hover:text-blue
      class="i-mdi:chevron-up"
      @click="changeIdx(-1)"
    ></div>
    <div
      cursor-pointer
      hover:text-blue
      v-for="(item, i) in list"
      :class="i === idx && 'text-blue'"
      :key="item.letter"
      @click="searchIdx(i)"
    >
      {{ item.letter }}
    </div>
    <div
      cursor-pointer
      hover:text-blue
      class="i-mdi:chevron-down"
      @click="changeIdx(1)"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { User } from "../utils"

const props = defineProps<{
  list: Array<{ letter: string; users: User[] }>
  idx: number
}>()
const emits = defineEmits<{
  (event: "change", val: number)
}>()
const searchIdx = (idx: number) => {
  emits("change", idx)
}
const changeIdx = (val: number) => {
  if (props.idx + val < props.list.length && props.idx + val >= 0) {
    emits("change", props.idx + val)
  }
}
</script>
