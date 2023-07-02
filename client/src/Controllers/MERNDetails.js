import React from 'react'
import {Link} from 'react-router-dom'
import styles from '../styles/MERNDetails.module.css'
import projectImage from '../assets/portfolio_project.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const MERNDetails = () => {
    return (
        <div className={styles.body}>
            <div className={styles.backgroundImage}>
                <div className={styles.content}>
                    <h1 className={styles.h1}>Portfolio Project</h1>
                    <p className={styles.p}>This project was a react front end portfolio. See below for build details including project overview, tools used, and live link to the project.</p>
                    <Link target="_blank" rel="noopener noreferrer" className={styles.link} to="https://github.com/krunge1/portfolio_website">project</Link>
                </div>
            </div>
            <img src={projectImage} alt="projectImage" className={styles.projectImage}/>
            <h2 className={styles.subHeader}>Project Overview</h2>
                <p className={styles.projectNarrative}>This project is a multi-page personal portfolio website. It is built using React library, Javascript, HTML, and CSS. I've also mixed in a few additional npm packages such as FontAwesome and EmailJS. The website was built to showcase my skills and projects.</p>
                <p className={styles.projectNarrative}>Feel free to check out the repository by visiting the Github Link below.</p>
            <h2 className={styles.subHeader}>Tools Used</h2>
                <div className={styles.skillsBox}>
                    <p className={styles.skill}>React</p>
                    <p className={styles.skill}>HTML</p>
                    <p className={styles.skill}>CSS</p>
                    <p className={styles.skill}>Github</p>
                    <p className={styles.skill}>FontAwesome</p>
                </div>
            <div className={styles.contentLive}>
                <h2 className={styles.subHeader}>See Live</h2>
                <Link target="_blank" rel="noopener noreferrer" className={styles.link} to="https://github.com/krunge1/portfolio_website"><FontAwesomeIcon icon={faGithub}/>Github Link</Link>
            </div>
        </div>
    )
}

export default MERNDetails