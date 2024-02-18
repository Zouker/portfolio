import React from 'react';
import './index.css';
import './App.scss';
import {Header} from './header/Header';
import {Main} from './main/Main';
import {Skills} from './skills/Skills';
import {Projects} from './projects/Projects';
import {Remote} from './remote/Remote';
import {Contacts} from './contacts/Contacts';
import {Footer} from './footer/Footer';


function App() {
    const [isDark, setIsDark] = React.useState(true);

    return (
        <>
            <div className="App" data-theme={isDark ? 'dark' : 'light'}>
                <Header isDark={isDark} setIsDark={setIsDark}/>
                <Main/>
                <Skills/>
                <Projects/>
                <Remote/>
                <Contacts/>
                <Footer/>
            </div>
        </>
    );
}

export default App;
