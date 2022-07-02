import React from 'react';
import styles from './Main.module.scss'
import Particles from 'react-tsparticles';
import ReactTypingEffect from 'react-typing-effect';
// @ts-ignore
import Tilt from 'react-tilt'

const Fade = require('react-reveal/Fade')

const particlesOptions = {
    particles: {
        color: {
            value: 'blue',
        },
        links: {
            color: '#4e93e6',
            distance: 200,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        collisions: {
            enable: true,
        },
        move: {
            enable: true,
            random: false,
            speed: 2,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                value_area: 1000,
            },
            value: 150,
        },
        opacity: {
            value: 0.7,
        },
        shape: {
            type: 'circle',
        },
    },
}

export const Main = () => {
    return (
        <div id={'main'} className={styles.mainBlock}>
            <Particles className={styles.particles} params={particlesOptions}/>
            <div className={styles.container}>
                <Fade left>
                    <div className={styles.greeting}>
                        <span>Hi There</span>
                        <span>I am Denis <span>Shubin</span></span>
                        <span> <ReactTypingEffect text={'Front-end Developer'}/></span>
                    </div>
                </Fade>
                <Fade right>
                    <Tilt className="Tilt" options={{max: 35, transition: true, speed: 300, easing: "cubic-bezier(.03,.98,.52,.99)"}}>
                        <div className={styles.photo}>
                            <div className={styles.image}>
                            </div>
                        </div>
                    </Tilt>
                </Fade>
            </div>

        </div>
    );
};