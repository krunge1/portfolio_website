import React from 'react'
import styles from '../styles/Skills.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faPython, faJava, faGithub } from '@fortawesome/free-brands-svg-icons'

const Skills = () => {
    return (
    <div className={styles.body}>
        <p className={styles.skill}>HTML <FontAwesomeIcon icon={faHtml5}/></p>
        <p className={styles.skill}>CSS <FontAwesomeIcon icon={faCss3Alt}/></p>
        <p className={styles.skill}>Python <FontAwesomeIcon icon={faPython}/></p>
        <p className={styles.skill}>Flask</p>
        <p className={styles.skill}>Java <FontAwesomeIcon icon={faJava}/></p>
        <p className={styles.skill}>Springboot</p>
        <p className={styles.skill}>Github <FontAwesomeIcon icon={faGithub}/></p>
    </div>
    )
}

export default Skills