import React from 'react';
import { NavHashLink, HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

import styles from "../styles/Header.module.css";

const Header = () => {
    return (
    <div className={styles.header_body}>
        <header className={styles.header}>
            <div><p>Kyle Runge</p></div>
            <div className={styles.header_line_group}>
                <NavHashLink className={styles.link} to="/#home">home</NavHashLink>
                <Link className={styles.link} to="/expertise">expertise</Link>
                <Link className={styles.link} to="/projects">projects</Link>
                <Link className={styles.link} to="/contact">contact</Link>
            </div>
        </header>
    </div>
    )
}

export default Header