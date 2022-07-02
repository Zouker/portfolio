import React from 'react';
import styles from './Projects.module.scss';
import {Project} from './project/Project';
import {Title} from '../common/components/title/Title';
import {projectsData} from '../common/data/projects-data';

const Fade = require('react-reveal/Fade')

export const Projects = () => {

    return (
        <div id={'projects'} className={styles.projectsBlock}>
            <div className={styles.container}>
                <Fade top>
                    <Title text={'Projects'}/>
                </Fade>
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