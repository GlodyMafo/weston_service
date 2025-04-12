// Services.js
import React from 'react';
import Accordion from './Accordion';
import './Services.css'; // Ajoutez des styles spécifiques pour ce composant si nécessaire

const Services = () => {
  return (
    <div className="services">
      <h1 className="services-title">PRODUCTS & SERVICES</h1>
      <Accordion />
    </div>
  );
};

export default Services;
