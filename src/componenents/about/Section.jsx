import './Section.css';


const Section = ({ title, children }) => {
  return (
    <section className="about-section">
      <h2>{title}</h2>
      <div className="section-content">
        {children}
      </div>
    </section>
  );
}

export default Section;