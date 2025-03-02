import React from 'react'
import { Link } from 'react-router-dom'
import "../css/Navbar.css"
const NavBar = () => {
  return (
   <div className="navbar">
    <div className="navbar-brand">
        <Link path='/'>TMDB</Link>
    </div>
    <div className="navbar-links">
    <Link path='/' className='nav-link'>Home</Link>
    <Link path='/favorites' className='nav-link'>Favorites</Link>
    </div>
   </div>
  )
}

export default NavBar
