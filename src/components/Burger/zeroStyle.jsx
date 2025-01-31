import React, { useState } from 'react';
import styles from './zeroStyle.module.css'; // Create a new CSS file for this project
import { FiArrowLeft, FiArrowRight, FiFigma } from 'react-icons/fi';

const ZeroStyle = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const screenshots = [
    'shoe-cart.jpg',
    'shoe-listing.jpg',
    'shoe-detail.jpg',
    // Add more screenshot paths
  ];

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  return (
    <section className={styles.projectContainer}>
      <div className={styles.projectHeader}>
        <h1 className={styles.projectTitle}>Shoe Shopping Website</h1>
        <p className={styles.projectSubtitle}>UI/UX Design for an E-commerce Shoe Store</p>
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
                alt={`Shoe Shopping Screen ${index + 1}`}
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
            Designed a modern and user-friendly e-commerce website for a shoe store. The project
            includes key pages like the product listing, product details, and shopping cart,
            focusing on seamless navigation and intuitive user interactions.
          </p>
        </div>

        {/* Key Features */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Key Features</h2>
          <ul className={styles.featuresList}>
            <li>Product Listing Page with filters and sorting options</li>
            <li>Product Detail Page with high-quality images and size selection</li>
            <li>Shopping Cart Page with item summary and checkout options</li>
            <li>Responsive design for mobile and desktop</li>
          </ul>
        </div>

        {/* Design Process */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Design Process</h2>
          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <span className={styles.stepNumber}>1</span>
              <h3>Research</h3>
              <p>Analyzed competitor websites and user behavior in e-commerce.</p>
            </div>
            <div className={styles.processStep}>
              <span className={styles.stepNumber}>2</span>
              <h3>Wireframing</h3>
              <p>Created low-fidelity wireframes for all key pages.</p>
            </div>
            <div className={styles.processStep}>
              <span className={styles.stepNumber}>3</span>
              <h3>High-Fidelity Design</h3>
              <p>Designed pixel-perfect mockups in Figma.</p>
            </div>
          </div>
        </div>

        {/* Tools Used */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Tools Used</h2>
          <div className={styles.toolsGrid}>
            <div className={styles.toolCard}>
              <FiFigma className={styles.toolIcon} />
              <span>Figma</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={styles.ctaSection}>
          <a
            href="https://www.figma.com/prototype/..."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryCta}
          >
            <FiFigma /> View Figma Prototype
          </a>
        </div>
      </div>
    </section>
  );
};

export default ZeroStyle;