import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Projects.module.css';
import fitlift from '../../assets/fitlift.png';
import burger from '../../assets/fresh-burger.png';

const projectData = [
    {
        id: 1,
        image: fitlift,
        title: "FitLift",
        description: "A fitness tracker app for workout enthusiasts.",
        link: "https://fitlift.example.com",
        moreInfo: "/fitlift"
    },
    {
        id: 2,
        image: burger,
        title: "Portfolio",
        description: "My personal portfolio website built with modern technologies.",
        link: "https://oshada.dev",
        techStack: ["React", "CSS Modules", "Vite"],
        moreInfo: "/burger"
    }
    // Add more projects here
];

function Projects() {
    const navigate = useNavigate();

    const handleMoreInfoClick = (link) => {
        navigate(link);
    };

    return (
        <section id="projects" className={styles.container}>
            <h1 className='section-title'>Projects</h1>
            <div className={styles.projects}>
                {projectData.map(project => (
                    <div key={project.id}>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit ${project.title}`}
                        >
                            <img className='hover' src={project.image} alt={project.title} />
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </a>
                        <button 
                            onClick={() => handleMoreInfoClick(project.moreInfo)}
                            className={styles.moreInfoButton}
                        >
                            More Info
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
