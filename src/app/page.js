import React from 'react'
import Header from './component/Header'
import MetroAnimation from './component/Lottie'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Service from './component/Service'
import LatestWorks from './component/LatestWorks'
import Choose from './component/Choose'
import TestimonialSection from './component/Testimonial'

const page = () => {
  return (
    <div>
      <Header/>
      {/* <MetroAnimation/> */}
      <Navbar/>
      <Hero/>
      <Service/>
      <LatestWorks/>
      <Choose/>
      <TestimonialSection/>
    </div>
  )
}

export default page