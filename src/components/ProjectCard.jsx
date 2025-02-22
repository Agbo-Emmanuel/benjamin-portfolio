import React from 'react'
import './components.Css/projectCard.css'
import ben_university_image from '../assets/ben_university_image.png'
import compassionate_health_care_service_image from '../assets/compassionate_health_care_service_image.png'
import ibkr_image from '../assets/ibkr_image.png'
import blackfinance_image from '../assets/blackfinance_image.png'
import rbnc_mobile_image from '../assets/rbnc_mobile_image.jpg'
import { motion, stagger } from "framer-motion";

const ProjectCard = ({limit}) => {

    const projectData = [
        {
            id : 1,
            image : ben_university_image,
            title : "Ben University",
            description : "We offer top-tier courses in Computer Science, Designing, and Management to help you build the skills you need to excel in today's competitive world.",
            pathToProject : "https://benjiggy.github.io/",
            tools : [
                {
                    theTool : "Full stack"
                },
            ]
        },
        {
            id : 2,
            image : compassionate_health_care_service_image,
            title : "Compassionate Health care service ",
            description : "compassionate-health-care-service offers an affordable and most appropriate home care services. We commit the patient and family experience to our mission and activities by establishing personalized non- medical care plans.",
            pathToProject : "https://compassionate-health-care-service.vercel.app/",
            tools : [
                {
                    theTool : "Frontend Web Development"
                },
                {
                    theTool : "Html"
                },
                {
                    theTool : "Css"
                },
                {
                    theTool : "JavaScript"
                },
            ]
        },
        {
            id : 3,
            image : ibkr_image,
            title : "Broker 1",
            description : "A modern investment platform designed to help users manage their funds efficiently. The website allows users to deposit, withdraw, and invest in various plans while tracking their profits in real time",
            pathToProject : "",
            tools : [
                {
                    theTool : "Backend Web Development"
                },
                {
                    theTool : "Node.js"
                },
                {
                    theTool : "MongoDb"
                },
            ]
        },
        {
            id : 4,
            image : blackfinance_image,
            title : "Broker 2",
            description : "A dynamic and secure investment platform that allows users to deposit funds, purchase investment plans, and track their earnings in real-time.",
            pathToProject : "",
            tools : [
                {
                    theTool : "Backend Web Development"
                },
                {
                    theTool : "Node.js"
                },
                {
                    theTool : "MongoDb"
                },
            ]
        },
        {
            id : 5,
            image : rbnc_mobile_image,
            title : "RealLook",
            description : "I developed a mobile application built using Dart and Flutter, designed e-commerce The app provides a seamless user experience with a responsive and intuitive UI, ensuring smooth navigation across different devices and screen sizes.",
            pathToProject : "",
            tools : [
                {
                    theTool : "Mobile development"
                },
                {
                    theTool : "Dart"
                },
                {
                    theTool : "Flutter"
                },
                {
                    theTool : "Firebase"
                },
                {
                    theTool : "Node.js"
                },
                {
                    theTool : "Firestore"
                },
                {
                    theTool : "SQLite"
                },
                {
                    theTool : "MySQL"
                },
            ]
        },
    ]

    const projectDataToDisplay = limit ? projectData.slice(0,limit) : projectData;

  return (
    <>
        {
            projectDataToDisplay.map((e)=>(
                <motion.div 
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
                    className='project_card_body'>
                    <div className='project_card_image'>
                        <img src={e.image} alt='image'/>
                    </div>
                    <div className='project_card_details'>
                        <div className='project_card_tools'>
                            {
                                e.tools.map((item)=>(
                                    <h5>{item.theTool}</h5>
                                ))
                            }
                        </div>
                        <h3>{e.title}</h3>
                        <p>{e.description}</p>
                        {
                            e.pathToProject ? <button onClick={() => window.open(e.pathToProject, '_blank')}><p>View Project</p></button> : null
                        }   
                    </div>
                </motion.div>
            ))
        }
    </>
  )
}

export default ProjectCard
