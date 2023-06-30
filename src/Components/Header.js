import React from 'react'
import './Css/Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarTogglerDemo01">
            <a class="navbar-brand main-heading" style={{fontSize: '24px'}}>JOBIFY <img className='vector ml-2' src={require('../assets/Vector.png')} /></a>
            <ul class="navbar-nav  mt-2 mt-lg-0">
            <li class="nav-item active">
                <Link to='/jobs'><a class="nav-link" style={{fontSize: '20px'}} href="#">Jobs <span class="sr-only">(current)</span></a></Link>
            </li>
            <li class="nav-item">
                <a class="nav-link" style={{fontSize: '20px'}} href="#">About</a>
            </li>
            </ul>
            <button class="btn btnL my-2 my-sm-0" type="submit">Login</button>
        </div>
    </nav>
  )
}

export default Header