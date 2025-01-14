import React, { useEffect, useRef, useState } from 'react'
import './components.Css/header.css'
import header_logo from '../assets/logo.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";


const Header = () => {

  const navigate = useNavigate()
  const menuContainer = useRef(null)
  const [menuActive, setMenuActive] = useState(false)
  function operateMenu(){
    setMenuActive(!menuActive)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        if (menuContainer.current) {
          menuContainer.current.style.display = "flex";
        }
      } else {
        if (menuContainer.current) {
          menuContainer.current.style.display = "";
        }
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className='header_body'>
        <div className='header_logo_container' onClick={()=> navigate("/")}>
          <img src={header_logo} alt='logo'/>
          <p>Benjamin</p>
        </div>
        <div className='header_nav_container'>
          <NavLink to='/services' className={({ isActive })=> isActive ? "nav_active" : "nav_notactive"}>Services</NavLink>
          <NavLink to='/projects' className={({ isActive })=> isActive ? "nav_active" : "nav_notactive"}>My Projects</NavLink>
          <a href='https://wa.me/2349072146168' target='_blank' className='header_icon'><FaWhatsapp/></a>
          <a href='https://github.com/Benjiggy' target='_blank' className='header_icon'><FaGithub/></a>
          <a href='https://twitter.com/@Darkseid843276' target='_blank' className='header_icon'><FaXTwitter/></a>
          <a href='https://www.instagram.com/ken.tashi/#' target='_blank' className='header_icon'><FaInstagram/></a>
        </div>
        <div className='menu_icon_container' onClick={operateMenu}>
          {
            menuActive == true ?  <IoClose/> : <BiMenu/>
          }
        </div>
        <div ref={menuContainer} className={`menu_container ${menuActive == true ? "visible" : null}`}>
          <NavLink to='/' className="menu_links" onClick={()=>setMenuActive(false)}>Home</NavLink>
          <NavLink to='/projects' className="menu_links" onClick={()=>setMenuActive(false)}>My Projects</NavLink>
          <NavLink to='/services' className="menu_links" onClick={()=>setMenuActive(false)}>Services</NavLink>
          <div className='menu_social_icon_container'>
            <a href='https://wa.me/2349072146168' target='_blank' className="menu_links" onClick={()=>setMenuActive(false)}><FaWhatsapp/></a>
            <a href='https://github.com/Benjiggy' target='_blank' className="menu_links" onClick={()=>setMenuActive(false)}><FaGithub/></a>
            <a href='https://twitter.com/@Darkseid843276' target='_blank' className="menu_links" onClick={()=>setMenuActive(false)}><FaXTwitter/></a>
            <a href='https://www.instagram.com/ken.tashi/#' target='_blank' className="menu_links" onClick={()=>setMenuActive(false)}><FaInstagram/></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header