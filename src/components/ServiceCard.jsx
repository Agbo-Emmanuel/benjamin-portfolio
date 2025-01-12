import React from 'react'
import './components.Css/serviceCard.css'

const ServiceCard = ({limit}) => {

    const serviceData = [
        {
            id : 1,
            icon : "",
            service : "Backend Web Development"
        },
        {
            id : 2,
            icon : "",
            service : "Mobile App Development"
        },
    ]

    const serviceDataToDisplay = limit ? serviceData.slice(0,limit) : serviceData;

  return (
    <>
        {
            serviceDataToDisplay.map((e)=>(
                <div key={e.id} className='service_card_body'>
                    <div className='service_card_icon'></div>
                    <h3>{e.service}</h3>
                </div>
            ))
        }
    </>
  )
}

export default ServiceCard
