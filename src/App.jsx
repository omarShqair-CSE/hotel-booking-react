import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import AllHotels from './pages/AllHotels'

function App() {
  const isDashboard = useLocation().pathname.includes("dashboard")

  return (
    <>
      {!isDashboard && < Navbar />}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hotels' element={<AllHotels />} />
        </Routes>
      </div>
    </>
  )
}

export default App