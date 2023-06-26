import React from 'react'
import styles from '../styles/Contact.module.css'

const Contact = () => {
    return (
        <div className={styles.backgroundImage}>
        <div className={styles.body}>
            <h3 className={styles.subHeader}>Contact</h3>
            <div className={styles.contactGroup} >
                <p>Feel free to contact me!</p>
                <div className={styles.contactGroup}>
                    <p>Email</p>
                    <p>LinkedIn</p>
                    <p>Githhub</p>
                    <p>Resume</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Contact