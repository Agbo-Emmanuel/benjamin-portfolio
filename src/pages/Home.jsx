import React from 'react'
import './pagesCss/home.css'
import hero_image from '../assets/hero_image.png'
import { MdOutlineFileDownload } from "react-icons/md";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import { motion, stagger } from "framer-motion";
// import { MdOutlineFileDownload } from "react-icons/md";
// import { BsArrowRightCircleFill } from "react-icons/bs";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithubSquare } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";

const Home = () => {

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
      <main className='home_body'>
        <section className='hero_section'>
          <motion.div 
            initial={{
              opacity: 0,
              x: -100,
            }}
            transition={{
              type: "spring",
              stiffness: 30,
              mass: 1.5,
            }}
            // animate={{ opacity: 1, y: 0 }}
            whileInView={{
              opacity: 1,
              x: 0,
              //   delay: stagger(0.05),
            }}
            viewport={{ margin: "-40px", once: "true" }}
            className='hero_text_section'>
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
              <button onClick={downloadResume}><p>Download Resume</p><MdOutlineFileDownload size={20} color='#fff'/></button>
              <button onClick={()=>navigate("/projects")}><p>See My Projects</p></button>
            </div>
          </motion.div>
          <motion.div 
            initial={{
              opacity: 0,
              x: 100,
            }}
            transition={{
              type: "spring",
              stiffness: 30,
              mass: 1.5,
            }}
            // animate={{ opacity: 1, y: 0 }}
            whileInView={{
              opacity: 1,
              x: 0,
              //   delay: stagger(0.05),
            }}
            viewport={{ margin: "-40px", once: "true" }}
            className='hero_image_section'>
            <img src={hero_image} alt='image'/>
          </motion.div>
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
            <div className='service_section_top_button mobileShow' onClick={()=>navigate("/services")}>
              <BsArrowRightCircleFill size={28} color='rgba(44, 44, 148, 0.963)'/>
              <p>View All Services</p>
            </div>
          </article>
        </section>
        <section className='tech_skill_section'>
          <article className='tech_skill_text_container'>
            <h3>My Tech Skills</h3>
            <p>Explore My Programming Skills</p>
          </article>
          <article className='tech_skill_items_container'>
            <div className='tech_skill'>
              <FaHtml5 color='#fff' size={100}/>
              <p>Html</p>
            </div>
            <div className='tech_skill'>
              <FaCss3Alt color='#fff' size={100}/>
              <p>Css</p>
            </div>
            <div className='tech_skill'>
              <IoLogoJavascript color='#fff' size={100}/>
              <p>Javascript</p>
            </div>
            <div className='tech_skill'>
              <FaGitAlt color='#fff' size={100}/>
              <p>Git</p>
            </div>
            <div className='tech_skill'>
              <FaGithubSquare color='#fff' size={100}/>
              <p>Github</p>
            </div>
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
            <ProjectCard limit={3}/>
            <div className='project_section_top_button mobileShow' onClick={()=>navigate("/projects")}>
              <BsArrowRightCircleFill size={28} color='rgba(44, 44, 148, 0.963)'/>
              <p>View All Projects</p>
            </div>
          </article>
        </section>
        <section className='contact_section'>
          <motion.article 
            initial={{
              opacity: 0,
              y: 100,
            }}
            transition={{
                type: "spring",
                stiffness: 30,
                mass: 1.5,
            }}
            // animate={{ opacity: 1, y: 0 }}
            whileInView={{
                opacity: 1,
                y: 0,
                //   delay: stagger(0.05),
            }}
            viewport={{ margin: "-40px", once: "true" }}
            className='contact_section_text_container'>
            <h1>Let's <span>Connect</span> & <span>Collaborate</span></h1>
            <p>If you're looking to hire or collaborate on exciting projects, feel free to send me a message!</p>
          </motion.article>
          <motion.article 
            initial={{
              opacity: 0,
              y: 100,
            }}
            transition={{
                type: "spring",
                stiffness: 30,
                mass: 1.5,
            }}
            // animate={{ opacity: 1, y: 0 }}
            whileInView={{
                opacity: 1,
                y: 0,
                //   delay: stagger(0.05),
            }}
            viewport={{ margin: "-40px", once: "true" }}
            className='contact_section_input_container'>
            <input
              type='text'
              placeholder='Full name/Company Name'
            />
            <input
              type='email'
              placeholder='Email'
            />
            <textarea
              type='text'
              placeholder='Message'
            />
            <div className='contact_section_input_container_button'>
              <BsArrowRightCircleFill size={28} color='rgba(44, 44, 148, 0.963)'/>
              <p>Send message</p>
            </div>
          </motion.article>
        </section>
      </main>
    </>
  )
}

export default Home
