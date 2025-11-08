import React from 'react'
import Contact from './Contact'
import Testimonials from './Testimonials'
import About from './About'
import Services from './Services'
import Hero from './Hero'
import Projects from './Projects'
import Highlights from './Highlight'

const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <Projects />
            <Highlights />
            <About />
            <Testimonials />
            <Contact />

        </>
    )
}

export default Home