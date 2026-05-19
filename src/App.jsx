import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Projects from './components/Projects'
import './App.css'

function App() {
  
  return (
    <div className="container">
      <Header />
      <Hero />
      <Projects />
      <Footer />
    </div>
  
  )
}

export default App