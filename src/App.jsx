import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Landing/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/contact-me' element={<Contact/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
