import React from 'react';
import styles from './Remote.module.css';
import styleContainer from '../common/styles/Container.module.css';


export const Remote = () => {
    return (
        <div className={styles.remoteBlock}>
            <div className={`${styleContainer.container} ${styles.remoteContainer}`}>
                <h2>Remote work and relocation are considered by me</h2>
                <button className={styles.button}>Hire me</button>
            </div>
        </div>
    );
};