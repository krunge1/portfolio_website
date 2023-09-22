import React from 'react'
import {Link} from 'react-router-dom'
import styles from '../styles/ProjectDetails.module.css'
import blindDate from '../assets/blindDate.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const BlindDateDetails = () => {
    return (
        <div className={styles.body}>
        <div className={styles.backgroundImage}>
            <div className={styles.content}>
                <h1 className={styles.h1}>Blind Date</h1>
                <p className={styles.p}>A group project using the MERN stack. See below for build details including project overview, tools used, and code to the project.</p>
                <Link target="_blank" rel="noopener noreferrer" className={styles.link} to="https://github.com/krunge1/DatingApp">project</Link>
            </div>
        </div>
        <img src={blindDate} alt="Blind Date" className={styles.projectImage}/>
        <h2 className={styles.subHeader}>Project Overview</h2>
            <p className={styles.projectNarrative}>A group project building a dating application which you can only match with other users if recommended by friends. The goal of the application is to provide opportunity for friends to vet people that their friends decide to date before they potentially become an item and are introduced to the friend group. It's like arranged dating, only it's your friends opinions involved, not your parents.</p>
            <p className={styles.projectNarrative}>The application is built on the JavaScript language and the MERN stack (MongoDB, Express, React, Node.js). Front-end styling uses CSS and Tailwind CSS.</p>
            <p className={styles.projectNarrative}>I played a key role in constructing the entire backend, which included establishing multiple database relationships and implementing efficient file upload functionality. Additionally, I was deeply involved in crafting the frontend JSX files, where I developed logic to seamlessly retrieve various friends and blind dates based on the user's profile and connections.</p>
            <p className={styles.projectNarrative}>Future updates plan to include location map API to showcase where your friends are located.</p>
            <p className={styles.projectNarrative}>Feel free to check out the repository by visiting the Github Link below.</p>
        <h2 className={styles.subHeader}>Tools Used</h2>
            <div className={styles.skillsBox}>
                <p className={styles.skill}>JavaScript</p>
                <p className={styles.skill}>MongoDB</p>
                <p className={styles.skill}>Express</p>
                <p className={styles.skill}>React</p>
                <p className={styles.skill}>Node.js</p>
                <p className={styles.skill}>Tailwind CSS</p>
                <p className={styles.skill}>Mongoose</p>
                <p className={styles.skill}>NPM</p>
                <p className={styles.skill}>BCrypt</p>
                <p className={styles.skill}>Multer</p>
                <p className={styles.skill}>CORS</p>
                <p className={styles.skill}>Dotenv</p>
            </div>
        <div className={styles.contentLive}>
            <h2 className={styles.subHeader}>See Live</h2>
            <div className={styles.seeLiveBox}>
                <Link target="_blank" rel="noopener noreferrer" className={styles.link} to="https://github.com/krunge1/DatingApp"><FontAwesomeIcon icon={faGithub}/>Github</Link>
            </div>
        </div>
    </div>
    )
}

export default BlindDateDetails