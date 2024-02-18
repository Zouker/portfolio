import React from 'react';
import styles from './Header.module.scss'
import {Nav} from './nav/Nav';
import {BurgerNav} from './burgerNav/BurgerNav';

type PropsType = {
    isDark: boolean;
    setIsDark: (e: boolean) => void;
}

export const Header = ({isDark, setIsDark}: PropsType) => {

    return (
        <div className={styles.header}>
            <div className={styles.toggleButton}>
                <input type={'checkbox'} id={'toggle'} checked={isDark} onChange={(e) => setIsDark(e.target.checked)}/>
                <label htmlFor='toggle'>
                    <svg className={styles.sun} width="800px" height="800px" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.69L4.8999 19.1042M17.6859 17.69L19.1001 19.1042M22 12H20M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"
                            stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <svg className={styles.moon} width="800px" height="800px" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z"
                            stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </label>
            </div>
            <Nav/>
            <BurgerNav/>
        </div>
    );
};