import './Home.css';
import { AiOutlineArrowRight, AiOutlineDownload } from "react-icons/ai";
import { Link } from 'react-router-dom';

import Counters from '../UX/Counters';
import Services from '../UX/Services';

const PDF = process.env.PUBLIC_URL + './profil-weston-boss.pdf';

function Home() {
    return (
        <div className='home'>
            <section className='hero small'>
                <div className="hero-content">
                    <h1>WESTON BOSS SERVICE</h1>
                    <p>
                        As a civil establishment, we deliver high-performance industrial solutions tailored to the mining and heavy industry sectors.
                    </p>
                    <Link to="/Contact">
                        <button className='btn'>Get Started</button>
                    </Link>
                </div>
                <img src={process.env.PUBLIC_URL + '/Images/homebg.jpg'} alt="Industry background" />
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
                        EST WESTON BOSS SERVICE is a Congolese company founded in 2025, registered under CD/KNM/RCCM/25-A-05574 with the tax ID A2537691W and national ID 01-S9502-N63324H.
                        <br /><br />
                        We are committed to delivering quality, reliability, and speed. Our clients trust us for our professionalism and efficient service.
                        <br /><br />
                        <strong>Whatever you need, we supply it!</strong>
                    </p>
                    <Link to="/Services">
                        <button>Learn More</button>
                    </Link>
                </div>
            </section>

            <section className="services-container">
                <div className="services-header">
                    <h2 className='titre2'>Our Solutions</h2>
                    <p className="company-desc">
                        We offer robust, high-performance industrial solutions designed to meet the evolving needs of our clients—with their satisfaction as our top priority.
                    </p>
                </div>

                <Services />

                <div className="slogan-section">
                    <span className="slogan-label">Our Slogan</span>
                    <h3 className="slogan">“Empowering Industry. Delivering Excellence.”</h3>
                </div>
            </section>

            <Counters />

            <div className="home-page-pdf">
                <div className="home-page-pdf-div">
                    <a href={PDF} download className='pdf'>
                        <h2>Download Our Company Profile</h2>
                        <AiOutlineDownload className='download-icon' />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;
