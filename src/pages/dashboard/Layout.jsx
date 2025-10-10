import { Outlet } from "react-router-dom"
import Navbar from "../../components/dashboard/Navbar"
import SideNavbar from "../../components/dashboard/SideNavbar"


function Layout() {
    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <div className="flex h-full">
                <SideNavbar />
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout