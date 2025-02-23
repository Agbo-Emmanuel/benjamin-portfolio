import React, { useState } from 'react'
import './pagesCss/contact.css'
import { motion, stagger } from "framer-motion";
import { BsArrowRightCircleFill } from "react-icons/bs";
import axios from 'axios';
import { toast } from 'react-toastify';

const Contact = () => {

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
      <div className='contact_body'>
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
      </div>
    </>
  )
}

export default Contact
