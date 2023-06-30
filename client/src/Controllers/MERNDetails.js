import React from 'react'
import {Link} from 'react-router-dom'
import styles from '../styles/MERNDetails.module.css'
import MERN_Placeholder from '../assets/MERN_Placeholder.png'

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
            <img src={MERN_Placeholder} alt="MERN_Placeholder" className={styles.project_image}/>
        </div>
    )
}

export default MERNDetails