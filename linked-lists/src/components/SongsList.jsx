import { playlist } from "../LinkedList"
import { SongItem } from "./SongItem";

export const SongsList = () => {

  const renderNodes = () => {
    const cards = [];
    let current = playlist.head;

    if (!current) return cards; // lista vacía
    const start = current;

    do {
      cards.push(
        <SongItem key={Math.random()} value={current.value} />
      );
      current = current.next;
    } while (current && current !== start);

    return cards;
  };

  return (
    <div className='gap-4'>
      {renderNodes()}
    </div>
  )
}
