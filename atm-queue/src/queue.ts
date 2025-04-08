export class Person {
  public name: string = ''
  public withdraw: string = ''

  constructor()
  constructor(name: string, withdraw: string)
  constructor(name?: string, withdraw?: string) {
    this.name = name ?? ''
    this.withdraw = withdraw ?? ''
  }
}

export class Queue {
  public items: Person[] = []

  constructor()
  constructor(items: Person[])
  constructor(items?: Person[]) {
    this.items = items ?? []
  }

  enqueue(item: Person): Queue {
    return new Queue([...this.items, item]);
  }

  dequeue() {
    return new Queue(this.items.slice(1))
  }

  peek() {
    return this.items.length > 0 ? this.items[0] : null
  }

  size() {
    return this.items.length
  }

  isEmpty() {
    return this.items.length === 0
  }
}

const person1 = new Person('admin', '100')
const person2 = new Person('daniel', '50')
const person3 = new Person('david', '175')

const items = [person1, person2, person3]

export const peopleQueue = new Queue(items)