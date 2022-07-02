import React from 'react';
import styles from './Contacts.module.scss'
import {Title} from '../common/components/title/Title';
import {Button} from '../common/components/button/Button';

const Fade = require('react-reveal/Fade')

export const Contacts = () => {
    return (
        <div id={'contacts'} className={styles.contactsBlock}>
            <div className={styles.container}>
                <Fade top>
                    <Title text={'Contacts'}/>
                </Fade>
                <Fade>
                    <form className={styles.form}>
                        <input placeholder={'Name'} type={'text'} className={styles.input}/>
                        <input placeholder={'E-mail'} type={'text'} className={styles.input}/>
                        <textarea placeholder={'Your message'} className={styles.textarea}/>
                        <Button type={'submit'} buttonTitle={'Send message'}/>
                    </form>
                </Fade>
            </div>
        </div>
    );
};