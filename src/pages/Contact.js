// 📌 Frontend - src/pages/Contact.js
import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" onChange={handleChange} required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};
export default Contact;