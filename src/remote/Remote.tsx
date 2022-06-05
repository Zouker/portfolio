import React from 'react';
import styles from './Remote.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import {Title} from '../common/components/title/Title';
import {Button} from '../common/components/button/Button';

export const Remote = () => {
    return (
        <div className={styles.remoteBlock}>
            <div className={`${styleContainer.container} ${styles.remoteContainer}`}>
                <Title text={'Remote work and relocation are considered by me'}/>
                <div className={styles.indent}>
                    <Button buttonTitle={'Hire me'}/>
                </div>
            </div>
        </div>
    );
};