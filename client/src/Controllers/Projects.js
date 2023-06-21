import React from 'react';
import {Link} from "react-router-dom";
import styles from '../styles/Projects.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import JavaPlaceholder from '../assets/JavaPlaceholder.png'
import Python_Placeholder from '../assets/Python_Placeholder.png'
import MERN_Placeholder from '../assets/MERN_Placeholder.png'

const Projects = () => {
    return (
    <div className={styles.body}>
        <h2>Projects</h2>
        <div className={styles.projectGroup}>
            <div className={styles.project}>
                <img src={JavaPlaceholder} alt="JavaPlaceholder"/>
                <div>
                    <h3>Financial Audit Management Tool</h3>
                    <p>Financial Audit Management Tool is a website developed to manage the requests and delivery of a financial audit</p>
                    <Link className={styles.link} to="/audit_app">Project Details</Link>
                    <Link to="/"><FontAwesomeIcon icon={faGithub}/></Link>
                </div>
            </div>
            <div className={styles.project}>
                <img src={Python_Placeholder} alt="Python_Placeholder"/>
                <div>
                    <h3>Python Name</h3>
                    <p>Brief Project Overview</p>
                    <Link className={styles.link} to="/python_project">Project Details</Link>
                    <Link to="/"><FontAwesomeIcon icon={faGithub}/></Link>
                </div>
            </div>
            <div className={styles.project}>
                <img src={MERN_Placeholder} alt="MERN_Placeholder"/>
                <div>
                    <h3>MERN Name</h3>
                    <p>Brief Project Overview</p>
            {/* //This needs to be Link. Import Link above */}
                    <Link className={styles.link} to="/MERN_project">Project Details</Link>
                    <Link to="/"><FontAwesomeIcon icon={faGithub}/></Link>
                </div>
            </div>

        </div>
    </div>
    )
}

export default Projects
