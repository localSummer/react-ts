type User = {
  name: string
  age: number
  isTest: boolean
}

type a = Omit<User, 'age' | 'name'>
