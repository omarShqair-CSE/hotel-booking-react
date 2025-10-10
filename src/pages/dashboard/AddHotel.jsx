import React, { useState } from 'react';
import uploadArea from '../../assets/uploadArea.png';

function AddHotel() {
    const [image, setImage] = useState({ 1: null, 2: null, 3: null });
    const [inputData, setInputData] = useState({
        roomType: "",
        pricePerNight: "",
        amenities: {
            "Free Wi-Fi": false,
            "Breakfast Included": false,
            "Airport Shuttle": false,
            "Swimming Pool": false,
        }
    });

    return (
        <form className="mt-6 p-6 max-w-5xl mx-auto bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-2 text-gray-800">Add Hotel</h1>
            <p className="text-gray-600 mb-6">Please fill in the details below to add a new hotel.</p>

            {/* Image Upload */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {Object.keys(image).map((key) => (
                    <label htmlFor={`hotelImage${key}`} key={key} className="cursor-pointer">
                        <img
                            className="h-32 w-full object-cover rounded-lg shadow-sm hover:opacity-90 transition-opacity"
                            src={image[key] ? URL.createObjectURL(image[key]) : uploadArea}
                            alt={`Hotel Image ${key}`}
                        />
                        <input
                            type="file"
                            accept="image/*"
                            hidden
                            id={`hotelImage${key}`}
                            onChange={(e) => setImage({ ...image, [key]: e.target.files[0] })}
                        />
                    </label>
                ))}
            </div>

            {/* Room Type & Price */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex-1">
                    <p className="text-gray-600 font-semibold mb-1">Room Type</p>
                    <select
                        value={inputData.roomType}
                        onChange={(e) => setInputData({ ...inputData, roomType: e.target.value })}
                        className="border border-gray-300 rounded p-2 w-full"
                    >
                        <option value="">Select Room Type</option>
                        <option value="single">Single</option>
                        <option value="double">Double</option>
                        <option value="suite">Suite</option>
                    </select>
                </div>

                <div className="flex-1">
                    <p className="text-gray-600 font-semibold mb-1">Price Per Night ($)</p>
                    <input
                        type="number"
                        placeholder="0"
                        value={inputData.pricePerNight}
                        onChange={(e) => setInputData({ ...inputData, pricePerNight: e.target.value })}
                        className="border border-gray-300 rounded p-2 w-full"
                    />
                </div>
            </div>

            {/* Amenities */}
            <p className="text-gray-600 font-semibold mb-2">Amenities</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {Object.keys(inputData.amenities).map((amenity, index) => (
                    <label key={index} className="flex items-center cursor-pointer text-gray-700">
                        <input
                            type="checkbox"
                            checked={inputData.amenities[amenity]}
                            onChange={() =>
                                setInputData({
                                    ...inputData,
                                    amenities: { ...inputData.amenities, [amenity]: !inputData.amenities[amenity] },
                                })
                            }
                            className="mr-2"
                        />
                        {amenity}
                    </label>
                ))}
            </div>

            <button
                type="submit"
                className="w-full sm:w-auto bg-amber-500 text-white font-semibold rounded p-3 hover:bg-amber-600 transition-colors"
            >
                Add Hotel
            </button>
        </form>
    );
}

export default AddHotel;
