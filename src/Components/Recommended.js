import React, { useState } from 'react'
import './Css/Recommended.css'
import Application from './Application'

function Recommended(props) {
  return (
    <div className='recomended'>
        <p className='col-12 bold'>{props.company}</p>
        <div className='d-flex align-items-center'>
            <div className='col-8'>
                <p className='job-title'>
                    {props.title}
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
                <span className='bold'> {props.salary}/Month </span><br/>
                {props.location}
            </div>
            <div>
                <button  onClick={props.setShow&&props.setData?()=>{
                    props.setShow(true)
                    props.setData()
                    props.setData({
                        "title":props.title,
                        "locations": props.location,
                        "company": props.company,
                        "salary": props.salary,
                        "description":props.description
                    })
                }:''}>Details</button>
            </div>
        </div>
       
    </div>
  )
}

export default Recommended