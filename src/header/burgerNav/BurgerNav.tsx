import React, {useState} from 'react';
import styles from './BurgerNav.module.scss'
import {Link} from 'react-scroll';
import {Turn as Hamburger} from 'hamburger-react'


export const BurgerNav = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    return (
        <div className={styles.burgerNav}>
            <div className={menuIsOpen ? `${styles.burgerNavItems} ${styles.show}` : styles.burgerNavItems}>
                <Link
                    activeClass={styles.active}
                    to="main"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                >Main</Link>
                <Link
                    activeClass={styles.active}
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                >Skills</Link>
                <Link
                    activeClass={styles.active}
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                >Projects</Link>
                <Link
                    activeClass={styles.active}
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                >Contacts</Link>
            </div>
            <div className={styles.burgerBtn}>
                <Hamburger color="#4e93e6" size={30} toggled={menuIsOpen} toggle={setMenuIsOpen}/>
            </div>
        </div>
    );
};