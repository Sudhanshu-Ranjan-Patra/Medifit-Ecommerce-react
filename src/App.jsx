import { useState } from 'react'
import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import MedicalStore from './components/MedicalStore'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/> 
        
      <MedicalStore />
      
      <Footer/>
      
    </>
  )
}

export default App
