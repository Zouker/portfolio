import React from 'react';
import styles from './Remote.module.scss';
import {Title} from '../common/components/title/Title';
import {Button} from '../common/components/button/Button';

const Flip = require('react-reveal/Flip')

export const Remote = () => {
    return (
        <div className={styles.remoteBlock}>
            <div className={styles.container}>
                <Flip top>
                    <Title text={'Remote work and relocation are considered by me'}/>
                </Flip>
                <div className={styles.indent}>
                    <Button buttonTitle={'Hire me'}/>
                </div>
            </div>
        </div>
    );
};