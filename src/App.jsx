import { useState } from 'react'
import './App.css'
import Mail from './components/Mail.jsx'
import Skills from './components/Skills'

function LeftColumn() {
  return (
    <div className='left column'>

    </div>
  )
}
function RightColumn() {
  return (
    <div className='right column'>

    </div>
  )
}

function App() {
  return (
    <div className='app'>
      <LeftColumn />
      <RightColumn />
    </div>
  )
  
}

export default App
