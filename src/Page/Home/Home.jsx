import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Experience from '../../Components/Experience/Experience'
import About from '../../Components/About/About'
import Skills from '../../Components/Skills/Skills'
import Projects from '../../Components/Projects/Projects'
import Feature from '../../Components/Feature/Feature'

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Experience></Experience>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Feature></Feature>
    </div>
  )
}
