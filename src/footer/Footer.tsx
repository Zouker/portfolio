import React from 'react';
import styles from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import {contactsData} from '../common/data/contacts-data';


export const Footer = () => {
    return (
        <div className={styles.footerBlock}>
            <div className={`${styleContainer.container} ${styles.footerContainer}`}>
                <h2 className={styles.author}>Denis Shubin</h2>
                <div className={styles.footerContacts}>
                    {contactsData.map(contact =>
                        <a key={contact.id} href={contact.link} target={'_blank'} rel='noopener noreferrer'>
                            <img src={contact.logo} className={styles.footerItem} alt={'logo'}/>
                        </a>
                    )}
                </div>
                <div className={styles.footerEnd}>© 2022 All Rights Reserved</div>
            </div>
        </div>
    );
};