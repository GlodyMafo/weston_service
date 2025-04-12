// Accordion.js
import  { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Accordion.css';

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

const Accordion = () => {
  return (
    <div className="accordion">
      <AccordionItem title="EXPLOITATION">
        <ul>
          <li className='list'>Laboratory Equipment</li>
          <li className='list'>Geological Tools</li>
          <li className='list'>Core Trays and Saws</li>
          <li className='list'>Marking Products</li>
          <li className='list'>Survey Equipment</li>
          <li className='list'>Flagging Tape</li>
          <li className='list'>Geographical Equipment</li>
          <li className='list'>PVC Bore Casting </li>
          <li className='list'>Saftey Equipment</li>
          <li className='list'>Drilling Equipment</li>
          <li className='list'>Field Tools</li>

          {/* Add more list items as needed */}
        </ul>
      </AccordionItem>
      <AccordionItem title="DRILLING">
        <ul>
        <li className='list'>Details about accommodation...</li>
          <li className='list'>Drill Bits</li>
          <li className='list'>Drill Castings</li>
          <li className='list'>Splitters</li>
          <li className='list'>Drill pipe</li>
          <li className='list'>Core Trays</li>
          <li className='list'> Boosters and Compressors</li>
          <li className='list'>Drill Rig Consumables</li>
          <li className='list'>Drill Rods</li>
          <li className='list'>Drilling Lubricants</li>
          
          {/* Add more list items as needed */}
        </ul>
      </AccordionItem>
      <AccordionItem title="ACCOMMODATION">
        <ul>
        <li className='list'>Air Conditioning</li>
          <li className='list'>Electric Goods</li>
          <li className='list'>Furniture</li>
          <li className='list'>First Aid Equipment</li>
          <li className='list'>Fire lighting Equipment</li>
        

          {/* Add more list items as needed */}
        </ul>
      </AccordionItem>
      <AccordionItem title="CONSTRUCTION - MAINTENANCE">
        <ul>
        <li className='list'>Welding Equipment</li>
          <li className='list'>Rubber products</li>
          <li className='list'>General Machinery</li>
          <li className='list'>Power Transmission Equipment</li>
          <li className='list'>Electrical Equipment</li>
          <li className='list'>Abrasives</li>
          <li className='list'>Pipe and Fittings
          </li>
          <li className='list'>Lubricants </li>
          <li className='list'>Tools</li>
          <li className='list'>Generators</li>

          {/* Add more list items as needed */}
        </ul>
      </AccordionItem>
      <AccordionItem title="MINING">
        <ul>
        <li className='list'>De-Watering Pumps
        </li>
          <li className='list'>Lighting Towers</li>
          <li className='list'>Safetey Equipment</li>
          <li className='list'>Filters</li>
          <li className='list'>Mobile Equipment</li>
          <li className='list'>Ground Engaging Tools</li>
          <li className='list'>Steel and Pipe </li>
          <li className='list'>Light Vehicles and Service Vehicles</li>
          <li className='list'>Survey Equipment</li>
          <li className='list'>Hydraulic Hose and fittings</li>
          
          {/* Add more list items as needed */}
        </ul>
      </AccordionItem>
      <AccordionItem title="PERSONAL PROTECTION EQUIPMENT - PPE">
        <ul>
        <li className='list'>Hearing Protection</li>
          <li className='list'>Face and Eye</li>
          <li className='list'>Footwear</li>
          <li className='list'>Face and Eye</li>
          <li className='list'>Head Protection</li>
          <li className='list'>Clothing</li>
         
          {/* Add more list items as needed */}
        </ul>
      </AccordionItem>
      <AccordionItem title="MINERAL PROCESSING">
        <ul>
        <li className='list'>Water Treatment</li>
          <li className='list'>Chemicals and Reagents</li>
          <li className='list'>Conveyors
          </li>
          <li className='list'>Lubricants</li>
          <li className='list'>Screens</li>
          <li className='list'>Lifting Equipment</li>
          <li className='list'>Water Treatment</li>
          <li className='list'> Material Handling Hose</li>
          <li className='list'>Mill Lining and Spares</li>
          <li className='list'>Gear Boxes</li>
          <li className='list'>Valves and pipe</li>
          {/* Add more list items as needed */}
        </ul>
      </AccordionItem>
      <AccordionItem title="ADMINISTRATION">
        <ul>
        <li className='list'>Computers</li>
          <li className='list'>Stationary</li>
          <li className='list'>Uniforms and Protective Clothing</li>
          <li className='list'>Janitorial Supplies</li>
          <li className='list'> Saftey Equipment</li>
          <li className='list'>Uniforms and Protective Clothing</li>
          <li className='list'>First Aid Equipment</li>
        </ul>
      </AccordionItem>
    </div>
  );
};

export default Accordion;
