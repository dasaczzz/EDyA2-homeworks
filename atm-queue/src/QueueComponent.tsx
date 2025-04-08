import { useState } from "react"
import { peopleQueue, Person } from "./queue"
import { QueueForm } from "./QueueForm"

export const QueueComponent = () => {

  const [queue, setQueue] = useState(peopleQueue)

  const addToQueue = (item: Person) => {
    setQueue(queue.enqueue(item))
  }

  const handleDequeue = () => {
    setQueue(queue.dequeue())
  }

  return (
    <div className="flex flex-col max-w-md mx-auto shadow rounded bg-white gap-8">
      <QueueForm addToQueue={addToQueue}/>
      <ul className="flex gap-8 ">
        {queue.items.map(item => (
          <li className="border border-stone-600 rounded-md px-4 py-2">
            <h2 className="text-xl font-bold ">{item.name}</h2>
            <span>{item.withdraw}</span>
          </li>
        ))}
      </ul>
      <button onClick={handleDequeue} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"> person finished succesfully</button>
    </div>
  )
}
