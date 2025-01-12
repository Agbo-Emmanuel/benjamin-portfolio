import React from 'react'
import './components.Css/projectCard.css'

const ProjectCard = ({limit}) => {

    const projectData = [
        {
            id : 1,
            title : "Podcast - Podcast Mobile App Solution",
            description : "Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
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
            title : "Podcast - Podcast Mobile App Solution",
            description : "Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            tools : [
                {
                    theTool : "UI/UX Design"
                },
                {
                    theTool : "App Design"
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
                    <div className='project_card_image'></div>
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
                    </div>
                </div>
            ))
        }
    </>
  )
}

export default ProjectCard
