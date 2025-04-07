import { useContext, useState} from "react"
import { UserContext } from "../context/UserContext"
import { useNavigate } from 'react-router'

export const Login = () => {
  
  const {setUser} = useContext(UserContext)

  const [username, setUsername] = useState('')
  const navigate = useNavigate();

  const handleLogin = () => {
    setUser({username, isLogged: true})
    alert(`user ${username} logged successfully`)
    setUsername('')
    navigate('/dashboard', {replace: true})
  }

  return (
    <>
      <h1 className="font-bold text-3xl mb-4">login</h1>

      <input type="text" value={username} onChange={e => setUsername(e.target.value)}/>
      <button onClick={handleLogin} className="bg-blue-400 text-white rounded-md px-4 py-2">log in</button>
    </>
  )
}
