import React from 'react';
import myDetails from '../../mydetails';
import './Extras.css';
import Footer from '../Footer/Footer';

const Extras = () => {
  return (
    <>
        <section className="extras">
          <div className="extras-container">
            <h2>Extra Curricular Activities</h2>
            {myDetails.ExtraCurriculars.map((item, index) => (
              <div key={index} className="extras-card">
                <h3>{item.title}</h3>
                <p>{item.event}</p>
                <p>{item.description}</p>
                <p>{item.year}</p>
              </div>
            ))}
          </div>
        </section>
      <Footer />
    </>
  );
};

export default Extras;
