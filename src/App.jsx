import Navbar from './components/Navbar'
import { useLocation } from 'react-router-dom'

function App() {
  const isDashboard = useLocation().pathname.includes("dashboard")

  return (
    <>
      {!isDashboard && < Navbar />}
    </>
  )
}

export default App