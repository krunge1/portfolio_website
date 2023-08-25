import React from 'react'
import styles from "../styles/Footer.module.css"
import resume from '../assets/kyle_runge_resume.pdf'
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <div className={styles.body}>
            <div className={styles.footer}>
                <p className={styles.p}>2023 | Made by Kyle Runge</p>
                <div className={styles.contactGroup}>
                    <Link target="_blank" className={styles.link} to={resume}>Resume</Link>
                    <Link target="_blank" className={styles.link} to="https://www.linkedin.com/in/kyle-runge1/">LinkedIn</Link>
                    <Link target="_blank" className={styles.link} to="https://github.com/krunge1">Github</Link>
                </div>
            </div> 
        </div>
    )
}

export default Footer