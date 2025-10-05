import React from 'react'
import Header from './component/Header'
import MetroAnimation from './component/Lottie'
import Navbar from './component/Navbar'
import Hero from './component/Hero'

const page = () => {
  return (
    <div>
      <Header/>
      {/* <MetroAnimation/> */}
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default page