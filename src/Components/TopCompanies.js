import React from 'react'

function TopCompanies() {
  return (
    <div>
        <h2 className='text-center my-4 mb-4'>Top Componies Hiring Right Now</h2>
        <div className='mx-5 mt-5 text-center'>
            <img style={{height: '3em', width: 'auto'}} className='mr-4 mr-lg-5 my-2'  src={require('../assets/googlec.png')} />
            <img style={{height: '3em', width: 'auto'}} className='mr-4 mr-lg-5 ml-lg-4 my-2'  src={require('../assets/amazonc.png')} />
            <img style={{height: '3em', width: 'auto'}} className='mr-4 mr-lg-5 ml-lg-4 my-2'  src={require('../assets/paytmc.png')} />
            <img style={{height: '3em', width: 'auto'}} className='mr-4 mr-lg-5 ml-lg-4 my-2'  src={require('../assets/airbnbc.png')} />
            <img style={{height: '3em', width: 'auto'}} className='ml-lg-4' src={require('../assets/lgc.png')} />
        </div>
    </div>
  )
}

export default TopCompanies