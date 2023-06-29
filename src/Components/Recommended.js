import React from 'react'
import './Css/Recommended.css'

function Recommended() {
  return (
    <div className='recomended'>
        <p className='col-12 bold'>Google</p>
        <div className='d-flex align-items-center'>
            <div className='col-8'>
                <p className='job-title'>
                    Junior UI/UX Designer
                </p>
            </div>
            <div className='col-4'>
                <img src={require('../assets/google.png')}/>
            </div>
        </div>
        <div className='col-12 mt-2'> 
            <button className='btn btnR mr-2'>Full-time</button>
            <button className='btn btnR'>On-site</button>
        </div>
        <div className='col-12 d-flex bottomDiv mx-auto mt-3 py-2'>
            <div>
                <span className='bold'> 52K/Month </span><br/>
                Banglore, India
            </div>
            <div>
                <button>Details</button>
            </div>
        </div>
    </div>
  )
}

export default Recommended