export const SongItem = ({value}) => {
  return (
    <div className="w-2xl my-4 flex items-center justify-between bg-neutral-100 hover:bg-neutral-200 rounded-xl p-4 transition duration-300 shadow-sm">
      <div className="flex items-center space-x-4">
        <img src={value.cover} alt="Álbum" className="rounded-lg w-14 h-14" />
        <div>
          <p className="font-medium text-lg">{value.title}</p>
          <p className="text-sm text-neutral-500">{value.artist}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-sm text-neutral-500">4:12</span>
        <button className="text-white rounded-full w-8 h-8 flex items-center justify-center hover:scale-110 transition">
          ▶
        </button>
      </div>
    </div>
  )
}
