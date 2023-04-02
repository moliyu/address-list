import { User } from "../utils"
import dayjs from "dayjs"

type Search = { letter: string; users: User[] }
type StoreItem = { time: number; list: Search[] }

function getFromStorage(kw) {
  const storeMap = JSON.parse(localStorage.getItem("kw") ?? "{}")
  if (storeMap.kw) {
    if (dayjs(storeMap[kw]).add(1, "day").isBefore(dayjs())) {
      delete storeMap[kw]
      localStorage.setItem("kw", JSON.stringify(storeMap))
    } else {
      return storeMap[kw]?.list as Search[]
    }
  }
}

function updateStorage(kw: string, list: Search[]) {
  const storeMap = JSON.parse(localStorage.getItem("kw") ?? "{}")
  if (!storeMap[kw]) {
    storeMap[kw] = {
      time: new Date().getTime(),
      list,
    }
  }
  localStorage.setItem("kw", JSON.stringify(storeMap))
}
export default (userList: Ref<User[]>, kw: Ref<string>) => {
  const searchedList = ref<Search[]>([])

  watchEffect(() => {
    const list = getFromStorage(kw.value ?? "")
    if (list) {
      return list
    } else {
      const map: Record<string, User[]> = {}
      searchedList.value = userList.value.reduce((res, item) => {
        const firstName = getFirstName(item.name)
        if (
          item.name.toLocaleLowerCase().includes(kw.value.toLocaleLowerCase())
        ) {
          if (!map[firstName]) {
            map[firstName] = []
            res.push({
              letter: firstName,
              users: map[firstName],
            })
          }
          const users = map[firstName]
          users.push(item)
        }
        return res
      }, [] as Search[])
      setTimeout(() => {
        if (kw.value) {
          updateStorage(kw.value, searchedList.value)
        }
      })
    }
  })
  return searchedList
}
