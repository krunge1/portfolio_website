import React from 'react'
import {Link, Outlet} from "react-router-dom";
import styles from '../styles/Introduction.module.css';
import Skills from './Skills';


const Introduction = () => {
    return (
    <div className={styles.body} id="about_me">
        <div>
            <h2 className={styles.h2}>About Me</h2>
            <h3 className={styles.subHeader}>Get to know me!</h3>
        </div>
        <div className={styles.columns}>
            <div className={styles.narrative}>
            <p>I'm a Full Stack Web Developer with a leaning towards the logic and data delivery of websites and web applications. I like to bring my prior corporate leadership experience to build a succesful product with the end user in mind.</p>
            <p>I'm open to job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
            <Link className={styles.link} to="/#contact">let's chat!</Link>
            </div>
            <Skills/>
        </div>
    </div>
    )
}

export default Introduction