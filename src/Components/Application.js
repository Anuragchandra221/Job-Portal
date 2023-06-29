import React, { useState } from 'react'
import './Css/Application.css'

function Application() {
    const [name, setName] = useState()
    const [qualification, setQualification] = useState('BE/BTech')
    const [yoe, setYoe] = useState()
    const apply = ()=>{
        console.log(name, qualification, yoe)
    }
  return (
    <div className='application px-5 py-3 mx-auto'>
        <img className='closebtn' src={require('../assets/close.png')} />
        <p className=' bold'>Google</p>
        <div className='d-flex align-items-center justify-content-between'>
            <div>
                <h4>
                    Junior UI/UX Designer
                </h4>
            </div>
            <div>
                <img src={require('../assets/google.png')}/>
            </div>
        </div>
        
        <div className='d-flex bottomDiv1 mx-auto mt-3 py-2'>
            <div>
                <span className='bold'> 52K/Month </span><br/>
                Banglore, India
            </div>
            <div className=''> 
                <button className='btn btnA mr-2'>Full-time</button>
                <button className='btn btnA'>On-site</button>
            </div>
        </div>
        <div>
            <h4>Description</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
        <div>
            <label htmlFor="name">Name </label><br/>
            <input type='text' id="name" onChange={(e)=>setName(e.target.value)} placeholder='Name' />
        </div>
        <div className='mt-3'>
            <label htmlFor="qualification">Qualification </label><br/>
            <select name="cars" defaultValue={'BE/BTech'} onChange={(e)=>setQualification(e.target.value)} id="qualification">
                <option value="BE/BTech">BE/BTech</option>
                <option value="Degree">Degree</option>
                <option value="PG">PG</option>
            </select>
        </div>
        <div className='mt-3'>
            <label htmlFor="yoe">Years Of Experience </label><br/>
            <input type='number' onChange={(e)=>setYoe(e.target.value)} id="yoe" placeholder='Years of Experience' />
        </div>
        <button className='btn btnApply mt-3' onClick={apply} >Apply</button>
    </div>
  )
}

export default Application