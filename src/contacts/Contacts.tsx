import React from 'react';
import styles from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.scss';
import {Title} from '../common/components/title/Title';
import {Button} from '../common/components/button/Button';

export const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <Title text={'Contacts'}/>
                <form className={styles.form}>
                    <input placeholder={'Name'} type={'text'} className={styles.input}/>
                    <input placeholder={'E-mail'} type={'text'} className={styles.input}/>
                    <textarea placeholder={'Your message'} className={styles.textarea}/>
                </form>
                <Button type={'submit'} buttonTitle={'Send message'}/>
            </div>
        </div>
    );
};