import './services.css';
import { AiOutlineArrowRight, AiOutlineDownload } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';

import {
    FaTools,
    FaCogs,
    FaCompress,
    FaThermometerHalf,
    FaVial,
    FaDesktop,
    FaHardHat,
    FaStream,
    FaAppleAlt,
    FaBroom
} from "react-icons/fa";

const services = [
    { icon: <FaTools />, label: "Electrical instrumentation" },
    { icon: <FaCogs />, label: "Mechanical motors & gearboxes" },
    { icon: <FaCompress />, label: "Mechanical seals & critical spare parts" },
    { icon: <FaThermometerHalf />, label: "Valves, pressure & temperature transmitters" },
    // { icon: <FaVial />, label: "Laboratory reagents" },
    { icon: <FaDesktop />, label: "IT Products & computers" },
    { icon: <FaHardHat />, label: "Personal protective equipment (PPE)" },
    { icon: <FaStream />, label: "Conveyor belt accessories" },
    { icon: <FaAppleAlt />, label: "Industrial-grade food supplies" },
    { icon: <FaBroom />, label: "Cleaning & maintenance services" },
];

function Services() {

    return(
    <div className="services-grid">
    {services.map((service, index) => (
        <div className="service-card" key={index}>
            <span className="service-icon">{service.icon}</span>
            <span className="service-label">{service.label}</span>
        </div>
    ))}
</div>
    )
    
}

export default Services;