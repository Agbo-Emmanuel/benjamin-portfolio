import React from 'react'
import './pagesCss/home.css'
import hero_image from '../assets/hero_image.png'
import { MdOutlineFileDownload } from "react-icons/md";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';

const Home = () => {

  const navigate = useNavigate()

  return (
    <>
      <main className='home_body'>
        <section className='hero_section'>
          <div className='hero_text_section'>
            <p>Welcome to my site</p>
            <h1>Hi, I'm Benjamin, a <span>Backend</span>,<span>Full-stack</span> and <span>Mobile developer</span></h1>
            <p>
              I am a Dedicated Computer Engineer and I.T Support with 6years of experience in software 
              development, system integration, and hardware design. Proficient in various programming languages, 
              including Java, JavaScript, Python, HTML and CSS. Strong analytical and problem-solving skills, 
              with a proven track record in delivering innovative solutions and improvements to 
              complex technical projects.
            </p>
            <div className='hero_button_container'>
              <button><p>Download Resume</p><MdOutlineFileDownload size={20} color='#fff'/></button>
              <button><p>See My Projects</p></button>
            </div>
          </div>
          <div className='hero_image_section'>
            <img src={hero_image} alt='image'/>
          </div>
        </section>
        <section className='service_section'>
          <article className='service_section_top'>
            <div className='service_section_top_text'>
              <p>- Services</p>
              <h3>My <span>Services</span></h3>
            </div>
            <div className='service_section_top_button' onClick={()=>navigate("/services")}>
              <BsArrowRightCircleFill size={28} color='rgba(44, 44, 148, 0.963)'/>
              <p>View All Services</p>
            </div>
          </article>
          <article className='service_section_bottom'>
            <ServiceCard limit={3}/>
          </article>
        </section>
        <section className='project_section'>
          <article className='project_section_top'>
            <div className='project_section_top_text'>
              <p>- Projects</p>
              <h3>My <span>Projects</span></h3>
            </div>
            <div className='project_section_top_button' onClick={()=>navigate("/projects")}>
              <BsArrowRightCircleFill size={28} color='rgba(44, 44, 148, 0.963)'/>
              <p>View All Projects</p>
            </div>
          </article>
          <article className='project_section_bottom'>
            <ProjectCard/>
          </article>
        </section>
      </main>
    </>
  )
}

export default Home
