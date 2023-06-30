import React, { useState } from 'react'
import './Css/Application.css'
import { apply_job } from '../Utils/services'

function Application(props) {
    const [name, setName] = useState()
    const [qualification, setQualification] = useState('BE/BTech')
    const [yoe, setYoe] = useState()
    const apply = ()=>{
        if(name && qualification && yoe){
            apply_job(props.data.title, props.data.description, name, qualification, yoe).then((results)=>{
                if(results.status===200){
                    props.setShow(false)
                }
            }).catch((err)=>{
                console.log(err.message)
            })
        }
    }
  return (
    <div className='application px-5 py-3'>
        <img className='closebtn' onClick={()=>props.setShow(false)} src={require('../assets/close.png')} />
        <p className=' bold'>{props.data.company}</p>
        <div className='d-flex align-items-center justify-content-between'>
            <div>
                <h4>
                    {props.data.title}
                </h4>
            </div>
            <div>
                <img src={require('../assets/google.png')}/>
            </div>
        </div>
        
        <div className='d-flex bottomDiv1 mx-auto mt-3 py-2'>
            <div>
                <span className='bold'> {props.data.salary}/Month </span><br/>
                {props.data.location}
            </div>
            <div className=''> 
                <button className='btn btnA mr-2'>Full-time</button>
                <button className='btn btnA'>On-site</button>
            </div>
        </div>
        <div>
            <h4>Description</h4>
            <p>{props.data.description}</p>
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