import todoImage from '../../assets/image/todolist.jpg';
import socialImage from '../../assets/image/social_network.jpg';
import counter1 from '../../assets/image/counter_1.jpg';
import counter2 from '../../assets/image/counter_2.jpg';

export const projectsData = [
    {
        id: '1',
        title: 'Todo List',
        description: 'Technology stack: ReactJS, TypeScript, Redux, RestAPI, axios, Thunk, Material UI, Unit testing, Storybook',
        backgroundImage: `url(${todoImage})`,
        repoLink: 'https://github.com/Zouker/todolist-trello',
        demoLink: ''
    },
    {
        id: '2',
        title: 'Social Network',
        description: 'Technology stack: ReactJS, TypeScript, Redux, RestAPI, axios, Thunk, ...',
        backgroundImage: `url(${socialImage})`,
        repoLink: 'https://github.com/Zouker/social_network',
        demoLink: 'https://zouker.github.io/social_network/'
    },
    {
        id: '3',
        title: 'Counter with settings in a separate block',
        description: 'Technology stack: ReactJS, TypeScript, Redux, Unit testing, CSS',
        backgroundImage: `url(${counter1})`,
        repoLink: 'https://github.com/Zouker/advanced-counter',
        demoLink: 'https://zouker.github.io/advanced-counter/'
    },
    {
        id: '4',
        title: 'Counter with settings in one block',
        description: 'Technology stack: ReactJS, TypeScript, Redux, Unit testing, CSS',
        backgroundImage: `url(${counter2})`,
        repoLink: 'https://github.com/Zouker/adv-counter',
        demoLink: 'https://zouker.github.io/adv-counter/'
    }
]