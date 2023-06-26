import React from "react";
import styles from "../styles/Landing.module.css";

const Landing = () => {
    return (
        <div className={styles.body} id="home">
            <div className={styles.backgroundImage}>
                <div>
                    <h1 className={styles.h1}>Hey, I'm Kyle Runge</h1>
                    <p className={styles.p}>A full stack web developer.</p>
                </div>
            </div>
        </div>
    )
};

export default Landing;
