import React, { useContext, useEffect, useState } from 'react'
import Header from '../Components/Header'
import './Css/Job.css'
import Filter from '../Components/Filter'
import { get_data, latest_jobs } from '../Utils/services'
import Recommended from '../Components/Recommended'
import Footer2 from '../Components/Footer2'
import Postjob from '../Components/Postjob'
import { loginContext } from '../App'
import jwt_decode from "jwt-decode"; 
import Application from '../Components/Application'

function Jobs() {

  const [company, setCompany] = useState(false)
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
    <div className='jobs'>
      <Header/>
      <div className='text-center mt-4'>
        <button className={company===false?"jobbtn active mr-2":"jobbtn mr-2"} onClick={()=>setCompany(false)}>Seek a Job</button>{user?user.company?<button onClick={()=>setCompany(true)} className={company===true?"jobbtn active ml-2":"jobbtn ml-2"}>Post a Job</button>:<></>:<></>}
      </div>
      {!company?
      <div className='px-2 px-lg-5 mt-3 mt-lg-5 d-flex jobseek mb-4'>
        <Filter/>
        {jobs?
        <div className='px-lg-4'>
          <p className='newjobheading'>New Jobs</p>
          <div className='d-flex  newjobs2'>
            {console.log(jobs[0])}
            {jobs.map((job,i)=>{
              return <Recommended title={job.title} location={job.location} setShow={setShow} setData={setData} company={job.company.name} description={job.description} salary={job.salary}/>
            })}
          </div>
        </div>
        :<></>}
        {show && user?<Application setShow={setShow} data={data}/>:<></>}
      </div>
      :
      <div>
        
        <Postjob/>
      </div>
      }
      <Footer2/>
    </div>
  )
}

export default Jobs