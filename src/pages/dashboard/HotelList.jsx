import { roomsData } from '../../data/roomsData';

function HotelList() {
    return (
        <div className="max-w-6xl mx-auto p-4 pl-0 lg:w-full lg:pl-57 font-sans">
            <h1 className="text-3xl font-bold text-center mb-8">Available Hotels</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {roomsData.map((room) => (
                    <div
                        key={room.id}
                        className={`flex flex-col items-center p-4 rounded-lg shadow-md
              ${room.isAvailable ? 'bg-green-100' : 'bg-red-100'}
              hover:scale-105 hover:shadow-2xl cursor-pointer transition-transform duration-200`}
                    >
                        <img
                            src={room.images}
                            alt={room.hotel}
                            className="w-full h-40 object-cover rounded-lg mb-4"
                        />
                        <div className=" space-y-1">
                            <h2 className="text-xl font-semibold">{room.hotel}</h2>
                            <p><strong>City:</strong> {room.city}</p>
                            <p><strong>Room Type:</strong> {room.roomType}</p>
                            <p><strong>Price Per Night:</strong> ${room.pricePerNight}</p>
                            <p><strong>Rating:</strong> {room.rating}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HotelList;
