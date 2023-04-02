<template>
  <div
    v-if="show"
    @click="close"
    fixed
    left-0
    top-0
    w-screen
    h-screen
    flex
    flex-col
    justify-center
    items-center
    class="bg-[rgba(0,0,0,0.6)]"
  >
    <div
      text-30px
      cursor-pointer
      text-white
      hover:text-blue
      class="i-mdi:chevron-up"
      @click.stop="change(-1)"
    ></div>
    <div w-300px bg-white rounded-md px-4 py-5 @click.stop>
      <div flex>
        <div class="i-mdi:github" text-80px text-blue></div>
        <div flex-1 ml-4>
          <div>{{ user.name }}</div>
          <div flex>
            <p>{{ user.followers }} followers</p>
            <p ml-20px>{{ user.stars }} stars</p>
          </div>
        </div>
      </div>
      <div mt-5 flex>
        <div w-50px>email:</div>
        {{ user.email }}
      </div>
      <div my-5 flex>
        <div w-50px>Bio:</div>
        {{ user.Bio }}
      </div>
    </div>
    <div
      text-30px
      cursor-pointer
      text-white
      hover:text-blue
      class="i-mdi:chevron-down"
      @click.stop="change(1)"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { User } from "../utils"

const emits = defineEmits<{
  (event: "change", val: { dis: number; user: User })
}>()

const user = ref<Partial<User>>({})
const show = ref(false)
const close = () => {
  show.value = false
}
const open = (u: User) => {
  user.value = u
  show.value = true
}
const change = (dis: number) => {
  emits("change", { dis, user: user.value as User })
}
defineExpose({
  open,
})
</script>
