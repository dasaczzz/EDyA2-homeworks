import { Navbar } from "./components/Navbar"
import { Route, Routes} from 'react-router'
import { Home } from "./Pages/Home"
import { MusicPlayer } from "./Pages/MusicPlayer"
import { About } from "./Pages/About"


export const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/player' element={<MusicPlayer />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </>
  )
}
