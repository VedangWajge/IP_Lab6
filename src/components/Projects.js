import React from 'react';
import './Projects.css'; // Import the CSS for styling

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-item">
        <h3>Gadget Green (SIH)</h3>
        <p>
          Gadget-Green is an innovative website designed to address the critical issue of electronic waste disposal. It serves as a one-stop solution for users looking to dispose of their E-Waste responsibly while educating them about the health impacts of improper disposal.
        </p>
        <p><strong>Technologies Used:</strong> HTML, CSS, Firebase, Google Maps APIs</p>
      </div>

      <div className="project-item">
        <h3>UI Expense Management</h3>
        <p>
          A website that allows users to store, update, and delete their monthly expenses.
        </p>
        <p><strong>Technologies Used:</strong> Flask, Python, HTML, CSS</p>
      </div>
    </section>
  );
};

export default Projects;
