import { FaLocationArrow, FaStar } from "react-icons/fa";
import allrooms_1 from "../assets/allrooms_1.jpg"
import allrooms_2 from "../assets/allrooms_2.jpg"
import allrooms_3 from "../assets/allrooms_3.jpg"
import allrooms_4 from "../assets/allrooms_4.jpg"
import { useState } from "react";

const roomFilter = [
    "Single Room",
    "Double Room",
    "Swimming Pool",
    "Family Suite"
]

const priceFilter = [
    "0 to 500",
    "500 to 1000",
    "1000 to 2000",
    "2000 to 3000",
]

const sortOption = [
    "Price Low To High",
    "Price High To Low",
    "Newest"
]

// const [openFiter,setOpenFilter] = useState(false)

function AllHotels() {

    const [selectedRooms, setSelectedRooms] = useState([]);
    const [selectedPrice, setSelectedPrice] = useState("");
    const [selectedSort, setSelectedSort] = useState("")

    const roomsData = [
        {
            _id: "a1f64c7197bc1234abcd9012",
            hotel: "Alpine View Lodge",
            city: "USA",
            address: "112 Mountain Rd, Aspen, Colorado, USA",
            roomType: "King Suite",
            pricePerNight: 450,
            rating: 2,
            amenities: ["Balcony", "Sea View", "High-Speed WiFi"],
            images: allrooms_1,
            isAvailable: true,
            createdAt: "2025-04-12T09:15:00.000Z",
            updatedAt: "2025-04-12T09:15:00.000Z",
            __v: 0,
        },
        {
            _id: "b2e75d8298cd2345bcde0123",
            hotel: "Garden Luxe Hotel",
            roomType: "Standard Twin",
            address: "45 Emirgan St, Sariyer, Istanbul, Türkiye",
            city: "Istanbul",
            pricePerNight: 280,
            amenities: ["TV", "City View", "Breakfast Included"],
            images: allrooms_2,
            rating: 4,

            isAvailable: false,
            createdAt: "2025-04-13T11:30:00.000Z",
            updatedAt: "2025-04-13T11:30:00.000Z",
            __v: 0,
        },
        {
            _id: "c3d86e93a9de3456cdef1234",
            hotel: "UrbanStay Central",
            roomType: "Luxury Single",
            pricePerNight: 320,
            address: "210 Lexington Ave, Manhattan, New York, USA",

            city: "New York",
            amenities: ["Work Desk", "Garden Access", "Air Conditioning"],
            images: allrooms_3,
            rating: 5,
            isAvailable: true,
            createdAt: "2025-04-14T14:45:00.000Z",
            updatedAt: "2025-04-14T14:45:00.000Z",
            __v: 0,
        },

        {
            _id: "d4f97fa4b0ef4567defa2345",
            hotel: "King Suite",
            roomType: "Deluxe Family Room",
            pricePerNight: 390,
            address: "88 Lotus Lake Rd, Guilin, Guangxi, China",

            amenities: ["Mini Bar", "Mountain View", "Free Parking"],
            images: allrooms_4,
            rating: 3,
            city: "China",
            isAvailable: true,
            createdAt: "2025-06-22T09:00:00.000Z",
            updatedAt: "2025-06-22T09:00:00.000Z",
            __v: 0,
        }
    ];
    return (
        <div className="container">
            <div className="flex  flex-col  py-50  md:flex-row h-screen gap-4">
                {/* section 1 */}
                <div className=" w-full md:w-2/3 flex flex-col gap-6 px-4 md:px-10">
                    <div className="px-10">
                        <h1 className='text-[#e89755] text-4xl md:text-2xl'>Hotel Rooms</h1>
                        <p className='text-gray-500 md:text-base text-sm max-w-170 mt-2 text-center '> Discover comfortable and stylish rooms tailored to every traveler’s needs — from cozy singles to luxurious suites.</p>
                        <div className="mt-7">
                            {roomsData.map(roomData => (
                                <div key={roomData._id} className="flex flex-col md:flex-row gap-4 items-start ">
                                    <img src={roomData.images} alt={roomData.roomType} className="w-full md:w-1/2 h-auto rounded mr-3" />
                                    <div className=" flex flex-col gap-2 w-full">
                                        <h2 className="text-xl md:text-2xl lg:text-3xl">{roomData.hotel}</h2>
                                        <h2 className="text-gray-500 md:text-lg lg:text-xl">     {roomData.city}</h2>
                                        <div className="mt-2.5 items-center flex text-yellow-400 gap-1">
                                            {Array.from({ length: roomData.rating }).map((_, i) => (
                                                <FaStar key={i} />
                                            ))}
                                        </div>
                                        <div className="flex items-start pt-2.5 gap-x-2.5">
                                            <FaLocationArrow className="flex-shrink-0 mt-1" />
                                            <span className="break-words">{roomData.address}</span>
                                        </div>
                                        <div className="mt-2.5 grid grid-cols-2 md:flex md:flex-wrap gap-2">
                                            {roomData.amenities.map((amenitie, index) => (
                                                <small key={index} className='py-2 sm:w-full md:w-auto justify-start flex-wrap  md:px-2  items-center sp rounded-lg bg-gray-200 mr-2 '>{amenitie}</small>
                                            ))}
                                        </div>
                                        <p className="text-[#e89755]  font-bold text-base md:text-lg lg:text-xl mb-5 md:mb-0">{roomData.pricePerNight}$/Night</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
                {/* section 2  */}
                <div className="md:w-1/3 w-full flex mt-4 md:mt-0 order-first mb-7   md:order-last">
                    <div className="  w-full  justify-between border-b px-5  border-gray-50">
                        <div className="text-gray-700">
                            <p className="mt-4 font-bold border-b-2">FILTERS</p>
                            <div className="mt-5">
                                <h3 className="font-bold mb-2">Popular Filters</h3>
                                {roomFilter.map((filter, index) => (
                                    <label key={index} className="flex items-center gap-2 mb-1">
                                        <input type="checkbox"
                                            checked={selectedRooms.includes(filter)}
                                            onChange={(e) => {
                                                if (e.target.checked) {
                                                    setSelectedRooms([...selectedRooms, filter]);
                                                } else {
                                                    setSelectedRooms(selectedRooms.filter((r) => r !== filter));
                                                }
                                            }}
                                            className="accent-blue-500" />
                                        <span>{filter}</span>
                                    </label>
                                ))}
                            </div>

                            <div className="mt-5">
                                <h3 className="font-bold mb-2">Price Range</h3>
                                {priceFilter.map((range, index) => (
                                    <label key={index} className="flex items-center gap-2 mb-1">
                                        <input type="radio" name="price"
                                            checked={selectedPrice === range}
                                            onChange={() => setSelectedPrice(range)}
                                            className="accent-blue-500" />
                                        <span>{range}</span>
                                    </label>
                                ))}
                            </div>
                            <div className="mt-5">
                                <h3 className="font-bold mb-2">Sort by</h3>
                                {sortOption.map((sort, index) => (
                                    <label key={index} className="flex items-center gap-2 mb-1">
                                        <input type="radio" name="sort"
                                            checked={selectedSort === sort}
                                            onChange={() => setSelectedSort(sort)}
                                            className="accent-blue-500" />
                                        <span>{sort}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="  w-1/3 mt-4">
                            <button
                                onClick={() => {
                                    setSelectedRooms([]);
                                    setSelectedPrice("");
                                    setSelectedSort("");
                                }}
                                className="text-blue-500 font-semibold hover:underline mt-4 md:mt-0"
                            >
                                Clear
                            </button>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default AllHotels