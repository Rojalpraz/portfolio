import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Aboutme from './Components/Aboutme'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

function App() {
  return (
    <div className=' bg-zinc-950 overflow-hidden'>
      <Navbar/>
      <Hero/>
      <Aboutme/>
      <Projects/>
      <Contact/>
      
    </div>
  )
}

export default App
