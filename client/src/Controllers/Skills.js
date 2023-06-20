import React from 'react'
import styles from '../styles/Skills.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'

const Skills = () => {
    return (
    <div className={styles.body}>
        <p>HTML <FontAwesomeIcon icon={faHtml5}/></p>
        <p>CSS</p>
        <p>Python</p>
        <p>Flask</p>
        <p>Java</p>
        <p>Springboot</p>
        <p>Github</p>
    </div>
    )
}

export default Skills