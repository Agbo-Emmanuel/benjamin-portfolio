import React from 'react'
import './pagesCss/service.css'
import ServiceCard from '../components/ServiceCard'

const Service = () => {
  return (
    <>

      <div className='service_body'>
        <div className='service_hero'>
          <h1>My <span>Services</span></h1>
          <p>Check out my services below to see how I can assist you.</p>
        </div>
        <div className='service_card_container_section'>
          <ServiceCard/>
        </div>
      </div>
    
    </>
  )
}

export default Service
