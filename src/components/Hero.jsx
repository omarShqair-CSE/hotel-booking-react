import hotel3 from '../assets/hotel_3.jpg';

function Hero() {
    const cities = ["Istanbul", "New York", "Oslo", "London", "Beirut"];

    return (
        <div className='relative flex flex-col justify-center items-center p-4 sm:p-6 md:p-10 text-white  bg-no-repeat bg-cover bg-center h-screen'
            style={{ backgroundImage: `url(${hotel3})` }}
        >
            <div className='absolute inset-0 bg-black opacity-60'></div>

            <div className='relative z-10 w-full max-w-4xl'>
                <h2 className='text-[#e89755] text-2xl sm:text-3xl md:text-4xl mt-20 mb-3 font-bold text-center'>Find Your Perfect Stay, Anywhere</h2>
                <p className='text-lg sm:text-xl md:text-2xl text-center'>Discover top-rated hotels and exclusive deals around the world. Book with ease and start your journey today.</p>
                <div className='flex justify-center mt-5'>
                    <button className='px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4'>Book Now</button>
                </div>

                <section className="bg-white p-4 sm:p-6 md:p-8 mt-6 rounded-2xl shadow-lg mx-4 sm:mx-auto">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 text-center">Book Your Stay</h2>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="destination" className="block text-sm font-medium text-gray-700">Destination</label>
                            <input list="destination" type="text" name="destination" placeholder="e.g., Istanbul, Paris..."
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            <datalist id='destination'>
                                {cities.map((city, index) => (
                                    <option value={city} key={index} />
                                ))}
                            </datalist>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="checkin" className="block text-sm font-medium text-gray-700">Check-in</label>
                                <input type="date" id="checkin" name="checkin"
                                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label htmlFor="checkout" className="block text-sm font-medium text-gray-700">Check-out</label>
                                <input type="date" id="checkout" name="checkout"
                                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="guests" className="block text-sm font-medium text-gray-700">Guests</label>
                                <input type="number" id="guests" name="guests" min="1" max="10" defaultValue="1"
                                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label htmlFor="rooms" className="block text-sm font-medium text-gray-700">Rooms</label>
                                <input type="number" id="rooms" name="rooms" min="1" max="5" defaultValue="1"
                                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                        </div>
                        <div className='text-center'>
                            <button className='mt-3 px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4 bg-[#e89755] rounded-lg text-white font-bold hover:bg-[#c47331]' type="submit">
                                Search Hotels
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default Hero;
