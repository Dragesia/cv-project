import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Contact from './components/Contact.jsx'
import Profile from './components/Profile'
import Skills from './components/Skills'
import Picture from './components/Picture'
import Experience from './components/Experience'
import Education from './components/Education'
import References from './components/References'

function App() {
  return (
    <div className='app'>
      <div className='left column'>
        <Picture link='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'/>
        <Contact />
        <Skills />
        <Education />
      </div>
      <div className='right column'>
        <Header />
        <Profile />
        <Experience />
        <References />
      </div>
    </div>
  )
  
}

export default App
