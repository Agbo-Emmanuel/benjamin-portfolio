import React from 'react'
import './components.Css/header.css'
import header_logo from '../assets/logo.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";


const Header = () => {

  const navigate = useNavigate()

  return (
    <>
      <div className='header_body'>
        <div className='header_logo_container' onClick={()=> navigate("/")}>
          <img src={header_logo} alt='logo'/>
          <p>Benjamin</p>
      </div>
        <div className='header_nav_container'>
          <NavLink to='/projects' className={({ isActive })=> isActive ? "nav_active" : "nav_notactive"}>My Projects</NavLink>
          <NavLink to='/services' className={({ isActive })=> isActive ? "nav_active" : "nav_notactive"}>Services</NavLink>
          <a href='https://wa.me/2349072146168' target='_blank' className='header_icon'><FaWhatsapp/></a>
          <a href='https://github.com/Benjiggy' target='_blank' className='header_icon'><FaGithub/></a>
          <a href='https://twitter.com/@Darkseid843276' target='_blank' className='header_icon'><FaXTwitter/></a>
          <a href='https://www.instagram.com/ken.tashi/#' target='_blank' className='header_icon'><FaInstagram/></a>
        </div>
      </div>
    </>
  )
}

export default Header