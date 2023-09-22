import React from 'react'
import {Link} from 'react-router-dom'
import styles from '../styles/ProjectDetails.module.css'
import auditManager from '../assets/auditManager.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const AuditManagerDetails = () => {
    return (
        <div className={styles.body}>
        <div className={styles.backgroundImage}>
            <div className={styles.content}>
                <h1 className={styles.h1}>Audit Manager</h1>
                <p className={styles.p}>This project is built using Java and the Spring framework. See below for build details including project overview, tools used, and code to the project.</p>
                <Link target="_blank" rel="noopener noreferrer" className={styles.link} to="https://github.com/krunge1/AuditManager">project</Link>
            </div>
        </div>
        <img src={auditManager} alt="projectImage" className={styles.projectImage}/>
        <h2 className={styles.subHeader}>Project Overview</h2>
            <p className={styles.projectNarrative}>Audit Manager is a website application that helps the financial audit team keep their audit requests in one place and organized. The entity being audited can view the requested items with details and due dates. Also, the entity can upload the required documentation such as a pdf or excel file. Request status' can be updated from open, in progress, complete. The MVP allows for standard create, read, edit, and deletion (CRUD) of requests. Full login and registration of Users and each hold equal security features in terms of access in MVP. Full database relationships between users, requests, comments, and files. The website is is a full stack Java build and utilizes the Spring framework. The database utilizes MySQL and front-end styling relies heavily on Bootstrap.</p>
            <p className={styles.projectNarrative}>Feel free to check out the repository by visiting the Github Link below.</p>
        <h2 className={styles.subHeader}>Tools Used</h2>
            <div className={styles.skillsBox}>
                <p className={styles.skill}>Java</p>
                <p className={styles.skill}>Spring</p>
                <p className={styles.skill}>Bootstrap</p>
                <p className={styles.skill}>MySQL</p>
                <p className={styles.skill}>Apache Tomcat</p>
                <p className={styles.skill}>JSP</p>
                <p className={styles.skill}>jBCrypt</p>
                <p className={styles.skill}>Spring Boot</p>
            </div>
        <div className={styles.contentLive}>
            <h2 className={styles.subHeader}>Code</h2>
            <div className={styles.seeLiveBox}>
                <Link target="_blank" rel="noopener noreferrer" className={styles.link} to="https://github.com/krunge1/AuditManager"><FontAwesomeIcon icon={faGithub}/>Github</Link>
            </div>
        </div>
    </div>
    )
}

export default AuditManagerDetails