import { useState } from 'react'
import './index.css'
import { List } from './List'

export const Content = () => {

  const [list, setList] = useState([])
  const [item, setItem] = useState('')

  const handleClick = () => {
    setList([...list, item])
    console.log(list)
  }

  return (
    <>
    <div className="topbar-div">
      <input type="text" onChange={(e) => setItem(e.target.value)}/>
      <button onClick={handleClick}>Add</button>
    </div>
    <List items={list}/>
    </>
  )
}
