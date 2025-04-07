import { Route, Routes } from 'react-router'
import { UserProvider } from './context/UserProvider'
import { Navbar } from './components/Navbar'
import { HomePage } from './pages/HomePage'
import { Login } from './pages/Login'
import { AboutPage } from './pages/AboutPage'
import { Dashboard } from './pages/Dashboard'
import { PrivateHandler } from './pages/PrivateHandler'

export const App = () => {
  return (
    <UserProvider>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<AboutPage />} />
        <Route element={<PrivateHandler/>}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </UserProvider>
  )
}
