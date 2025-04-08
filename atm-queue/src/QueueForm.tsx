import { useState } from 'react'
import { Person } from './queue'

interface Props {
  addToQueue: (item: Person) => void
}

export const QueueForm: React.FC<Props> = ({addToQueue}) => {

  const [person, setPerson] = useState(new Person)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    addToQueue(person)
    setPerson({name: '', withdraw: ''})
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPerson(prevPerson => {
      const updated = {...prevPerson, [name]: value} as Person
      return updated
    })
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 shadow rounded bg-white space-y-4">
      <h2 className="text-xl font-bold mb-2">add person to queue</h2>
      <label className="block text-sm font-medium">name</label>
      <input
        type="text"
        name="name"
        value={person.name}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded px-2 py-1"
      />

      <label className="block text-sm font-medium">withdraw</label>
      <input
        type="text"
        name="withdraw"
        value={person.withdraw}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded px-2 py-1"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">add person</button>
    </form>
  )

}