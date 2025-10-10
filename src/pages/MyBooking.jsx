import { userBookingsData } from "../data/userBookingsData";

function MyBooking() {
    return (
        <div className="mt-40 p-8">
            <h2 className="font-bold text-center text-3xl bg-gray-400 py-6 rounded-lg shadow-md">
                My Bookings
            </h2>



            <div className="overflow-x-auto mt-6 shadow-lg rounded-lg">
                <table className="w-full border border-gray-300 text-center">
                    <thead className="bg-gray-200 text-gray-800 uppercase">
                        <tr>
                            <th className="py-3 px-4">User</th>
                            <th className="py-3 px-4">Image</th>
                            <th className="py-3 px-4">Hotel</th>
                            <th className="py-3 px-4">Guests</th>
                            <th className="py-3 px-4">Check-In</th>
                            <th className="py-3 px-4">Check-Out</th>
                            <th className="py-3 px-4">Total Price ($)</th>
                            <th className="py-3 px-4">Status</th>
                            <th className="py-3 px-4">Payment</th>
                        </tr>
                    </thead>

                    <tbody className="text-gray-700 divide-y divide-gray-300">
                        {userBookingsData.map((booking) => (
                            <tr
                                key={booking._id}
                                className=" hover:bg-gray-100 cursor-pointer transition duration-200 ease-in-out "
                            >
                                <td className="py-3 px-4 text-fuchsia-500">{booking.user}</td>
                                <td className="py-3 px-4">
                                    <img
                                        src={booking.image}
                                        alt={booking.hotel}
                                        className="w-24 h-16 object-cover rounded-lg mx-auto shadow-sm"
                                    />
                                </td>

                                <td className="py-3 px-4 font-semibold text-cyan-600">{booking.hotel}</td>
                                <td className="py-3 px-4 text-amber-600">{booking.guests}</td>

                                <td className="py-3 px-4 text-green-500">
                                    {new Date(booking.checkInDate).toLocaleDateString()}
                                </td>
                                <td className="py-3 px-4 text-red-500">
                                    {new Date(booking.checkOutDate).toLocaleDateString()}
                                </td>

                                <td className="py-3 px-4 font-medium text-blue-600">
                                    {booking.totalPrice}$
                                </td>

                                <td
                                    className={`py-3 px-4  font-bold ${booking.status === "completed"
                                        ? "text-green-600"
                                        : booking.status === "pending"
                                            ? "text-yellow-500"
                                            : booking.status === "cancelled"
                                                ? "text-red-600"
                                                : "text-gray-700"
                                        }`}
                                >
                                    {booking.status}
                                </td>

                                <td className={`py-3 px-4 ${booking.isPaid ? 'text-green-500' : 'text-red-500'} `}>{booking.paymentMethod}({booking.isPaid ? "Paid" : "Unpaid"})</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MyBooking;
