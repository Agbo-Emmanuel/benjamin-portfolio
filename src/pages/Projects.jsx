import React from 'react'
import './pagesCss/projects.css'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  return (
    <>
      <div className='projects_body'>
        <div className='project_hero'>
          <h1>My <span>Projects</span></h1>
          <p>Explore the projects I have worked on, showcasing my skills and expertise.</p>
        </div>
        <div className='project_card_container_section'>
          <ProjectCard/>
        </div>
      </div>
    </>
  )
}

export default Projects
