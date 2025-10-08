import testimonial_1 from "../assets/testimonial_1.jpg"
import testimonial_2 from "../assets/testimonial_2.png"
import testimonial_3 from "../assets/testimonial_3.jpg"
import { FaStar } from 'react-icons/fa';


function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: "Emma Rodriguez",
            address: "Barcelona, Spain",
            image: testimonial_1,
            rating: 5,
            review: "I’ve tried different hotel apps, but none matched the personal touch and attention to detail this service offers. Their handpicked hotel list is truly exceptional."
        },
        {
            id: 2,
            name: "Liam Johnson",
            address: "New York, USA",
            image: testimonial_2,
            rating: 4,
            review: "Everything went beyond my expectations. Booking was smooth, and the quality of the hotels was outstanding. Definitely recommending it!"
        },
        {
            id: 3,
            name: "Sophia Lee",
            address: "Seoul, South Korea",
            image: testimonial_3,
            rating: 5,
            review: "Fast and easy reservations, great customer service, and beautiful hotel choices. Will book again for sure!"
        }
    ];
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 text-center">

                <h2 className='text-3xl font-bold text-[#e89755]'>What Our Guests Say</h2>
                <p className='text-gray-600 mb-10 max-w-2xl mx-auto'>Real experiences from real travelers. Discover why people love booking with us.
                </p>

                <div className='grid md:grid-cols-3 gap-6'>
                    {testimonials.map((testimonial, index) => (
                        <div className="bg-white rounded-xl shadow-md p-6 text-left hover:shadow-lg transition"
                            key={index}>
                            <div className='flex items-center gap-4 mb-4'>
                                <img className='w-14 h-14 rounded-full object-cover' src={testimonial.image} />
                                <div>
                                    <h4 className='text-md  text-[#e89755]'>{testimonial.name}</h4>
                                    <p className='text-gray-500'>{testimonial.address}</p>
                                </div>
                            </div>
                            <div className="flex items-center text-yellow-400 mb-2">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>
                            <p className="text-gray-600 text-sm ">"{testimonial.review}"</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Testimonials