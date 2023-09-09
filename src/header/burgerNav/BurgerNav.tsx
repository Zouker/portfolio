import React, {useState} from 'react';
import styles from './BurgerNav.module.scss'
import {Link} from 'react-scroll';
import {Turn as Hamburger} from 'hamburger-react'


export const BurgerNav = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const [activeIndex, setActiveIndex] = useState(0)

    const links = ['Main', 'Skills', 'Projects', 'Contacts'];
    const href = ['main', 'skills', 'projects', 'contacts']

    const handleOnClick = (index: number) => {
        setActiveIndex(index);
        setMenuIsOpen(false);
    };

    const link = links.map((el, index) => {
        return (
            <Link
                key={index}
                to={href[index]}
                onClick={() => handleOnClick(index)}
                className={activeIndex === index ? styles.active : ''}
            >
                {el}
            </Link>
        );
    });

    return (
        <div className={styles.burgerNav}>
            <div className={menuIsOpen ? `${styles.burgerNavItems} ${styles.show}` : styles.burgerNavItems}>
                {link}
            </div>
            <div className={styles.burgerBtn}>
                <Hamburger color="#4e93e6"
                           size={30}
                           toggled={menuIsOpen}
                           toggle={() => setMenuIsOpen(!menuIsOpen)}
                           onToggle={toggled => {
                               if (toggled) {
                                   setMenuIsOpen(true)
                               } else {
                                   setMenuIsOpen(false)
                               }
                           }}
                />
            </div>
        </div>
    );
};