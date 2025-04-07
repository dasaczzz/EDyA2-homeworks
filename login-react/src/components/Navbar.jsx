import { useContext } from "react"
import { Link, useNavigate } from "react-router"
import { UserContext } from "../context/UserContext"

export const Navbar = () => {

  const {setUser} = useContext(UserContext)
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser({
      username: '',
      isLogged: false, 
    })
    alert('you logout successfully ')
    navigate('/login')
  }
  
  return (
    <nav className='flex justify-between bg-stone-700 text-white px-12 py-6 items-center align-middle'>
      <Link to='/' className="font-bold text-4xl">login app</Link>
      <div className='flex gap-4'>
        <ul className='flex items-center align-middle gap-2'>
          <li><Link to='/'>home</Link></li>
          <li><Link to='/about'>about</Link></li>
          <li><Link to='/login'>login</Link></li>
        </ul>
        <button onClick={handleLogout} className='px-4 py-2 bg-red-400 text-white rounded-md'>logout</button>
      </div>
    </nav>
  )
}
