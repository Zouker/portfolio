import React from 'react';
import styles from './Contacts.module.scss'
import {Title} from '../common/components/title/Title';
import {useForm} from 'react-hook-form';
import {Button} from '../common/components/button/Button';
import axios from 'axios';

const Fade = require('react-reveal/Fade')

interface IFormInputs {
    name: string
    email: string
    message: string
}

export const Contacts = () => {
    const {register, formState: {errors}, handleSubmit} = useForm<IFormInputs>();

    const onSubmit = (data: IFormInputs, e: any) => {
        e.preventDefault()
        axios.post('https://gmail-smtp-nodejs-serv.herokuapp.com/sendMessage', {data})
            .then(() => {
                alert('Your message has been send');
            });
        e.target.reset()
    }

    return (
        <div id={'contacts'} className={styles.contactsBlock}>
            <div className={styles.container}>
                <Fade top>
                    <Title text={'Contacts'}/>
                </Fade>
                <Fade>
                    <form onSubmit={handleSubmit(onSubmit)} id={'contact-form'} className={styles.form}>
                        <input {...register('name', {required: true})} placeholder={'Name'} type={'text'}
                               className={styles.input}/>
                        {errors.name && <p style={{color: '#fff'}}>Name is required</p>}
                        <input {...register('email', {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                        })} placeholder={'E-mail'} type={'text'} className={styles.input}/>
                        {errors.email && <p style={{color: '#fff'}}>E-mail is required</p>}

                        <textarea {...register('message', {required: true})} placeholder={'Your message'}
                                  className={styles.textarea}/>
                        <Button type="submit" buttonTitle={'Send a message'}/>
                    </form>
                </Fade>
            </div>
        </div>
    );
};