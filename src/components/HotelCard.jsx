import hotel_1 from "../assets/hotel_1.jpg"
import hotel_2 from "../assets/hotel_2.jpg"
import hotel_3 from "../assets/hotel_3.jpg"
import hotel_4 from "../assets/hotel_4.jpg"

import { FaMapMarkerAlt, FaStar } from 'react-icons/fa'


function HotelCard() {
    const hotels = [
        {
            name: "Grand Palace Hotel",
            rating: 4.5,
            location: "New York, USA",
            price: "$120",
            image: hotel_1,
        },
        {
            name: "Sunrise Resort",
            rating: 4.8,
            location: "Santorini, Greece",
            price: "$180",
            image: hotel_2,
        },
        {
            name: "City Inn",
            rating: 4.2,
            location: "Tokyo, Japan",
            price: "$95",
            image: hotel_3,
        },
        {
            name: "Ocean View",
            rating: 4.7,
            location: "Barcelona, Spain",
            price: "$150",
            image: hotel_4,
        },
    ];
    return (
        <section className="py-12 px-6 ">
            <h2 className="text-3xl font-bold text-center mb-10">Featured Hotels</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" >
                {hotels.map((hotel, index) => (
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300" key={index}>
                        <img className="h-48 w-full object-cover" src={hotel.image} />
                        <div className='p-4 space-y-2'>
                            <div className='flex justify-between items-center'>
                                <h3 className='text-lg text-[#e89755]'>{hotel.name}</h3>
                                <div className="flex items-center text-yellow-500 text-sm">
                                    <span className="mr-1">{hotel.rating}</span>
                                    <FaStar />
                                </div>
                            </div>
                            <div className='flex items-center text-gray-500 text-sm'>
                                <FaMapMarkerAlt className="mr-2" />
                                <span>{hotel.location}</span>
                            </div>
                            <div className='flex justify-between items-center pt-2'>
                                <p className='font-bold text-[#e89755]'>{hotel.price}/night</p>
                                <button className='mt-4'>Book Now</button>

                            </div>
                        </div>
                    </div>
                ))}

            </div>

        </section>
    )
}

export default HotelCard