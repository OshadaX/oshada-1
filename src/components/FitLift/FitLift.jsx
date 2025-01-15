import React from 'react';
import styles from './FitLift.module.css';
import fitliftMockup from '../../assets/fitlift.png';
import screenshot1 from '../../assets/screenshot1.png';
import screenshot2 from '../../assets/screenshot2.png';
import screenshot3 from '../../assets/screenshot3.png';
import screenshot4 from '../../assets/screenshot4.png';
import screenshot5 from '../../assets/screenshot5.png';

function FitLift() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>FitLift</h1>
      <p className={styles.description}>
        FitLift is a modern workout app designed for fitness enthusiasts. This UI/UX design project focuses on creating an intuitive and visually appealing interface for tracking workouts, managing schedules, and analyzing fitness progress.
      </p>
      <img 
        src={fitliftMockup} 
        alt="FitLift UI/UX Design Mockup" 
        className={styles.mockup}
      />
      <h2 className={styles.subheading}>Screenshots</h2>
      <div className={styles.gallery}>
        <img src={screenshot1} alt="Screenshot 1" className={styles.screenshot} />
        <img src={screenshot2} alt="Screenshot 2" className={styles.screenshot} />
        <img src={screenshot3} alt="Screenshot 3" className={styles.screenshot} />
        <img src={screenshot4} alt="Screenshot 4" className={styles.screenshot} />
        <img src={screenshot5} alt="Screenshot 5" className={styles.screenshot} />
      </div>
      <p className={styles.details}>
        The design process included:
        <ul>
          <li>Conducting user research to understand the needs of fitness enthusiasts.</li>
          <li>Creating wireframes and interactive prototypes in Figma.</li>
          <li>Ensuring accessibility and usability throughout the app interface.</li>
          <li>Focusing on a clean and modern aesthetic to engage users.</li>
        </ul>
      </p>
      <a 
        href="https://figma.com/your-project-link" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.cta}
      >
        View Figma Design
      </a>
    </div>
  );
}

export default FitLift;