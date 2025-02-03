import React, { useState } from 'react';
import styles from './FitLift.module.css';
import { FiArrowLeft, FiArrowRight, FiFigma, FiGithub } from 'react-icons/fi';
import sc1 from '../../assets/screenshot1.png';
import sc2 from '../../assets/screenshot2.png';
import sc3 from '../../assets/screenshot3.png';
import sc4 from '../../assets/screenshot4.png';

const FitLiftProject = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const screenshots = [sc1, sc2, sc3, sc4];

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  return (
    <section className={styles.projectContainer}>
      <div className={styles.projectHeader}>
        <h1 className={styles.projectTitle}>FitLift</h1>
        <p className={styles.projectSubtitle}>Fitness Tracking Mobile App</p>
        <div className={styles.projectMeta}>
          <span className={styles.projectRole}>UI/UX Designer</span>
          <span className={styles.projectDate}>2023</span>
        </div>
      </div>

      {/* Image Slider */}
      <div className={styles.sliderContainer}>
        <button className={styles.sliderArrow} onClick={handlePrevSlide}>
          <FiArrowLeft />
        </button>

        <div className={styles.sliderTrack} style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
          {screenshots.map((src, index) => (
            <div key={index} className={styles.slide}>
              <img
                src={src}
                alt={`FitLift Screen ${index + 1}`}
                className={styles.slideImage}
              />
            </div>
          ))}
        </div>

        <button className={styles.sliderArrow} onClick={handleNextSlide}>
          <FiArrowRight />
        </button>

        <div className={styles.sliderDots}>
          {screenshots.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === activeSlide ? styles.activeDot : ''}`}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
      </div>

      <div className={styles.projectContent}>
        {/* Overview Section */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Project Overview</h2>
          <p className={styles.sectionText}>
            Designed a modern fitness tracking app focusing on workout logging, progress visualization,
            and social features. Conducted user research and created high-fidelity prototypes.
          </p>
        </div>

        {/* Design Process */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Design Process</h2>
          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <span className={styles.stepNumber}>1</span>
              <h3>Research & Discovery</h3>
              <p>User interviews, competitive analysis, persona creation</p>
            </div>
            <div className={styles.processStep}>
              <span className={styles.stepNumber}>2</span>
              <h3>Wireframing</h3>
              <p>Low-fidelity flows, user journey mapping</p>
            </div>
            <div className={styles.processStep}>
              <span className={styles.stepNumber}>3</span>
              <h3>Visual Design</h3>
              <p>UI components, design system, high-fidelity mockups</p>
            </div>
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Tools Used</h2>
          <div className={styles.toolsGrid}>
            <div className={styles.toolCard}>
              <FiFigma className={styles.toolIcon} />
              <span>Figma</span>
            </div>
            <div className={styles.toolCard}>
              <img src="adobe-xd.svg" alt="Adobe XD" className={styles.toolIcon} />
              <span>Adobe XD</span>
            </div>
            <div className={styles.toolCard}>
              <img src="miro.svg" alt="Miro" className={styles.toolIcon} />
              <span>Miro</span>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className={styles.ctaSection}>
          <a
            href="https://www.figma.com/prototype/..."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryCta}
          >
            <FiFigma /> View Figma Prototype
          </a>
          <a
            href="https://github.com/..."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryCta}
          >
            <FiGithub /> View Case Study
          </a>
        </div>
      </div>
    </section>
  );
};

export default FitLiftProject;