import todoImage from '../../assets/image/todolist.jpg';
import socialImage from '../../assets/image/social_network.jpg';
import counter1 from '../../assets/image/counter_1.jpg';
import counter2 from '../../assets/image/counter_2.jpg';
import cards from '../../assets/image/cards.png';
import pizza from '../../assets/image/pizza.png';
import storybook from '../../assets/image/React-components.png'
import learningCards from '../../assets/image/learning-cards.jpg'
import githubUserSearch from '../../assets/image/github-user-search.png'
import websocketChat from '../../assets/image/chat-websocket.png'
import rickAndMorty from '../../assets/image/rick-and-morty.png'
import movieCatalog from '../../assets/image/movie-catalog.png'
import weatherApp from '../../assets/image/weather-app.png'
import homeworks from '../../assets/image/homeworks.png'

export const projectsData = [
    {
        id: '1',
        title: 'Homework Tasks',
        description: 'Technology stack: ReactJS, TypeScript, Redux, Axios, CSS',
        backgroundImage: `url(${homeworks})`,
        repoLink: 'https://github.com/Zouker/homeworks',
        demoLink: 'https://zouker.github.io/homeworks/'
    },
    {
        id: '2',
        title: 'Storybook of React components',
        description: 'Technology stack: ReactJS, TypeScript, Storybook',
        backgroundImage: `url(${storybook})`,
        repoLink: 'https://github.com/Zouker/examples',
        demoLink: 'https://zouker.github.io/examples/?path=/story/example-introduction--page'
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
        title: 'Todo List',
        description: 'Technology stack: ReactJS, TypeScript, Redux Toolkit, RestAPI, Axios, Redux-Thunk, Material UI, Unit testing, Storybook',
        backgroundImage: `url(${todoImage})`,
        repoLink: 'https://github.com/Zouker/todolist-trello',
        demoLink: 'https://zouker.github.io/todolist-trello/'
    },
    {
        id: '6',
        title: 'Social Network',
        description: 'Technology stack: ReactJS, TypeScript, Redux, RestAPI, Axios, Redux-Thunk, React-Router-Dom, Redux-Form, Formik, Ant Design',
        backgroundImage: `url(${socialImage})`,
        repoLink: 'https://github.com/Zouker/social_network',
        demoLink: 'https://zouker.github.io/social_network/'
    },
    {
        id: '7',
        title: 'Cards',
        description: 'Technology stack: ReactJS, TypeScript, Redux, Redux-Thunk, React-Router-Dom, Axios, Formik, Material UI',
        backgroundImage: `url(${cards})`,
        repoLink: 'https://github.com/Zouker/cards',
        demoLink: 'https://zouker.github.io/cards/'
    },
    {
        id: '8',
        title: 'Pizza-app',
        description: 'Technology stack: ReactJS, TypeScript, Redux Toolkit, Redux-Thunk, Axios',
        backgroundImage: `url(${pizza})`,
        repoLink: 'https://github.com/Zouker/pizza-app',
        demoLink: 'https://zouker.github.io/pizza-app/'
    },

    {
        id: '9',
        title: 'Learning Cards',
        description: 'Technology stack: ReactJS, TypeScript, Redux, Redux-Thunk, React-Router-Dom, Axios, Formik, Material UI',
        backgroundImage: `url(${learningCards})`,
        repoLink: 'https://github.com/Zouker/learning-cards',
        demoLink: 'https://zouker.github.io/learning-cards/'
    },
    {
        id: '10',
        title: 'GitHub User Search',
        description: 'Technology stack: ReactJS, TypeScript, React-Router-Dom, Axios, CSS',
        backgroundImage: `url(${githubUserSearch})`,
        repoLink: 'https://github.com/Zouker/github-app',
        demoLink: 'https://zouker.github.io/github-app/'
    },
    {
        id: '11',
        title: 'Websocket Chat',
        description: 'Technology stack: ReactJS, TypeScript, Redux, Redux-Thunk, Socket.io',
        backgroundImage: `url(${websocketChat})`,
        repoLink: 'https://github.com/Zouker/chat-websocket',
        demoLink: 'https://zouker.github.io/chat-websocket/'
    },
    {
        id: '12',
        title: 'Rick and Morty',
        description: 'Technology stack: ReactJS, TypeScript, Redux Toolkit, Redux-Thunk, React-Router-Dom, Axios, SASS',
        backgroundImage: `url(${rickAndMorty})`,
        repoLink: 'https://github.com/Zouker/rick-and-morty',
        demoLink: 'https://zouker.github.io/rick-and-morty/'
    },
    {
        id: '13',
        title: 'Movie Catalog',
        description: 'Technology stack: ReactJS, TypeScript, Redux, Redux-Thunk, Axios, CSS',
        backgroundImage: `url(${movieCatalog})`,
        repoLink: 'https://github.com/Zouker/movie-catalog',
        demoLink: 'https://zouker.github.io/movie-catalog/'
    },
    {
        id: '14',
        title: 'Weather App',
        description: 'Technology stack: ReactJS, TypeScript, Axios, CSS',
        backgroundImage: `url(${weatherApp})`,
        repoLink: 'https://github.com/Zouker/weather-app',
        demoLink: 'https://zouker.github.io/weather-app/'
    },
]