import React from 'react';
import styles from './Nav.module.scss'
import my from '../common/components/button/Button.module.scss'


export const Nav = () => {
    return (
        <div className={styles.nav}>
            <a href="" className={my.button}>Main</a>
            <a href="" className={my.button}>Skills</a>
            <a href="" className={my.button}>Projects</a>
            <a href="" className={my.button}>Contacts</a>
        </div>
    );
};