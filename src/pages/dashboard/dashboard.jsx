import { FaBookOpen, FaCheck, FaDollarSign, FaUser } from 'react-icons/fa'

function Dashboard() {
    const dashInfo = {
        totalBooking: "7",
        totalRevenue: "1500",
        totalGuests: 12,
        completedBookings: 5

    }

    return (
        <div className="mt-8 p-6">
            <h1 className="text-3xl font-bold mb-2 text-gray-800">Hotel Booking Dashboard</h1>
            <p className="text-gray-600 mb-8">
                Manage hotel listings, add new bookings, and keep track of all your reservations in one place.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <div className="flex items-center gap-4 bg-yellow-100 border border-yellow-400 rounded-xl p-5 w-full sm:w-1/3 shadow-md transition duration-300 hover:scale-105 cursor-pointer ease-in-out">
                    <FaBookOpen className="text-yellow-600 text-3xl" />
                    <div className="flex flex-col">
                        <p className="text-gray-700 font-semibold">Total Bookings</p>
                        <p className="text-2xl font-bold text-yellow-700">{dashInfo.totalBooking}</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 bg-green-100 border border-green-400 rounded-xl p-5 w-full sm:w-1/3 shadow-md transition duration-300 
                hover:scale-105 cursor-pointer ease-in-out">
                    <FaDollarSign className="text-green-600 text-3xl" />
                    <div className="flex flex-col">
                        <p className="text-gray-700 font-semibold">Total Revenue</p>
                        <p className="text-2xl font-bold text-green-700">${dashInfo.totalRevenue}</p>
                    </div>
                </div>

                <div
                    className="flex items-center gap-4 bg-blue-100 border border-blue-400 rounded-xl p-5 w-full sm:w-1/3 shadow-md transition duration-300 hover:scale-105 ease-in-out cursor-pointer"                >
                    <FaUser className="text-blue-600 text-3xl" />
                    <div className="flex flex-col">
                        <p className="text-gray-700 font-semibold">Total Guests</p>
                        <p className="text-2xl font-bold text-blue-700">{dashInfo.totalGuests}</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 bg-red-100 border border-red-400 rounded-xl p-5  w-full sm:w-1/3 shadow-md transition duration-300 hover:scale-105 cursor-pointer ease-in-out">
                    <FaCheck className="text-red-600 text-3xl" />
                    <div className="flex flex-col">
                        <p className="text-gray-700 font-semibold">Completed Bookings</p>
                        <p className="text-2xl font-bold text-red-600">{dashInfo.completedBookings}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dashboard
