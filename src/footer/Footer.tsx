import React from 'react';
import styles from './Footer.module.scss';
import {contactsData} from '../common/data/contacts-data';

const Zoom = require('react-reveal/Zoom')

export const Footer = () => {
    return (
        <div className={styles.footerBlock}>
            <div className={styles.container}>
                <Zoom>
                    <div className={styles.author}>
                        <h2>Denis Shubin</h2>
                    </div>
                </Zoom>
                <div className={styles.footerContacts}>
                    {contactsData.map(contact =>
                        <a key={contact.id} href={contact.link} target={'_blank'} rel="noopener noreferrer">
                            <img src={contact.logo} className={styles.footerItem} alt={'logo'}/>
                        </a>
                    )}
                </div>
                <div className={styles.copyright}>© 2022 All Rights Reserved</div>
            </div>
        </div>
    );
};