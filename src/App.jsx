import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Aboutme from './Aboutme'
import Education from './Education'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'
import Footer from './Footer'

function App() {

  let navbar = ["Home","About","Education","Projects","Skills","Contact"]
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      
      <Navbar navbar={navbar}></Navbar>
      <Hero></Hero>
      <Aboutme></Aboutme>
      <Education></Education>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App
