<template>
  <div
    relative
    w-full
    flex
    items-center
    h-32px
    class="search"
    @click.stop="focus"
  >
    <i class="i-mdi:magnify"></i>
    <input
      flex-1
      ml-2
      border-none
      outline-none
      placeholder="search"
      :value="modelValue"
      @input="change"
    />
    <div
      class="absolute left-0 bottom--40px w-full z-10 bg-#eee flex flex-wrap gap-2 p-2"
      v-if="show && !modelValue"
    >
      <div
        border="1px solid #555"
        rounded-1
        px-4px
        v-for="(item, i) in Object.keys(searchHistory())"
        :key="i"
        cursor-pointer
        @click="emits('update:modelValue', item)"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  modelValue?: string
}>()
const emits = defineEmits<{
  (event: "update:modelValue", value: string)
}>()
const change = debounce((e) => {
  emits("update:modelValue", e.target.value)
}, 500)
const searchHistory = () => JSON.parse(localStorage.getItem("kw") ?? "{}")

const show = ref(false)
const close = () => {
  show.value = false
  document.removeEventListener("click", close)
}
const focus = () => {
  show.value = true
  document.addEventListener("click", close)
}
</script>

<style lang="less" scoped>
.search {
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    border-left: 1px solid;
    border-right: 1px solid;
    border-bottom: 1px solid;
    width: 100%;
    height: 5px;
  }
}
</style>
