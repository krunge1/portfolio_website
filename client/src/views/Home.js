import React from 'react'
import Header from '../Controllers/Header';
import Landing from '../Controllers/Landing';
import Introduction from '../Controllers/Introduction';
import Skills from '../Controllers/Skills';
import Projects from '../Controllers/Projects';
import Contact from '../Controllers/Contact';


const Home = () => {
    return (
        <div>      
            <Header/>
            <Landing/>
            <Introduction/> 
            <Skills/>
            <Projects/>
            <Contact/>
        </div>
    )
}

export default Home