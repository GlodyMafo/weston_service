import './Home.css';
import { AiOutlineArrowRight, AiOutlineDownload } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';


import Counters from '../UX/Counters';
import Services from '../UX/Services';


const PDF = process.env.PUBLIC_URL + './profil-weston-boss.pdf';


function Home() {

    return (
        <div className='home'>

            <section className='hero small'>

                <div className="hero-content">
                    <h1>WESTON BOSS SERVICE </h1>
                    <p>EST WESTON BOSS SERVICE is a Congolese company established in 2025, registered under number    CD/KNM/RCCM/25-A-05574 with tax identification number A2537691W
                        ID,NAT 01-S9502-N63324H.
                        <br />
                         Operating as a civil establishment, we specialize in the supply of high-performance industrial solutions tailored to the mining and heavy industry sectors</p>
                    <Link to="/Contact">
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
                    At EST WESTON BOSS SERVICE, we are driven by a commitment to quality, reliability, and speed. <br /> <br /> We partner with our clients to ensure they receive top-tier products and services—delivered efficiently and professionally.
                    <br /><br />
                    <strong>Whatever you name, we will supply !</strong>
                    
                    </p>
                    <Link to="/Services">
                    <button >Discover more</button>
                    </Link>
                </div>
            </section>



            <section className="services-container">
                <div className="services-header">
                    <h2 className='titre2'>Our Solutions</h2>
                    <p className="company-desc">
                        As a civil establishment, we provide high-performance industrial solutions for our clients and they are satisfaction.
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
