import React from 'react'
import About from '../components/About'
import FoundersNote from '../components/FoundersNote'
import ServiceCard from '../components/ServiceCard'
import ContactForm from '../components/ContactForm'

const Home = () => {
  return (
    <div className="">
        <About />
        <FoundersNote />
        <ServiceCard />
        <ContactForm />
    </div>
  )
}

export default Home