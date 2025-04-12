import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Accordion.css'; // Assurez-vous de créer ce fichier CSS

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={toggleOpen}>
        <span>{isOpen ? '▼' : '▶'}</span>
        <h3>{title}</h3>
      </div>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="accordion-content"
        unmountOnExit
      >
        <div className="accordion-content">
          {children}
        </div>
      </CSSTransition>
    </div>
  );
};