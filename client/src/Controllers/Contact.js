import React, {useRef, useState} from 'react'
import styles from '../styles/Contact.module.css'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const form = useRef();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    
    const sendEmail =(e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_p92zbhg', 'template_ydndh35', form.current, 'F3emLL1SQo6BOmUyF')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div className={styles.backgroundImage} id="contact">
        <div className={styles.body}>
            <h3 className={styles.subHeader}>Contact</h3>
            <div className={styles.contactGroup} >
                <p>Feel free to contact me!</p>
                <div className={styles.contactGroup}>
                    <p>Email</p>
                    <p>LinkedIn</p>
                    <p>Githhub</p>
                    <p>Resume</p>
                </div>
            </div>
            <form ref={form} onSubmit={sendEmail} className={styles.form}>
                <div className={styles.inputContainer}>
                    <label>Name</label>
                    <input 
                        className={styles.input}
                        placeholder='Name'
                        type="text" 
                        name="user_name"
                        value={name}
                        onChange = {(e) => setName(e.target.value)}
                        />
                </div>
                <div className={styles.inputContainer}>
                    <label>Email</label>
                    <input 
                        className={styles.input}
                        placeholder='Email'
                        type="email" 
                        name="user_email" 
                        value={email}
                        onChange = {(e) => setEmail(e.target.value)}
                        />
                </div>
                <div className={styles.inputContainer}>
                    <label>Message</label>
                    <textarea
                        className={styles.input} 
                        placeholder='Message'
                        name="message" 
                        value={message}
                        onChange = {(e) => setMessage(e.target.value)}
                        />
                </div>
                <input type="submit" value="Send" />
            </form>
        </div>
        </div>
    )
}

export default Contact