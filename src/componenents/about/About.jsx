import './About.css';
import Section from './Section';

const About = () => {
  return (
    <section>
      <div className='about-page'>
        <div className='about-us-page'>

        </div>
        <div className='about-page__item'>

          <h2 className='titre'>ABOUT BIK TRADING</h2>
          <p>BIK TRADING SERVICE was Incorporated as a congolese company in the year 2021CD/LSH/RCCM/22-B-01930,
          Tax registration number A22065951, I.D, NAT 05-F4200-N05832T as a Clvil Construction company and supplier of various industrial products i.e. </p>
        <p> Founded several years ago, we have grown to become a global leader in the mining industry, expanding our operations across multiple continents.</p>
        <p>Our performance-oriented culture and responsible approach from the foundations of our business depends on our creativity,dedication and performance</p>
        </div>
        <Section title="OUR VISION">
          <p className='paragraphe'>
          We strive to be the most trusted supplier in Drc of quality industrial, safety,surveillance products and services          </p>
         
        </Section>
        <Section title="SERVICES">
          <p className='paragraphe'>
          In order to meet the demands of our diverse client base we offer a Total Solution to meet our clients needs :          </p>
          <ul>
            <li className='list'>Civil</li>
            <li className='list'>Pump</li>
            <li className='list'>Valves</li>
            <li className='list'>Electrical</li>
            <li className='list'>Instrumentation</li>
            <li className='list'>Convoyor Belt</li>
            <li className='list'>Geomembrane</li>
            <li className='list'>Personal Equipment</li>
            <li className='list'>Crucher</li>
            <li className='list'>Plates and pipe</li>
          </ul>
         
        </Section>
        

        


      </div>

    </section>

  )
}

export default About