import React, { useContext, useEffect, useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { get_applications, get_data, get_jobs, latest_jobs } from '../Utils/services'
import './Css/Dashboard.css'
import Recommended from '../Components/Recommended'
import { useNavigate } from 'react-router-dom'
import jwt_decode from "jwt-decode"; 
import { loginContext } from '../App'
import Application from '../Components/Application'

function Dashboard() {
    const [jobs, setJobs] = useState()
    const navigate = useNavigate()
    const [user, setUser] = useContext(loginContext)
    const [applications, setApplications] = useState()
    const [show, setShow] = useState(false)
    const [data, setData] = useState()
    const [jobsPosted, setJobsPosted] = useState()
  useEffect(()=>{
    if(get_data()){
        setUser(jwt_decode(get_data()))
        latest_jobs().then((results)=>{
          setJobs(results.data)
        }).catch((err)=>{
          console.log(err.message)
        })
        if(jwt_decode(get_data()).company){
          get_jobs().then().then((results)=>{
            console.log(results.data)
            if(results.status===200){
              setJobsPosted(results.data)
            }
          })
        }else{
          get_applications().then((results)=>{
            if(results.status===200){
              setApplications(results.data)
            }
          }).catch((err)=>{
  
          })
        }
    }else{
        navigate('/')
    }
  },[])
  return (
    <div>
        <Header/>
        <div className='row p-3 p-lg-5 ml-lg-5'>
            <div className='col-lg-8 d-flex flex-column align-items-start'>
                <p className='mb-0'>Welcome Back !!</p>
                <p className='accountName'>{user?user.name:''}</p>

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
            return <Recommended title={job.title} setShow={setShow} setData={setData} location={job.location} company={job.company.name} salary={job.salary}/>
          })}
        </div>
        </div>
        :<></>}
        {show?<Application setShow={setShow} data={data}/>:<></>}

        {user?user.company===false?
        applications?
        <div className='p-3 p-lg-5 ml-lg-5'>
        <h2 >My Applications</h2>
        <div className='d-flex newjobs'>
          {applications.applications.map((application,i)=>{
            return <Recommended  title={application.applying_for.title} setShow={setShow} setData={setData} location={application.applying_for.location} company={application.applying_for.company.name} salary={application.applying_for.salary}/>
          })}
        </div>
        </div>
        :<></>:
        jobsPosted?
        <div className='p-3 p-lg-5 ml-lg-5'>
        <h2 >My Jobs</h2>
        <div className='d-flex newjobs'>
          {jobsPosted.jobs_posted.map((job,i)=>{
            return <Recommended  title={job.title} setShow={setShow} setData={setData} location={job.location} company={job.company.name} salary={job.salary}/>
          })}
        </div>
        </div>
        :<></>
        :<></>}

        <Footer/>
    </div>
  )
}

export default Dashboard