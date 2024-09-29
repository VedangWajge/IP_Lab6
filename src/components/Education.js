import React from 'react';
import './Education.css'; // Import the CSS for styling

const Education = () => {
  return (
    <section className="education">
      <h2>Education</h2>
      <div className="education-item">
        <h3>B.E. Information Technology</h3>
        <p>Vivekanand Education Society’s Institute of Technology (CGPA: 8.5) | 2022 - 2026</p>
      </div>
      <div className="education-item">
        <h3>HSC</h3>
        <p>K.J. Somaiya College, Vidyavihar | 2020 - 2022</p>
        <p>Score: 7.0/10</p>
      </div>
      {/* You can add more education items here if needed */}
    </section>
  );
};

export default Education;
