import { useState } from 'react'
import { playlist } from "../LinkedList"

export const SongCard = () => {

  const [actualSong, setActualSong] = useState(playlist.head)

  const handleNextSong = () => {
    setActualSong(actualSong.next)
  }

  return (
    <div className=" mx-8 bg-white text-neutral-900 p-4 rounded-lg shadow border">
      <img src={actualSong.value.cover} alt="Portada del álbum" className="rounded-md mb-4 w-96 h-96" />

      <div className='flex flex-col'>
        <span className="text-xl font-bold">{actualSong.value.title}</span>
        <span className="text-lg text-neutral-500">{actualSong.value.artist}</span>
      </div>

      <div className="mt-4 flex justify-end">
        <button onClick={handleNextSong} className="px-4 py-2 bg-green-500 rounded-full">next song</button>
      </div>
    </div>
  )
}
