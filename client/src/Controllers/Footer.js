import React from 'react'
import styles from "../styles/Footer.module.css"

const Footer = () => {
    return (
        <div className={styles.body}>
            <div className={styles.footer}>
                <p>2023 | Made by Kyle Runge</p>
                <div className={styles.contactGroup}>
                    <p>Resume</p>
                    <p>Email</p>
                    <p>LinkedIn</p>
                    <p>Githhub</p>
                </div>
            </div> 
        </div>
    )
}

export default Footer