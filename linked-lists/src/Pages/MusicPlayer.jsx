import { SongCard } from "../components/SongCard"
import { SongsList } from "../components/SongsList"

export const MusicPlayer = () => {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-6 text-center">my music</h1>
      <hr />

      <section className='flex items-center justify-center'>
        <SongsList />
        <SongCard />
      </section>
    </>
  )
}
