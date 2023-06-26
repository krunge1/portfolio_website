import React from 'react'
import ScrollToHashElement from '../Controllers/ScrollToHashElement';
import Header from '../Controllers/Header';
import Landing from '../Controllers/Landing';
import Introduction from '../Controllers/Introduction';
import Projects from '../Controllers/Projects';
import Contact from '../Controllers/Contact';


const Home = () => {
    return (
        <div>
            <ScrollToHashElement/>      
            <Header/>
            <Landing/>
            <Introduction/>
            <Projects/>
            <Contact/>
        </div>
    )
}

export default Home