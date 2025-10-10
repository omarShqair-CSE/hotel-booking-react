import { Link } from 'react-router-dom'
import logo from '/src/assets/logo.png'
import { UserButton } from '@clerk/clerk-react'
function Navbar() {
    return (
        <div className='flex items-center justify-between px-7 border-b border-gray-300 bg-white py-3  transition-all'>
            <Link to="/">
                <img src={logo} className='h-30  invert opacity-80' />
            </Link>
            <UserButton />
        </div>
    )
}

export default Navbar