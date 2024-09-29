import React from 'react';
import './Skills.css'; // Import the CSS for styling

const Skills = ({ skills = [] }) => {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <h3>{skill}</h3>
            {/* Add an optional icon for each skill */}
            <i className="skill-icon">⭐</i> {/* You can replace this with any icon */}
            <p>Description of {skill} (optional)</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
