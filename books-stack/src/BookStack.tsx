import { useState } from "react"
import { Book, bookStack} from "./stack"
import { BookForm } from "./BookForm"

export const BookStack: React.FC = () => {

  const [books, setBooks] = useState(bookStack)
  console.log(books)

  const handleAddBook = (book: Book) => {
    setBooks(books.push(book))
  }

  const handleRemove = () => {
    setBooks(books.pop())
  }

  return (
    <div className="p-6">
      <BookForm onAddBook={handleAddBook} />

      <button
        onClick={handleRemove}
        className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
      >
        Quitar último libro
      </button>

      <h3 className="text-xl font-bold mt-6">Pila de libros</h3>
      <ul className="mt-4 space-y-2">
      {books.items.map(item => (
          <li className="border border-stone-600 rounded-md px-4 py-2">
            <h2 className="text-xl font-bold ">{item.name}</h2>
            <span>{item.isbn}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}