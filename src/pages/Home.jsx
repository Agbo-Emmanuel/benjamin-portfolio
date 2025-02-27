import React, { useState } from 'react'
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
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithubSquare, FaNode } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
// import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { TbBrandReactNative, TbSql } from "react-icons/tb"
import { SiMysql, SiAndroidstudio } from "react-icons/si";
import { FaFlutter, FaDartLang } from "react-icons/fa6";
import axios from 'axios';
import { toast } from 'react-toastify';

const Home = () => {

  const navigate = useNavigate()

  function downloadResume() {
    const fileUrl = '/benjaminResume.pdf'; // Accessing from the public folder
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'benjamin-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function sendMessage(){
    const url = "https://benjamin-portfolio-backend.onrender.com/api/v1/send-mail-to-admin"
    const body = {name:name, email:email, message:message}
    try {
      setLoading(true)
      const response = await axios.post(url,body)
      setLoading(false)
      console.log(response)
      setName("")
      setEmail("")
      setMessage("")
      toast.success(response.data.success)
      
    } catch (error) {
      setLoading(false)
      console.log(error)
      {
        error.message == "Network Error" ? toast.error("Network error: pls check your internet connection") : toast.error(error.response.data.error)
      }
    }
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
              <FaHtml5 className='tech_skill_icon'/>
              <p>Html</p>
            </div>
            <div className='tech_skill'>
              <FaCss3Alt className='tech_skill_icon'/>
              <p>Css</p>
            </div>
            <div className='tech_skill'>
              <IoLogoJavascript className='tech_skill_icon'/>
              <p>Javascript</p>
            </div>
            <div className='tech_skill'>
              <FaReact className='tech_skill_icon'/>
              <p>React</p>
            </div>
            <div className='tech_skill'>
              <FaGitAlt className='tech_skill_icon'/>
              <p>Git</p>
            </div>
            <div className='tech_skill'>
              <FaGithubSquare className='tech_skill_icon'/>
              <p>Github</p>
            </div>
            <div className='tech_skill'>
              <DiMongodb className='tech_skill_icon'/>
              <p>Mongodb</p>
            </div>
            <div className='tech_skill'>
              <FaNode className='tech_skill_icon'/>
              <p>Node.js</p>
            </div>
            <div className='tech_skill'>
              <TbBrandReactNative className='tech_skill_icon'/>
              <p>React Native</p>
            </div>
            <div className='tech_skill'>
              <SiMysql className='tech_skill_icon'/>
              <p>MySQL</p>
            </div>
            <div className='tech_skill'>
              <SiMysql className='tech_skill_icon'/>
              <p>sql</p>
            </div>
            <div className='tech_skill'>
              <FaFlutter className='tech_skill_icon'/>
              <p>Flutter</p>
            </div>
            <div className='tech_skill'>
              <FaDartLang className='tech_skill_icon'/>
              <p>Dart</p>
            </div>
            <div className='tech_skill'>
              <SiAndroidstudio className='tech_skill_icon'/>
              <p>Android</p>
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
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
            <input
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <textarea
              type='text'
              placeholder='Message'
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
            />
            <div className='contact_section_input_container_button' onClick={sendMessage}>
              <BsArrowRightCircleFill size={28} color='rgba(44, 44, 148, 0.963)'/>
              <p>{loading == true ? "loading" : "Send message"}</p>
            </div>
          </motion.article>
        </section>
      </main>
    </>
  )
}

export default Home
