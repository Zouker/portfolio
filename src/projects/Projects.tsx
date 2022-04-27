import React from 'react';
import styles from '../projects/Projects.module.css';
import styleContainer from '../common/styles/Container.module.css';
import {Project} from './project/Project';

export const Projects = () => {
    return (
        <div className={styles.projectsBlock}>
            <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
                <h2 className={styles.title}>Projects</h2>
                <div className={styles.projects}>
                    <Project title={'Todo List'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, quas. '}/>
                    <Project title={'Social Network'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, quas. '}/>
                </div>
            </div>
        </div>
    );
};