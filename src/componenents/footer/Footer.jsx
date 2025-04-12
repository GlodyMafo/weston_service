// Footer.js
import './Footer.css';
import { Link, useNavigate } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-section company-info">
                    <h4>BIK TRADING OFFICE</h4>
                    <ul className='adress-list'>
                        <p>Physical adress:</p>
                        <div>
                            <li>45, Route du Golf,Q/ Golf Fina C/ Lubumbashi</li>
                        </div>

                    </ul>

                    <ul className="email-list">
                        <p>Email:</p>
                        <div className="email-list-li">
                            <li>Info@biktradingservice.com</li>
                            <li>biktradingservice@gmail.com</li>
                        </div>

                    </ul>
                    <ul className="phone-list">
                        <p>Tel: </p>
                        <div className="phone-list-li">
                            <li>(+243) 997 595 555</li>
                            <li>(+243) 824 663 434</li>
                        </div>

                    </ul>
                </div>
                <div className="footer-section social-media">
                    <h4 className='social-media-title'>Follow Us</h4>
                    <a href="https://" className="footer-link">Linkedin</a>


                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2022 Bik Trading Sarl. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
