import { Link } from 'react-router'
import { DoubleLinkedList } from '../DoubleLinkedList'
import { useState } from 'react'

export const Navbar = () => {

  const pages = ['http://localhost:5173/', 'http://localhost:5173/about', 'http://localhost:5173/player']
  const historyLinkedList = new DoubleLinkedList(pages)

  const [currentPage, setCurrentPage] = useState(historyLinkedList.getCurrentPage());

  const handleBack = () => {
    setCurrentPage(historyLinkedList.back());
    console.log(currentPage)
  };

  const handleForward = () => {
    setCurrentPage(historyLinkedList.forward());
    console.log(currentPage)
  };

  return (
    <nav className='flex justify-between bg-stone-700 text-white px-12 py-6 items-center align-middle'>
      <Link to='/' className="font-bold text-4xl">LinkedList app</Link>

        <div className='flex gap-2'>
          <button onClick={handleBack}  disabled={!historyLinkedList.canGoBack()} className='bg-neutral-200 text-neutral-800 rounded-md hover:bg-neutral-500 px-4 py-2'>previous page</button>
          <button onClick={handleForward} disabled={!historyLinkedList.canGoForward()} className='bg-neutral-200 text-neutral-800 rounded-md hover:bg-neutral-500 px-4 py-2'>next page</button>
        </div>

        <ul className='flex items-center align-middle gap-2'>
          <li><Link to='/'>home</Link></li>
          <li><Link to='/about'>about</Link></li>
          <li><Link to='/player'>Music player</Link></li>
        </ul>
    </nav>
  )
}
