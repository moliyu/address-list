<template>
  <div overflow-y-auto>
    <list-item
      v-for="(item, idx) in disPlayList"
      :key="item.letter"
      :class="idx > 0 && 'mt-30px'"
      :letter="item.letter"
      :users="item.users"
      @show-detail="showDetail"
    ></list-item>
    <letters :list="searchedList" @change="change" :idx="current" />
    <Dialog ref="dialog" @change="changeDis" />
  </div>
</template>

<script lang="ts" setup>
import { User } from "../utils"
import ListItem from "./ListItem.vue"
import Letters from "./Letters.vue"
import Dialog from "./Dialog.vue"

const props = defineProps<{
  userList: User[]
  kw: string
  changeKw: (val: string) => void
}>()

const { userList, kw, changeKw } = toRefs(props)
const searchedList = userSearch(userList, kw)
const current = ref(-1)
const change = (idx: number) => {
  changeKw.value("")
  current.value = idx
}
const disPlayList = computed(() => {
  if (current.value >= 0) {
    return [searchedList.value[current.value]]
  }
  return searchedList.value
})
watchEffect(() => {
  if (kw.value) {
    current.value = -1
  }
})

const dialog = ref<InstanceType<typeof Dialog>>()
const showDetail = (user: User) => {
  dialog.value?.open(user)
}
const flatList = computed(() => {
  return disPlayList.value.reduce((res, item) => {
    return res.concat(item.users)
  }, [] as User[])
})
const changeDis = ({ dis, user }: { dis: number; user: User }) => {
  const idx = flatList.value.findIndex((item) => item.name === user.name)
  if (idx > -1) {
    const index = idx + dis
    if (index < flatList.value.length && index >= 0) {
      dialog.value?.open(flatList.value[index])
    }
  }
}
</script>
