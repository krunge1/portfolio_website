import React from 'react';
import {Link} from "react-router-dom";
import styles from '../styles/Projects.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import JavaPlaceholder from '../assets/JavaPlaceholder.png'
import Python_Placeholder from '../assets/Python_Placeholder.png'
import blindDate from '../assets/blindDate.gif'
import auditManager from '../assets/auditManager.gif'
import projectImage from '../assets/portfolio_project.png'


const Projects = () => {
    return (
    <div className={styles.body}  id="projects">
        <h2 className={styles.subHeader}>Projects</h2>
        <div className={styles.projectGroup}>
            <div className={styles.project}>
                <img src={auditManager} alt="auditManager" className={styles.project_image}/>
                <div className={styles.project_detail}>
                    <h3>Big 4 Audit Manager</h3>
                    <p>Big 4 Audit Manager is a website developed to manage requests during a financial audit.</p>
                    <div className={styles.linkBox}>
                        <Link className={styles.link} to="/audit_manager">project details</Link>
                        <Link className={styles.link} to="https://github.com/krunge1/AuditManager"><FontAwesomeIcon icon={faGithub}/>Github</Link>
                    </div>
                </div>
            </div>
            <div className={styles.project}>
                <img src={blindDate} alt="blindDate" className={styles.project_image}/>
                <div className={styles.project_detail}>
                    <h3>Blind Date</h3>
                    <p>Blind Date is a dating application where you can only match with other users if recommended by friends. </p>
                    <div className={styles.linkBox}>
                        <Link className={styles.link} to="/blind_date">project details</Link>
                        <Link className={styles.link}to="https://github.com/krunge1/DatingApp"><FontAwesomeIcon icon={faGithub}/>Github</Link>
                    </div>
                </div>
            </div>
            <div className={styles.project}>
                <img src={projectImage} alt="projectImage" className={styles.project_image}/>
                <div className={styles.project_detail}>
                    <h3>Portfolio Project</h3>
                    <p>A multi-page personal portfolio website, built using React and showcasing skills in various projects.</p>
                    <div className={styles.linkBox}>
                        <Link className={styles.link} to="/MERN_project">project details</Link>
                        <Link className={styles.link} to="https://github.com/krunge1/portfolio_website"><FontAwesomeIcon icon={faGithub}/>Github</Link>
                    </div>
                </div>
            </div>

        </div>
    </div>
    )
}

export default Projects
