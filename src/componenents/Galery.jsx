import React from 'react'
import './Galery.css';

const Galery = () => {
    return (
        <div className='service-page-service'>

            <h3>BIK TRADING SERVICE GALLERY</h3>
            <div className='service-page-service-img'>

                <figure>
                    <img src={process.env.PUBLIC_URL + '/Images/pump.jpg'} alt="" />
                    <figcaption>Pump</figcaption>

                </figure>
                <figure>
                    <img src={process.env.PUBLIC_URL + '/Images/valve.jpg'} alt="" />
                    <figcaption>Valves</figcaption>

                </figure>
                <figure>
                    <img src={process.env.PUBLIC_URL + '/Images/electrical.jpg'} alt="" />
                    <figcaption>Electrical</figcaption>

                </figure>
                <figure>
                    <img src={process.env.PUBLIC_URL + '/Images/flowmeter.jpg'} alt="" />
                    <figcaption>Flowmetter</figcaption>

                </figure>
                <figure>
                    <img src={process.env.PUBLIC_URL + '/Images/conveyor.jpg'} alt="" />
                    <figcaption>Conveyor belt</figcaption>

                </figure>
                <figure>
                    <img src={process.env.PUBLIC_URL + '/Images/Geomanta1.jpeg'} alt="" />
                    <figcaption>Geomembrane</figcaption>

                </figure>
                <figure>
                    <img src={process.env.PUBLIC_URL + '/Images/equipement.jpg'} alt="" />
                    <figcaption> Personals protective equipement</figcaption>

                </figure>
                <figure>
                    <img src={process.env.PUBLIC_URL + '/Images/pipe.jpg'} alt="" />
                    <figcaption>Plates and pipe</figcaption>

                </figure>
                <figure>
                    <img src={process.env.PUBLIC_URL + '/Images/image3.jpeg'} alt="" />
                    <div className='myfig'>
                        <div className='figure-div'>
                            <img src={process.env.PUBLIC_URL + '/Images/logobik.jpg'} alt="" />
                            <p>BIK TRADING</p>
                        </div>

                        <figcaption className='figcaption'>Latest Delivery</figcaption>
                    </div>
                </figure>
                <figure>
                    <img src={process.env.PUBLIC_URL + '/Images/image7.jpeg'} alt="" />
                    <div className='myfig'>
                        <div className='figure-div'>
                            <img src={process.env.PUBLIC_URL + '/Images/logobik.jpg'} alt="" />
                            <p>BIK TRADING</p>
                        </div>

                        <figcaption className='figcaption'>Latest Delivery</figcaption>
                    </div>
                </figure>
                <figure>
                    <img src={process.env.PUBLIC_URL + '/Images/image4.jpeg'} alt="" />
                    <div className='myfig'>
                        <div className='figure-div'>
                            <img src={process.env.PUBLIC_URL + '/Images/logobik.jpg'} alt="" />
                            <p>BIK TRADING</p>
                        </div>

                        <figcaption className='figcaption'>Latest Delivery</figcaption>
                    </div>



                </figure>


            </div>
        </div>


    )
}

export default Galery