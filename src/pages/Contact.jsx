import React from 'react'
import './pagesCss/contact.css'
import { motion, stagger } from "framer-motion";
import { BsArrowRightCircleFill } from "react-icons/bs";

const Contact = () => {
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
      </div>
    </>
  )
}

export default Contact
