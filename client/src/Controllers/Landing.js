import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Landing.module.css";

const Landing = () => {
    return (
        <div className={styles.body} id="home">
            <div className={styles.backgroundImage}>
                <div className={styles.content}>
                    <h1 className={styles.h1}>Hey, I'm Kyle Runge</h1>
                    <p className={styles.p}>A full stack web developer.</p>
                    <Link className={styles.link} to="/#projects">projects</Link>
                </div>
            </div>
        </div>
    )
};

export default Landing;
