import React from 'react';
import styles from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from './skill/Skill';

export const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>Skills</h2>
                <div className={styles.skills}>
                    <Skill title={'HTML & CSS'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, quam!'}/>
                    <Skill title={'React JS'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, praesentium.'}/>
                    <Skill title={'Typescript'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, vitae!'}/>
                </div>
            </div>
        </div>
    );
};