import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../styles/Header.module.css";
import resume from '../assets/kyle_runge_resume.pdf'

const Header = () => {
    return (
    <div className={styles.header_body}>
        <header className={styles.header}>
        <a target="_blank"  className={styles.link} href={resume}>Kyle Runge</a>
            <div className={styles.header_line_group}>
                <Link className={styles.link} to="/#home">Home</Link>
                <Link className={styles.link} to="/#about_me">Expertise</Link>
                <Link className={styles.link} to="/#projects">Projects</Link>
                <Link className={styles.link} to="/#contact">Contact</Link>
            </div>
        </header>
    </div>
    )
}

export default Header