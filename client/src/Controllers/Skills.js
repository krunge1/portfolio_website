import React from 'react'
import styles from '../styles/Skills.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faPython, faJava, faGithub } from '@fortawesome/free-brands-svg-icons'

const Skills = () => {
    return (
    <div className={styles.body}>
        <p className={styles.skill}>HTML</p>
        <p className={styles.skill}>CSS</p>
        <p className={styles.skill}>Python</p>
        <p className={styles.skill}>Flask</p>
        <p className={styles.skill}>Java</p>
        <p className={styles.skill}>Springboot</p>
        <p className={styles.skill}>Github </p>
    </div>
    )
}

export default Skills