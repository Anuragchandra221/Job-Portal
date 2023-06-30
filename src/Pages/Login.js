import React, { useContext, useEffect, useState } from 'react'
import "./Css/Login.css"
import Header from '../Components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { get_data, login, set_data } from '../Utils/services'
import { loginContext } from '../App'
import jwt_decode from "jwt-decode";

function Login() {
  const [email, setEmail] = useState()
  const [user, setUser] = useContext(loginContext)
  const [password, setPassword] = useState()
  const navigate = useNavigate()
  const loginuser = ()=>{
    if(email && password){
      login(email, password).then((results)=>{
        console.log(jwt_decode(results.data.token))
        setUser(jwt_decode(results.data.token))
        set_data(results.data.token)
        navigate('/dashboard')
      }).catch((err)=>{
        console.log(err.message)
      })
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
      <div className='row login'>
          <div className='col-md-6 d-flex flex-column align-items-end justify-content-center'>
            <div className='mx-auto' style={{width: 'fit-content'}}>
              <h2 className='mb-4'>Login</h2>
              <input className='logininput mt-5 mb-4' onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Email..' />
              <input className='logininput mt-4 mb-4' onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Password..' />
              <button className='btn loginbtn mt-4 mb-2' onClick={loginuser}>Log in</button>
              <p>Don't have an account? <Link to="/sign-up">Sign Up</Link></p>
            </div>
          </div>
          <div className='col-md-6 justify-content-start'>
            <img className='loginimg' src={require('../assets/logimg.png')} />
          </div>
      </div>
    </div>
  )
}

export default Login