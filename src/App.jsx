import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import AllHotels from './pages/AllHotels'
import RoomDetails from './pages/RoomDetails'
import MyBooking from './pages/MyBooking'
import Layout from './pages/dashboard/Layout'
import Dashboard from './pages/dashboard/dashboard'
import AddHotel from './pages/dashboard/AddHotel'
import HotelList from './pages/dashboard/HotelList'

function App() {
  const isDashboard = useLocation().pathname.includes("dashboard")

  return (
    <>
      {!isDashboard && < Navbar />}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hotels' element={<AllHotels />} />
          <Route path='/rooms/:id' element={<RoomDetails />} />
          <Route path='/my-bookings' element={<MyBooking />} />
          <Route path='/dashboard' element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path='add-hotel' element={<AddHotel />} />
            <Route path='hotel-list' element={<HotelList />} />

          </Route>



        </Routes>
      </div>
    </>
  )
}

export default App