import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Service from './pages/Service'
import ScrollToTop from './ScrollToTop'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop/>
        <Routes>
          <Route element={<Landing/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/services' element={<Service/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App