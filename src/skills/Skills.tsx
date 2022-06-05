import React from 'react';
import styles from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Skill} from './skill/Skill';
import {Title} from '../common/components/title/Title';
import {skillsData} from '../common/data/skills-data';

export const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <Title text={'Skills'}/>
                <div className={styles.skills}>
                    {skillsData.map(s =>
                        <Skill key={s.id}
                               id={s.id}
                               title={s.title}
                               description={s.description}
                               backgroundImage={s.backgroundImage}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};