import React from 'react'

export const List = ({items}) => {
  console.log(items)
  return (
    <ul>
      {items.map(item => {
        <li>{item}</li>
      })}
    </ul>
  )
}
