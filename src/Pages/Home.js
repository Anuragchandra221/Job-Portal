import React from 'react'
import Footer from '../Components/Footer'
import Recommended from '../Components/Recommended'
import Application from '../Components/Application'

function Home() {
  return (
    <div>
      <Footer/>
      <div className='d-flex'>
      <Recommended/>
      <Recommended/>
      </div>
      <Application/>
    </div>
  )
}

export default Home