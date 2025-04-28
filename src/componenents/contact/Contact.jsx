import React, { useState } from 'react';
import './Contact.css';
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setResponseMessage('');

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xldbdbky', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setResponseMessage('Email sent successfully!');
        form.reset();
      } else {
        const result = await response.json();
        const error = result.error || 'Unknown error';
        alert(`Votre message n'as  pas été envoyer veuillez réessayer: ${error}`);
      }
    } catch (error) {
      alert(`Votre message n'as  pas été envoyer veuillez réessayer: ${error.message}`);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className='contact'>

    {/* <div className='contact2'></div> */}

      <h2>Let's talk !</h2>
      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineEmail className='contact-option__icon' />
            <h4>Email</h4>
            <h5>westonbossservice@gmail.com</h5>
            <a href="mailto:westonbossservice@gmail.com">send an email</a>
          </article>
          <article className="contact-option">
            <FaWhatsapp className='contact-option__icon' />
            <h4>WhatsApp</h4>
            <h5>+243 85 390 4905</h5>
          </article>
          <article className="contact-option">
            <FaLinkedin className='contact-option__icon' />
            <h4>Linkedin</h4>
            <h5>WESTON BOSS BUSINESS</h5>
            <a href=" https://cd.linkedin.com/in/westonboss-service-345031362 " target='_blank'>view our profil</a>
          </article>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="How can we help you?"
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="button btn-primary" disabled={isSending}>
            {isSending ? 'Sending...' : 'Envoyer'}
          </button>
        </form>
        {responseMessage && <p className="success-message">{responseMessage}</p>}
      </div>

    </section>
  );
}

export default Contact;
