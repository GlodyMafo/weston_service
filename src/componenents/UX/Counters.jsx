import React, { useEffect, useState } from "react";
import "./Counters.css";

const countersData = [
  { label: "Months of Experience", value: 6 },
  { label: "Projects Delivered", value: 250 },
  { label: "Satisfied Clients", value: 53 },
  { label: "Partners Worldwide", value: 15 },
];

const Counter = ({ value, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1500;
    const incrementTime = 20;
    const step = Math.ceil(end / (duration / incrementTime));

    const counter = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(start);
    }, incrementTime);

    return () => clearInterval(counter);
  }, [value]);

  return (
    <div className="counter-card">
      <span className="counter-number">{count}+</span>
      <p className="counter-label">{label}</p>
    </div>
  );
};

const Counters = () => {
  return (
    <section className="counters-section" >
      <div className="counters-header">
        <h2 className="counters-title">Our Achievements</h2>
        <p className="counters-description">
          At EST WESTON BOSS SERVICE, our dedication to excellence has led to remarkable results.
          Here's a glimpse of what we’ve accomplished over the months.
        </p>
      </div>
      <div className="counters-wrapper">
        {countersData.map((item, index) => (
          <Counter key={index} value={item.value} label={item.label} />
        ))}
      </div>
    </section>
  );
};

export default Counters;
