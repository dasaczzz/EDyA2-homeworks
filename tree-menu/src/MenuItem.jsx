import { useState } from 'react'
import './App.css'

function MenuItem({node, level, style}) {

    const [childOpen, setChildOpen] = useState(true)

  return (
    <div>
       <p onClick={() => setChildOpen(!childOpen)} style={{ marginLeft: `${level}rem`, cursor: 'pointer' }}>{node.value}</p>
       {childOpen && node.children && node.children.map((item, index) => (
        <MenuItem key={index} node={item} level={level + 2} />
      ))}
    </ div>
  )
}

export default MenuItem