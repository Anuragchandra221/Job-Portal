import React, { useContext, useEffect, useState } from 'react'
import Footer from '../Components/Footer'
import Recommended from '../Components/Recommended'

import Header from '../Components/Header'
import './Css/Home.css'
import TopCompanies from '../Components/TopCompanies'
import Feedback from '../Components/Feedback'
import { get_data, latest_jobs } from '../Utils/services'
import Application from '../Components/Application'
import { loginContext } from '../App'
import jwt_decode from "jwt-decode";


function Home() {
  const [jobs, setJobs] = useState()
  const [user, setUser] = useContext(loginContext)
  const [show, setShow] = useState(false)
    const [data, setData] = useState()
  useEffect(()=>{
    if(get_data()){
      setUser(jwt_decode(get_data()))
    }
    latest_jobs().then((results)=>{
      setJobs(results.data)
    }).catch((err)=>{
      console.log(err.message)
    })
  },[])
  return (
    <div>
      <Header/>
      <div className='row p-5'>
          <div className='col-md-6 d-flex flex-column justify-content-center align-items-end'>
            <div style={{width: 'fit-content'}}>
              <p className='success'>Your Success Starts Here.</p>
              <p className='bigText'>Unleash Your <br/> Professional Potential!</p>
              <button className='btnL' style={{width: 'fit-content'}}>Get Started</button>
            </div>
          </div>
          <div className='col-md-6 d-flex justify-content-center'>
              <img style={{width: '70%', height: 'auto'}} src={require('../assets/Hiring-rafiki 2.png')} />
          </div>
      </div>
      <div className='d-flex justify-content-center mx-2 mx-lg-0 mb-4 mb-lg-1'>
        <input type='text' className='searchBox' placeholder='Search' />
        <button className='searchBtn ml-2'><i class="fa-solid fa-magnifying-glass"></i></button>
      </div>
      
        {jobs?
        <div className='p-3 p-lg-5 ml-lg-5'>
        <h2 >New Jobs</h2>
        <div className='d-flex newjobs'>
          {console.log(jobs[0])}
          {jobs.map((job,i)=>{
            return <Recommended title={job.title} setShow={setShow} setData={setData} location={job.location} company={job.company.name} salary={job.salary}/>
          })}
        </div>
        </div>
        :<></>}
        {show && user?<Application setShow={setShow} data={data}/>:<></>}
        
      
      <TopCompanies/>
      <div className='mt-4'>
        <Feedback/>
      </div>
      <h1 className='footerHeading text-center my-5'>It's Now <span>Simpler</span> Than Ever <br/> To <span>Find A Job</span> </h1>
      <Footer/>
    </div>
  )
}

export default Home