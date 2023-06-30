import React, { useState } from 'react'
import './Css/Postjob.css'

function Postjob() {
    const [name, setName] = useState()
    const [description, setDescription] = useState('BE/BTech')
    const [salary, setSalary] = useState()
    const [due, setDue] = useState()
    const [location, setLocation] = useState()
    const apply = ()=>{
        console.log(name, description, salary)
    }
  return (
    <div className='postjob d-flex flex-column mx-auto'>
        <div className='postdiv mx-auto'>
            <div className='mt-4'>
                <label htmlFor="name">Title </label><br/>
                <input className='jobpostinput' type='text' id="name" onChange={(e)=>setName(e.target.value)} placeholder='Name' />
            </div>
            <div className='mt-5'>
                <label htmlFor="description">Description </label><br/>
                <textarea placeholder='Description' id="description" onChange={(e)=>setDescription(e.target.value)}></textarea>
            </div>
            <div className='mt-5'>
                <label htmlFor="salary">Salary </label><br/>
                <input className='jobpostinput' type='number' onChange={(e)=>setSalary(e.target.value)} id="salary" placeholder='Years of Experience' />
            </div>
            <div className='mt-5'>
                <label htmlFor="due">Deadline </label><br/>
                <input className='jobpostinput' type='datetime-local' onChange={(e)=>setDue(e.target.value)} id="due" placeholder='Years of Experience' />
            </div>
            <div className='mt-5'>
                <label htmlFor="location">Location </label><br/>
                <input className='jobpostinput' type='text' onChange={(e)=>setLocation(e.target.value)} id="location" placeholder='Years of Experience' />
            </div>
            <button className='btn btnPost mt-4 mb-5' onClick={apply} >Post</button>
        </div>
    </div>
  )
}

export default Postjob