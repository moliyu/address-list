<template>
  <div flex flex-col h-screen px-15>
    <Search v-model="kw" />
    <div h-50px></div>
    <List :user-list="contactList" :changeKw="changeKw" :kw="kw" flex-1 />
  </div>
</template>

<script lang="ts" setup>
import Search from "./Search.vue"
import List from "./List.vue"

const contactList = ref(userList())
const kw = ref("")
const changeKw = (val: string) => {
  kw.value = val
}
</script>
