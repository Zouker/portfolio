import React from 'react';
import styles from './Project.module.scss'
import my from '../../common/components/button/Button.module.scss';

const Zoom = require('react-reveal/Zoom')

type ProjectPropsType = {
    id: string
    title: string
    description: string
    backgroundImage: string
    repoLink: string
    demoLink: string
}

export const Project: React.FC<ProjectPropsType> = ({title, description, backgroundImage, repoLink, demoLink}) => {
    return (
        <div className={styles.project}>
            <Zoom>
                <div className={styles.image} style={{backgroundImage}}>
                    <a href={demoLink} className={my.button} target={'_blank'} rel="noopener noreferrer">View
                        project</a>
                    <a href={repoLink} className={my.button} target={'_blank'} rel="noopener noreferrer">View code</a>
                </div>
                <div className={styles.projectInfo}>
                    <h3 className={styles.projectTitle}>{title}</h3>
                    <span className={styles.description}>
                    {description}
                </span>
                </div>
            </Zoom>
        </div>
    );
};
