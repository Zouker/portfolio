import React from 'react';
import styles from './Projects.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import {Project} from './project/Project';
import {Title} from '../common/components/title/Title';
import {projectsData} from '../common/data/projects-data';

export const Projects = () => {

    return (
        <div className={styles.projectsBlock}>
            <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
                <Title text={'Projects'}/>
                <div className={styles.projects}>
                    {projectsData.map(p =>
                        <Project key={p.id}
                                 id={p.id}
                                 title={p.title}
                                 description={p.description}
                                 backgroundImage={p.backgroundImage}
                                 repoLink={p.repoLink}
                                 demoLink={p.demoLink}
                        />)}
                </div>
            </div>
        </div>
    );
};