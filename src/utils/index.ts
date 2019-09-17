function extend<T, U>(first: T, second: U): T & U {
  const result = {} as T & U
  for (const id in first) {
    if ((first as any)[id]) {
      ;(result as any)[id] = (first as any)[id]
    }
  }
  for (const id in second) {
    if (!(result as any).hasOwnProperty(id)) {
      ;(result as any)[id] = (second as any)[id]
    }
  }
  return result
}

class Person {
  constructor(public name: string) {}
}

interface ILoggable {
  log(): void
}

class ConsoleLogger implements ILoggable {
  public log() {
    console.log('111')
  }
}

const jim = extend<Person, ConsoleLogger>(
  new Person('Jim'),
  new ConsoleLogger()
)

console.log(jim.name, jim.log())
