import React from 'react';
import styles from './Hero.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import linkdinLight from '../../assets/linkedin-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkdinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Oshada Perera.pdf';
import { useTheme } from '../../common/themeContext';

export default function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light'? sun:moon; 
    const githubIcon = theme === 'light'? githubLight:githubDark; 
    const linkdinIcon = theme === 'light'? linkdinLight:linkdinDark; 
    return (
        <section id="hero" className={`${styles.container} ${styles[theme]}`}> {/* Use theme to apply classes */}
            <div className={styles.colorModeContainer}>
                <img
                    className={styles.heroImg}
                    src={heroImg}
                    alt="profile"
                />
                <img
                    className={styles.themeIcon}
                    src={themeIcon}
                    alt="theme icon"
                    onClick={toggleTheme} // Toggling the theme
                />
            </div>

            <div className={styles.textContainer}>
                <h1>
                    Oshada <br /> Navindra
                </h1>
                <h2>Frontend Developer</h2>
                <span className='socialIcons'>
                    <a href="https://github.com/OshadaX" target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="github icon" />
                    </a>
                    <a href="www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src={linkdinIcon} alt="linkedin icon" />
                    </a>
                </span>

                <p>
                    I am a Frontend Developer with a passion for creating beautiful and functional websites. I love to learn new technologies and improve my skills.
                </p>

                <a href={CV} download={true}>
                    <button className="hover">Resume</button>
                </a>
            </div>
        </section>
    );
}
