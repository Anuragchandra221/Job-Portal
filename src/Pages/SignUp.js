import React, { useEffect, useState } from 'react'
import './Css/SignUp.css'
import Header from '../Components/Header'
import { Link, useNavigate } from 'react-router-dom/dist'
import { get_data, sign_upc, sign_upe } from '../Utils/services'

function SignUp() {
  const [company, setCompany] = useState(false)
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [address, setAddress] = useState()
  const [err, setErr] = useState()
  const navigate = useNavigate()
  const signupuser = ()=>{
    if(company===true){
      if(name && email && password && address){
        sign_upc(name, email, password, true, address).then((results)=>{
          if(results.data.err){
              console.log('error')
              setErr('User Already Exists')
          }else{
            navigate('/login')
          }
        }).catch((err)=>{

        })
      }
    }else{
      if(name && email && password){
        sign_upe(name, email, password, false).then((results)=>{
          if(results.data.err){
            setErr('User Already Exists')
          }else{
              navigate('/login')
          }
        })
      }
    }
  }
  useEffect(()=>{
    if(get_data()){
      navigate('/dashboard')
    }else{
        
    }
  },[])
  return (
    <div>
      <Header/>
      <div className='row mt-5'>
          <div className='col-md-6 d-flex signfirstdiv'>
            {company?<img className='signimg' src={require('../assets/signcomp.png')} />
            :

            <img className='signimg' src={require('../assets/signemp.png')} />
            }
          </div>
          <div className='col-md-6 d-flex flex-column justify-content-center align-items-center'>
            <div className='mb-4'><button className={company?'btn btnsign':'btn btnsign actives'} onClick={()=>setCompany(false)} >Employee</button><button onClick={()=>setCompany(true)} className={!company?'btn btnsign':'btn btnsign actives'}>Company</button></div>
            <h2 className='signuptext'>Sign Up</h2>
            {company?<p className='mb-5'>as a company to post jobs</p>:<p className='mb-5'>as an employee to seek jobs</p>}
            <input className='signinput mb-4' onChange={(e)=>setName(e.target.value)} type='text' placeholder='Name'/>
            <input className='signinput mb-4' onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Email'/>
            <input className='signinput mb-4' onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Password'/>
            {company?<input className='signinput mb-4' onChange={(e)=>setAddress(e.target.value)} type='text' placeholder='Headquarters'/>:<></>}
            <button className='btn mt-4 signupbtn mb-2' onClick={signupuser}>Sign Up</button>
            {err?<p style={{color: 'red'}}>{err}</p>:''}
            <p>Already have an account? <Link to="/login">Log In</Link></p>
          </div>
      </div>
    </div>
  )
}

export default SignUp