import React from 'react'
import styles from './Skills.module.css'

function Skills() {
  return (
    <section id='skills' className={styles.skills}>
      <h1>Skills</h1>
      <div className={styles.skillsList}>
        <div className={styles.skill}>
          <h3>Frontend Development</h3>
          <p>HTML, CSS, JavaScript, React, Next.js</p>
        </div>
        <div className={styles.skill}>
          <h3>Backend Development</h3>
          <p>Node.js, Express, MongoDB</p>
        </div>
        <div className={styles.skill}>
          <h3>Data Analytics</h3>
          <p>Python, Pandas, SQL, Power BI</p>
        </div>
        <div className={styles.skill}>
          <h3>Project Management</h3>
          <p>Agile, Scrum, Jira, Trello</p>
        </div>
      </div>
    </section>
  )
}

export default Skills
