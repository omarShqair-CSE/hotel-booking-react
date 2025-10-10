import { useNavigate, useParams } from 'react-router-dom'
import { roomsData } from "../data/roomsData";

import { FaLocationArrow, FaStar } from 'react-icons/fa'
import { IoIosHome, IoMdArrowBack } from 'react-icons/io';

function RoomDetails() {
    const navigate = useNavigate()
    const { id } = useParams()
    const hotel = roomsData.find((room) => room._id === id)

    if (!hotel) {
        return <div className="text-center pt-60 py-10 text-red-600">Hotel not found.</div>;
    }

    return (
        <div className='max-w-5xl mx-auto  px-40 pt-40'>
            <div className='text-center'>
                <h1 className='text-5xl font-bold mb-4 '>{hotel.hotel}</h1>
                <p className='mb-2'>{hotel.city}</p>
                <p className="text-gray-600 mb-2 flex items-center justify-center gap-2"><FaLocationArrow />    {hotel.address}, {hotel.city}</p>
                <img className="w-full h-96 object-cover rounded-xl shadow-md mb-6" src={hotel.images} />
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2'>
                <div>
                    <h2 className='font-bold'>Room Type</h2>
                    <p className='text-gray-500'>{hotel.roomType}</p>
                    <h2 className='font-bold mt-3'>Amenities</h2>
                    <ul className='list-disc list-inside text-gray-500'>
                        {hotel.amenities.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className='font-bold'>Price per Night</h2>
                    <p className='text-gray-500'>{hotel.pricePerNight}</p>
                    <h2 className=" font-semibold mt-4 mb-2">Rating</h2>

                    <div className="flex items-center text-yellow-400 mb-2">
                        {Array.from({ length: hotel.rating }).map((_, i) => (
                            <FaStar key={i} />
                        ))}
                    </div>
                    <h2 className='font-bold mt-3'>Availibility</h2>
                    <p className={hotel.isAvailable ? "text-green-500" : "text-red-500"}>
                        {hotel.isAvailable ? "Available" : "Not Availible"}

                    </p>

                </div>
            </div>

            <div className='mt-10'>
                <h2 className="text-3xl font-semibold mb-2 ">Location</h2>

                <iframe title="map"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(hotel.address)}&output=embed`}
                    width="100%"
                    height="450px"
                    className="rounded-md shadow"
                    loading="lazy"
                >
                </iframe>
            </div>

            <div className='m-19 flex md:flex-row flex-col items-center gap-2 justify-center'>
                <button className='flex items-center gap-2 justify-center'
                    onClick={() => navigate(-1)}
                >                    <IoMdArrowBack />
                    Back</button>
                <button className='flex items-center gap-2 justify-center'>
                    <IoIosHome />
                    Home
                </button >


            </div>
        </div>
    )
}

export default RoomDetails
