import { useState } from "react"
import { Book, bookStack} from "./stack"
import { BookForm } from "./BookForm"

export const BookStack: React.FC = () => {

  // we need a state to re renderize the component
  const [_, forceUpdate] = useState(0)

  const handleAddBook = (book: Book) => {
    bookStack.push(book)
    forceUpdate(n => n + 1) // forzamos actualización
  }

  const handlePop = () => {
    bookStack.pop()
    forceUpdate(n => n + 1)
  }

  return (
    <div className="p-6">
      <BookForm onAddBook={handleAddBook} />

      <button
        onClick={handlePop}
        className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
      >
        Quitar último libro
      </button>

      <h3 className="text-xl font-bold mt-6">Pila de libros</h3>
      <ul className="mt-4 space-y-2">
        {bookStack.getItems().map((book, index) => (
          <li key={index} className="border p-3 rounded bg-gray-100">
            <strong>{book.name}</strong> - {book.author} ({book.isbn})<br />
            <em>{book.editorial}</em>
          </li>
        ))}
      </ul>
    </div>
  )
}