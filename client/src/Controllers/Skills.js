import React from 'react'
import styles from '../styles/Skills.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faPython, faJava, faGithub } from '@fortawesome/free-brands-svg-icons'

const Skills = () => {
    return (
    <div className={styles.body}>
        <p>HTML <FontAwesomeIcon icon={faHtml5}/></p>
        <p>CSS <FontAwesomeIcon icon={faCss3Alt}/></p>
        <p>Python <FontAwesomeIcon icon={faPython}/></p>
        <p>Flask</p>
        <p>Java <FontAwesomeIcon icon={faJava}/></p>
        <p>Springboot</p>
        <p>Github <FontAwesomeIcon icon={faGithub}/></p>
    </div>
    )
}

export default Skills