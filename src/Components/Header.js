import React, { useContext, useEffect } from 'react'
import './Css/Header.css'
import { Link, useNavigate } from 'react-router-dom'
import { loginContext } from '../App'
import { get_data, remove_data } from '../Utils/services'
import jwt_decode from 'jwt-decode'

function Header() {
    const [user,setUser] = useContext(loginContext)
    const navigate = useNavigate()
    useEffect(()=>{
        if(get_data()){
            setUser(jwt_decode(get_data()))
        }
    },[])
    const logoutuser = ()=>{
        remove_data()
        navigate('/login')
    }
  return (
    <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarTogglerDemo01">
            <a class="navbar-brand main-heading" style={{fontSize: '24px'}}>JOBIFY <img className='vector ml-2' src={require('../assets/Vector.png')} /></a>
            <ul class="navbar-nav  mt-2 mt-lg-0">
            <li class="nav-item mr-lg-3">
                <Link to='/'><a class="nav-link" style={{fontSize: '20px'}} href="#">Home <span class="sr-only">(current)</span></a></Link>
            </li>
            <li class="nav-item mr-lg-3">
                <Link to="/jobs"><a class="nav-link" style={{fontSize: '20px'}} href="#">Jobs</a></Link>
            </li>
            <li class="nav-item">
                <Link to="/dashboard"><a class="nav-link" style={{fontSize: '20px'}} href="#">Dashboard</a></Link>
            </li>
            </ul>
            {!user?
                <Link to="/login"><button class="btn btnL my-2 my-sm-0" type="submit">Login</button></Link>
            :
                <button class="btn btnL my-2 my-sm-0" onClick={logoutuser} type="submit">Logout</button>
            }
        </div>
    </nav>
  )
}

export default Header