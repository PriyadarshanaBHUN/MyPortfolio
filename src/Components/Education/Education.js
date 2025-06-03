import React from 'react';
import myDetails from '../../mydetails';
import './Education.css';
import Footer from '../Footer/Footer';

const Education = () => {
  return (
    <>
      <section className="education">
        <div className="education-container">
          <h2>Educational Qualifications</h2>
          {myDetails.Education.map((edu, index) => (
            <div key={index} className="education-card">
              <h3>{edu.degree}</h3>
              <p>{edu.institute}</p>
              <p>{edu.year}</p>
              <p>{edu.grade}</p>
            </div>
          ))}
        </div>

        <div className="certification-container">
          <h2>Other Certification</h2>
          {myDetails.Cetification.map((edu, index) => (
            <div key={index} className="certi-card">
              <h3>{edu.degree}</h3>
              <p>{edu.institute}</p>
              <p>{edu.year}</p>
              <p>{edu.grade}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Education;
