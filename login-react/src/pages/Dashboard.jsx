import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export const Dashboard = () => {
  const {user} = useContext(UserContext)
  console.log('in dashboard')
  
  return (
    <>
      <h1>Welcom back {user.username}</h1>
      <span>you just entered to the protected dashboard</span>
    </>
  )
}
