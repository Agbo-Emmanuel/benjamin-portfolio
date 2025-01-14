import React from 'react'
import './components.Css/projectCard.css'
import ben_university_image from '../assets/ben_university_image.png'
import compassionate_health_care_service_image from '../assets/compassionate_health_care_service_image.png'

const ProjectCard = ({limit}) => {

    const projectData = [
        {
            id : 1,
            image : ben_university_image,
            title : "Podcast - Podcast Mobile App Solution",
            description : "Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            pathToProject : "https://benjiggy.github.io/",
            tools : [
                {
                    theTool : "UI/UX Design"
                },
                {
                    theTool : "App Design"
                },
            ]
        },
        {
            id : 2,
            image : compassionate_health_care_service_image,
            title : "Podcast - Podcast Mobile App Solution",
            description : "Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            pathToProject : "https://compassionate-health-care-service.vercel.app/",
            tools : [
                {
                    theTool : "Frontend Development"
                },
            ]
        },
    ]

    const projectDataToDisplay = limit ? projectData.slice(0,limit) : projectData;

  return (
    <>
        {
            projectDataToDisplay.map((e)=>(
                <div className='project_card_body'>
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
                        <button onClick={() => window.open(e.pathToProject, '_blank')}><p>View Project</p></button>
                    </div>
                </div>
            ))
        }
    </>
  )
}

export default ProjectCard
