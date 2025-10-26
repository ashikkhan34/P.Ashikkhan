import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Experience from '../../Components/Experience/Experience'
import About from '../../Components/About/About'
import Skills from '../../Components/Skills/Skills'
import Feature from '../../Components/Feature/Feature'
import Projects from '../../Components/Projects/Projects'

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Experience></Experience>
      <Skills></Skills>
      <Projects></Projects>
      <About></About>
      <Feature></Feature>
    </div>
  )
}
