import React from 'react'
import './components.Css/serviceCard.css'
import { RiMobileDownloadFill } from "react-icons/ri";
import { MdOutlineCameraFront } from "react-icons/md";
import { FaCode } from "react-icons/fa";
// import { AiOutlineCode } from "react-icons/ai";
import { MdWeb } from "react-icons/md";
// import { FaLaptopCode } from "react-icons/fa";
// import { FaReact } from "react-icons/fa";
import { motion, stagger } from "framer-motion";

const ServiceCard = ({limit}) => {

    const serviceData = [
        {
            id : 1,
            icon : <FaCode/>,
            service : "Backend Web Development"
        },
        {
            id : 2,
            icon : <MdWeb/>,
            service : "Frontend Web Development"
        },
        {
            id : 3,
            icon : <RiMobileDownloadFill/>,
            service : "Mobile App Development"
        },
    ]

    const serviceDataToDisplay = limit ? serviceData.slice(0,limit) : serviceData;

  return (
    <>
        {
            serviceDataToDisplay.map((e)=>(
                <motion.div 
                    initial={{
                        opacity: 0,
                        y: -100,
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
                    key={e.id} 
                    className='service_card_body'>
                    <div className='service_card_icon'>
                        {e.icon}
                    </div>
                    <h3>{e.service}</h3>
                </motion.div>
            ))
        }
    </>
  )
}

export default ServiceCard
