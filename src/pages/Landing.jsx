import React from 'react'
import './pagesCss/landing.css'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const Landing = () => {
  return (
    <>
      <div className='landing_body'>
        <Header/>
        <Outlet/>
      </div>
    </>
  )
}

export default Landing
