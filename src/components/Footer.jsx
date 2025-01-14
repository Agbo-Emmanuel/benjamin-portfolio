import React from 'react'
import './components.Css/footer.css'
import { MdOutlineFileDownload } from "react-icons/md";
import header_logo from '../assets/logo.png'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

const Footer = () => {

    const navigate = useNavigate()

    function downloadResume(){
        const fileUrl = '../../public/benjaminResume.pdf';
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'benjamin-resume.pdf';
        link.click();
    }

  return (
    <>
        <div className='footer_body'>
            <div className='footer_top'>
                <h1>Want to <span>Learn</span> More <span>About Me?</span></h1>
                <button onClick={downloadResume}>
                    <p>Download Resume</p>
                    <MdOutlineFileDownload size={20} color='#fff'/>
                </button>
            </div>
            <div className='footer_bottom'>
                <div className='footer_description_container'>
                    <div className='footer_logo_container' onClick={()=>navigate("/")}>
                        <img src={header_logo} alt='logo'/>
                        <p>Benjamin</p>
                    </div>
                    <div className='footer_social_link_container'>
                        <a href='https://github.com/Benjiggy' target='_blank'><FaGithub/></a>
                        <a href='https://twitter.com/@Darkseid843276' target='_blank'><FaXTwitter/></a>
                        <a href='https://www.instagram.com/ken.tashi/#' target='_blank'><FaInstagram/></a>
                    </div>
                </div>
                <div className='footer_navigation_container'>
                    <h3>Navigation</h3>
                    <p onClick={()=>navigate("/")}>Home</p>
                    <p onClick={()=>navigate("/services")}>Services</p>
                    <p onClick={()=>navigate("/contact")}>Contact me</p>
                    <p onClick={()=>navigate("/projects")}>Projects</p>
                </div>
                <div className='footer_navigation_container'>
                    <h3>Contact</h3>
                    <span><FaWhatsapp/>+234 9072 1461 68</span>
                    <span><FaPhoneAlt/>090 721 4616 8</span>
                    <span><MdMailOutline/>benjiwezzy@gmail.com</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer
