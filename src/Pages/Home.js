import React from 'react'
import Footer from '../Components/Footer'
import Recommended from '../Components/Recommended'

function Home() {
  return (
    <div>
      <Footer/>
      <div className='d-flex'>
      <Recommended/>
      <Recommended/>
      </div>
    </div>
  )
}

export default Home