import React, { useEffect, useState } from 'react'
import './Css/Filter.css'

function Filter() {
    const [show, setShow] = useState(false)
    useEffect(()=>{
        if(window.innerWidth>992){
            setShow(true)
        }else{
            setShow(false)
        }
    },[])
  return (
    <>
        <div className='text-center  mt-lg-0 mb-2 mb-lg-0'>
            <button className='filterbtn mx-auto' onClick={()=>setShow((prev)=>!prev)}>Filters</button>
        </div>
        {show?
        <div className='d-flex filter px-3' >
            
            <div className='d-flex flex-column' style={{width: 'fit-content'}}>
                <p style={{width: 'fit-content'}}>Working Schedule</p>
                <div>
                    <input style={{width: 'fit-content'}} type='checkbox' value="Full-time" /> <label>Full-time</label>
                </div>
                <div>
                    <input style={{width: 'fit-content'}} type='checkbox' value="Part-time" /> <label>Part-time</label>
                </div>
                <div>
                    <input style={{width: 'fit-content'}} type='checkbox' value="Internship" /> <label>Internship</label>
                </div>
                <div>
                    <input style={{width: 'fit-content'}} type='checkbox' value="Project" /> <label>Project</label>
                </div>
            </div>
            <div className='d-flex flex-column' style={{width: 'fit-content'}}>
                <p style={{width: 'fit-content'}}>Employement Type</p>
                <div>
                    <input style={{width: 'fit-content'}} type='checkbox' value="Full-time" /> <label>Onsite</label>
                </div>
                <div>
                    <input style={{width: 'fit-content'}} type='checkbox' value="Part-time" /> <label>Shift Work</label>
                </div>
                <div>
                    <input style={{width: 'fit-content'}} type='checkbox' value="Internship" /> <label>Remote</label>
                </div>
            </div>
            <div className='d-flex flex-column' style={{width: 'fit-content'}}>
                <p style={{width: 'fit-content'}}>Salary Range</p>
                <div>
                    <input style={{width: 'fit-content'}} type='checkbox' value="Full-time" /> <label>20K-30K</label>
                </div>
                <div>
                    <input style={{width: 'fit-content'}} type='checkbox' value="Part-time" /> <label>30K-50K</label>
                </div>
                <div>
                    <input style={{width: 'fit-content'}} type='checkbox' value="Internship" /> <label>50K-70K</label>
                </div>
                <div>
                    <input style={{width: 'fit-content'}} type='checkbox' value="Project" /> <label>Above 70K</label>
                </div>
            </div>
        </div>
        :<></>}
    </>
  )
}

export default Filter