import React, { useState } from 'react';
import './Contact.css';
import { FaPhone, FaEnvelope, FaLinkedin, FaFacebook, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import myDetails from '../../mydetails';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = (e) => {
  e.preventDefault();

  emailjs.send(
    'service_kqtqs0i',
    'template_2glxaya',
    formData,
    'nETCTfPa0dVoCy1yz'
  ).then(() => {
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: '', email: '', message: '' });
  }).catch(() => {
    alert("Message failed to send. Try again.");
  });
};

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <div className="contact-info">
          <p><FaPhone />{myDetails.phone}</p>
          <p><FaEnvelope /> <a href={myDetails.email}>udaranuwan0816@gmail.com</a></p>
          <p><FaLinkedin /> <a href={myDetails.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
          <p><FaFacebook /> <a href={myDetails.Facebook} target="_blank" rel="noopener noreferrer">Facebook Profile</a></p>
          <p><FaMapMarkerAlt /> {myDetails.location}</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
