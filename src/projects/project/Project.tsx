import React from 'react';
import styles from './Project.module.css'

type ProjectPropsType = {
    title: string
    description: string
}

export const Project: React.FC<ProjectPropsType> = (props) => {
    return (
        <div className={styles.project}>
            <div className={styles.image}>
                <button className={styles.button}>Watch</button>
            </div>
            <h3>{props.title}</h3>
            <div className={styles.description}>
              {props.description}
            </div>

        </div>
    );
};
