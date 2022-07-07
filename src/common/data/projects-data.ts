import todoImage from '../../assets/image/todolist.jpg';
import socialImage from '../../assets/image/social_network.jpg';
import counter1 from '../../assets/image/counter_1.jpg';
import counter2 from '../../assets/image/counter_2.jpg';
import cards from '../../assets/image/cards.jpg';
import pizza from '../../assets/image/pizza.png';

export const projectsData = [
    {
        id: '1',
        title: 'Todo List',
        description: 'Technology stack: ReactJS, TypeScript, Redux Toolkit, RestAPI, Axios, Redux-Thunk, Material UI, Unit testing, Storybook',
        backgroundImage: `url(${todoImage})`,
        repoLink: 'https://github.com/Zouker/todolist-trello',
        demoLink: 'https://zouker.github.io/todolist-trello/'
    },
    {
        id: '2',
        title: 'Social Network',
        description: 'Technology stack: ReactJS, TypeScript, Redux, RestAPI, Axios, Redux-Thunk, React-Router-dom',
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
    },
    {
        id: '5',
        title: 'Cards',
        description: 'Technology stack: ReactJS, TypeScript, Redux, Redux-Thunk, React-Router-dom, Axios, Formik, Material UI',
        backgroundImage: `url(${cards})`,
        repoLink: 'https://github.com/Zouker/cards',
        demoLink: 'https://zouker.github.io/cards/'
    },
    {
        id: '6',
        title: 'Pizza-app',
        description: 'Technology stack: ReactJS, TypeScript, Redux Toolkit, Redux-Thunk, Axios',
        backgroundImage: `url(${pizza})`,
        repoLink: 'https://github.com/Zouker/pizza-app',
        demoLink: 'https://zouker.github.io/pizza-app/'
    }
]