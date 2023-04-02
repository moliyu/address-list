export const test = () => {
  console.log("123")
}

const nameList = [
  "Kazushige",
  "Moya",
  "Ylva",
  "Sabine",
  "Verdad",
  "Tannar",
  "Branko",
  "Eryx",
  "Rahm",
  "Canta",
  "Boinedal",
  "Khadiga",
  "Taufeeq",
  "Anevay",
  "Raman",
  "Tuketu",
  "Hogan",
  "Antheia",
  "Oba",
  "Ida",
  "Airlie",
  "Celexa",
  "Guang",
  "Querijn",
  "Donny",
  "Estela",
  "Obama",
  "Atalo",
  "Dapper",
  "Eternity",
  "Azhar",
  "Jarvis",
  "Hakim",
  "Sarina",
  "Baeddan",
  "Goodwin",
  "Lyre",
  "Asaka",
  "Denali",
  "Genaro",
  "Nyako",
  "Maddison",
  "Trina",
  "Hoai",
  "Maliny",
  "Phalen",
  "Amisquew",
  "Constantijn",
]
export const userList = () =>
  nameList.sort().map((name, index) => {
    return {
      name,
      stars: index,
      followers: index,
      email: `123abc${index}@xx.com`,
      Bio: "xxxx",
    }
  })

export const getFirstName = (name: string) => {
  return name.slice(0, 1).toUpperCase()
}

export const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
]

export type User = ReturnType<typeof userList>[number]
