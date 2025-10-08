import React from 'react'
import Hero from '../components/Hero'
import HotelCard from '../components/HotelCard'
import Offers from '../components/Offers'
import Testimonials from '../components/Testimonials'

function Home() {
    return (
        <>
            <Hero />
            <HotelCard />
            <Offers />
            <Testimonials />
        </>
    )
}

export default Home