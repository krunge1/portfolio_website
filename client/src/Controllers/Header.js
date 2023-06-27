import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../styles/Header.module.css";

const Header = () => {
    return (
    <div className={styles.header_body}>
        <header className={styles.header}>
            <p className={styles.p}>Kyle Runge</p>
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