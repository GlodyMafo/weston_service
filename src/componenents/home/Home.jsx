import './Home.css';
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
import Counters from '../UX/Counters';


const PDF = process.env.PUBLIC_URL + '/Images/COMPANY PROFILE BIK T.pdf';

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


function Home() {

    return (
        <div>

            <section className='hero'>

                <div className="hero-content">
                    <h1>WESTON BOSS SERVICE .</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni placeat eum unde l Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ex incidunt fugit quos quas cupiditate! abore nesciunt sequi quidem vel eligendi, veniam sint libero commodi eveniet! Sit nam asperiores deleniti possimus. Neque, laboriosam.</p>

                    <Link to="/Services">
                        <button className='btn'>Let's Start</button>
                    </Link>
                </div>

                <img src={process.env.PUBLIC_URL + '/Images/homebg.jpg'} alt="" />

            </section>


            <section className="who-we-are">
                <div className="images-section">
                    <div className="image-grid">
                        <img src="Images/abts1.jpg" alt="Professional woman" className="img1" />
                        <img src="Images/abts3.jpg" alt="Teamwork" className="img2" />
                        <img src="Images/abts2.jpg" alt="Businesswoman" className="img3" />
                        <img src="Images/abts4.jpg" alt="Discussion" className="img4" />
                    </div>
                </div>

                <div className="text-section">
                    <h2 className='titre2'>About Weston Boss</h2>
                    <p className="description">
                        ITM SARL is a leading provider of Human Resource solutions, offering tailored
                        services across 18 countries in Africa. We specialize in recruitment, payroll
                        management, performance optimization, and employee training, helping businesses
                        enhance their workforce and operational efficiency.
                        <br /><br />
                        As part of ITM Holding, we leverage the resources and expertise of a pan-African
                        conglomerate to deliver compliant and effective solutions that support long-term
                        business success. With a strong focus on operational excellence and employee
                        development, ITM SARL is your trusted partner for sustainable growth.
                    </p>
                    <button >Discover more</button>
                </div>
            </section>



            <section className="services-container">
                <div className="services-header">
                    <h2 className='titre2'>Our Solutions</h2>
                    <p className="company-desc">
                        As a civil establishment, we provide high-performance industrial solutions for the mining and heavy industry sectors.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div className="service-card" key={index}>
                            <span className="service-icon">{service.icon}</span>
                            <span className="service-label">{service.label}</span>
                        </div>
                    ))}
                </div>

                <div className="slogan-section">
                    <span className="slogan-label">Our Slogan</span>
                    <h3 className="slogan">“Name it and we will supply.”</h3>
                </div>
            </section>


            <Counters />





            <div className="home-page-pdf">
                <div className="home-page-pdf-div">
                    <h2>Download our profile </h2>
                    <a href={PDF} download className='pdf'>
                        Download pdf
                        <AiOutlineDownload className='download-icon' />
                    </a>

                </div>

            </div>

        </div>
    )
}

export default Home;
