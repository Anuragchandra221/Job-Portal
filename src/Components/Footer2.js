import React from 'react'
import './Css/Footer2.css'

function Footer2() {
  return (
    <div className='footer2 d-flex flex-column align-items-center pt-3 mt-auto'>
        <p className='mainFooter mb-0'>Explore More Job opportunities</p>
        <p>Login/Signup to see the complete result</p>
        <div className='mt-3 mb-4'>
            <button className='mr-3 footerbtn'>Login</button>
            <button className='footerbtn'>Sign Up</button>
        </div>
        <p className='main-heading d-flex  align-items-center mb-2 mt-4'>JOBIFY <img className='vector ml-2' src={require('../assets/Vector.png')} /></p>
    </div>
  )
}

export default Footer2