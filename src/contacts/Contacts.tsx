import React from 'react';
import styles from './Contacts.module.css'
import styleContainer from '../common/styles/Container.module.css';

export const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <h2>Contacts</h2>
                <form className={styles.form}>
                    <input className={styles.input}/>
                    <input className={styles.input}/>
                    <textarea className={styles.textarea}/>
                </form>
                <button className={styles.button}>Send</button>
            </div>
        </div>
    );
};