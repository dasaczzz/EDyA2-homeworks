export class Book {
  public name: string
  public isbn: string
  public author: string
  public editorial: string

  constructor()
  constructor(name: string, isbn: string, author: string, editorial: string)
  constructor(name?: string, isbn?: string, author?: string, editorial?: string) {
    this.name = name ?? ''
    this.isbn = isbn ?? ''
    this.author = author ?? ''
    this.editorial = editorial ?? ''
  }
}

export class Stack {
  public items: Book[]

  constructor()
  constructor(items: Book[])
  constructor(items?: Book[]) {
    this.items = items ??  []
  }

  // add element from top
  push(book: Book) {
    return new Stack([book, ...this.items])
  }

  // remove element from top
  pop() {
    return new Stack(this.items.slice(1))
  }

  peek() {
    return this.items.length > 0 ? this.items[this.items.length - 1] : null
  }

  isEmpty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length
  }

}

// sample data
const book1 = new Book('100 años de soledad', "1234", 'Gabriel Garcia Marquez', 'Panamericana')
const book2 = new Book('1984', "4321", 'George Owell', 'Pinguin')
const book3 = new Book('El principito', "9876", 'Antoine de Saint-Exupéry', 'Planeta')
const book4 = new Book('El libro troll', "6789", 'El rubius', 'invento')

const items = [book1, book2, book3, book4]

export const bookStack = new Stack(items)
