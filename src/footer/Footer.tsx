import React from 'react';
import styles from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.css';

export const Footer = () => {
    return (
        <div className={styles.footerBlock}>
            <div className={`${styleContainer.container} ${styles.footerContainer}`}>
                <h2>Denis Shubin</h2>
                <div className={styles.footerContacts}>
                    <div className={styles.footerItem}></div>
                    <div className={styles.footerItem}></div>
                    <div className={styles.footerItem}></div>
                    <div className={styles.footerItem}></div>
                </div>
                <div className={styles.footerEnd}>© 2022 All Rights Reserved</div>
            </div>
        </div>
    );
};