import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { latest_jobs } from '../Utils/services'
import './Css/Dashboard.css'
import Recommended from '../Components/Recommended'

function Dashboard() {
    const [jobs, setJobs] = useState()
  useEffect(()=>{
    latest_jobs().then((results)=>{
      setJobs(results.data)
    }).catch((err)=>{
      console.log(err.message)
    })
  },[])
  return (
    <div>
        <Header/>
        <div className='row p-3 p-lg-5 ml-lg-5'>
            <div className='col-lg-8 d-flex flex-column align-items-start'>
                <p className='mb-0'>Welcome Back !!</p>
                <p className='accountName'>Anurag Chandra</p>

                <div className='d-flex mx-2 mx-lg-0 mb-4 mb-lg-1' style={{width: '100%'}}>
                    <input type='text' className='searchBox' placeholder='Search' />
                    <button className='searchBtn ml-2'><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>
            <div className='col-lg-4 d-flex flex-column align-items-center'>
                <div className='d-flex'>
                    <div className='dashdiv mr-3'><i class="fa-regular fa-comments mr-1"></i> Chat</div>
                    <div className='dashdiv '><i class="fa-sharp fa-regular fa-newspaper mr-1"></i> News</div>
                </div>
                <div className='d-flex'>
                    <div className='dashdiv mr-3 mt-3'><i class="fa-sharp fa-solid fa-file"></i> Resume</div>
                    <div className='dashdiv mt-3'><i class="fa-solid fa-gear"></i></div>
                </div>
                <div className='d-flex'>
                    <div className='dashdiv mr-3 mt-3'><i class="fa-solid fa-clock-rotate-left mr-1"></i> History</div>
                    <div className='dashdiv mt-3'><i class="fa-solid fa-bell mr-1"></i> Alerts</div>
                </div>
            </div>
        </div>

        {jobs?
        <div className='p-3 p-lg-5 ml-lg-5'>
        <h2 >New Jobs</h2>
        <div className='d-flex newjobs'>
          {console.log(jobs[0])}
          {jobs.map((job,i)=>{
            return <Recommended title={job.title} location={job.location} company={job.company.name} salary={job.salary}/>
          })}
        </div>
        </div>
        :<></>}

        <Footer/>
    </div>
  )
}

export default Dashboard