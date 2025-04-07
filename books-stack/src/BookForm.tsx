import { useState } from "react"
import { Book } from "./stack"

interface Props {
  onAddBook: (book: Book) => void
}

export const BookForm: React.FC<Props> = ({onAddBook}) => {

  const [book, setBook] = useState<Book>(new Book())

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setBook(prev => {
      const updated = { ...prev, [name]: value } as Book
      return updated
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAddBook(book)
    setBook({ name: "", isbn: "", author: "", editorial: "" })
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 shadow rounded bg-white space-y-4">
      <h2 className="text-xl font-bold mb-2">Crear Libro</h2>

      <div>
        <label className="block text-sm font-medium">Nombre</label>
        <input
          type="text"
          name="name"
          value={book.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-2 py-1"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">ISBN</label>
        <input
          type="text"
          name="isbn"
          value={book.isbn}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-2 py-1"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Autor</label>
        <input
          type="text"
          name="author"
          value={book.author}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-2 py-1"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Editorial</label>
        <input
          type="text"
          name="editorial"
          value={book.editorial}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-2 py-1"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Crear Libro
      </button>
    </form>
  )
}
