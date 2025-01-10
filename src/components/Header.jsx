import React from 'react'
import './components.Css/header.css'
import header_logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <div className='header_body'>
            <div className='header_logo_container'>
                <img src={header_logo} alt='logo'/>
                <p>Benjamin</p>
            </div>
            <div className='header_nav_container'>
                <NavLink to='/projects' className={({ isActive })=> isActive ? "nav_active" : "nav_notactive"}>My Projects</NavLink>
                <NavLink to='/contact-me' className={({ isActive })=> isActive ? "nav_active" : "nav_notactive"}>Contact Me</NavLink>
            </div>
        </div>
    </>
  )
}

export default Header
