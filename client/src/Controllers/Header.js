import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../styles/Header.module.css";
import resume from '../assets/kyle_runge_resume.pdf'

const Header = () => {
    return (
    <div className={styles.header_body}>
        <header className={styles.header}>
        <a className={styles.link} href={resume}>Kyle Runge</a>
            <div className={styles.header_line_group}>
                <Link className={styles.link} to="/#home">home</Link>
                <Link className={styles.link} to="/#about_me">expertise</Link>
                <Link className={styles.link} to="/#projects">projects</Link>
                <Link className={styles.link} to="/#contact">contact</Link>
            </div>
        </header>
    </div>
    )
}

export default Header