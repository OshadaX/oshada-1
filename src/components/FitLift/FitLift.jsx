import React from 'react';
import styles from './FitLift.module.css';
import fitliftMockup from '../../assets/fitlift.png';
import screenshot1 from '../../assets/screenshot1.png';
import screenshot2 from '../../assets/screenshot2.png';
import screenshot3 from '../../assets/screenshot3.png';
import screenshot4 from '../../assets/screenshot4.png';
import screenshot5 from '../../assets/screenshot5.png';
import screenshot6 from '../../assets/screenshot6.png';

function FitLift() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const screenshots = [
    screenshot1,
    screenshot2,
    screenshot3,
    screenshot4,
    screenshot5,
    screenshot6
  ];

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? screenshots.length - 1 : prevSlide - 1));
  };

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide === screenshots.length - 1 ? 0 : prevSlide + 1));
  };

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
      <div className={styles.sliderContainer}>
        <button className={styles.prevBtn} onClick={handlePrevClick}>
          &#10094;
        </button>
        <div className={styles.slider}>
          <img
            src={screenshots[currentSlide]}
            alt={`Screenshot ${currentSlide + 1}`}
            className={styles.screenshot}
          />
        </div>
        <button className={styles.nextBtn} onClick={handleNextClick}>
          &#10095;
        </button>
      </div>

      <div className={styles.details}>
        <p>The design process included:</p>
        <ul>
          <li>Conducting user research to understand the needs of fitness enthusiasts.</li>
          <li>Creating wireframes and interactive prototypes in Figma.</li>
          <li>Ensuring accessibility and usability throughout the app interface.</li>
          <li>Focusing on a clean and modern aesthetic to engage users.</li>
        </ul>
      </div>
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
