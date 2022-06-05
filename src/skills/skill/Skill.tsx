import React from 'react';
import styles from './Skill.module.scss'

type SkillPropsType = {
    id: string
    title: string
    description: string
    backgroundImage: string
}

export const Skill: React.FC<SkillPropsType> = ({title, description, backgroundImage}) => {
    return (
        <div className={styles.skill}>
            <div className={styles.icon} style={{backgroundImage}}></div>
            <h3 className={styles.skillTitle}>{title}</h3>
            <span className={styles.description}>
              {description}
            </span>

        </div>
    );
};
