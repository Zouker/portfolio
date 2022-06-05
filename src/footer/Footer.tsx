import React from 'react';
import styles from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import github from '../assets/image/github.svg'
import linkedIn from '../assets/image/linkedin.svg'
import telegram from '../assets/image/telegram.svg'
import email from '../assets/image/email.svg'


export const Footer = () => {
    return (
        <div className={styles.footerBlock}>
            <div className={`${styleContainer.container} ${styles.footerContainer}`}>
                <h2>Denis Shubin</h2>
                <div className={styles.footerContacts}>
                    <a href={'https://github.com/Zouker'} target={'_blank'}>
                        <img src={github} className={styles.footerItem}/>
                    </a>
                    <a href={'https://www.linkedin.com/in/denis-shubin/'} target={'_blank'}>
                        <img src={linkedIn} className={styles.footerItem}/>
                    </a>
                    <a href={'https://t.me/Zouker_BY'} target={'_blank'}>
                        <img src={telegram} className={styles.footerItem}/>
                    </a>
                    <a href={'mailto:denis.shubin@gmail.com'}>
                        <img src={email} className={styles.footerItem}/>
                    </a>
                </div>
                <div className={styles.footerEnd}>© 2022 All Rights Reserved</div>
            </div>
        </div>
    );
};