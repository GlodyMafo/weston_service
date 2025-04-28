// Services.js
import React, { useState } from 'react';
// import "./ProductList.css";
import './Services.css'; // Ajoutez des styles spécifiques pour ce composant si nécessaire

// import React,  from "react";
// import "./ProductList.css";
// import './product.css'

const productsData = [
  {
    id: 1,
    name: "TOYOTA FORKLIFT",
    type: "tech",
    image: "/Images/products/1.jpg",
  },
  {
    id: 2,
    name: "DISC CUTTING",
    type: "tech",
    image: "/Images/products/4.jpg",
  },
  {
    id: 3,
    name: "PUMP",
    type: "tech",
    image: "/Images/products/7.png",
  },
  {
    id: 4,
    name: "CONVEYOR",
    type: "tech",
    image: "/Images/products/11.jpg",
  },
  {
    id: 5,
    name: "FILTER",
    type: "tech",
    image: "/Images/products/13.jpg",
  }, 
  {
    id: 6,
    name: "WELDING MACHINE",
    type: "tech",
    image: "/Images/products/maxresdefault.jpg",
  },
  {
    id: 7,
    name: "PIPE GALVANIZED",
    type: "tech",
    image: "/Images/products/WhatsApp Image 2025-04-26 à 01.17.26_d910a950.jpg",
  },
  {
    id: 8,
    name: "COMPUTER",
    type: "IT",
    image: "/Images/products/IMG_0224.PNG",
  },
  {
    id: 9,
    name: "IT COMPUTER",
    type: "IT",
    image: "https://img.freepik.com/photos-premium/ecran-ordinateur-clavier-ordinateur-portable_972324-99400.jpg?uid=R133206601&ga=GA1.1.1257039164.1736001264&semt=ais_hybrid&w=740",
  },
  {
    id: 10,
    name: "IT COMPUTER",
    type: "IT",
    image: "https://img.freepik.com/photos-premium/ensemble-pieces-ordinateur-isole-blanc_392895-238215.jpg?uid=R133206601&ga=GA1.1.1257039164.1736001264&semt=ais_hybrid&w=740",
  },
  {
    id: 11,
    name: "SAFETY T-SHIRT",
    type: "safety",
    image: "/Images/products/IMG_0219.WEBP",
  },
  {
    id: 12,
    name: "SAFETY VEST",
    type: "safety",
    image: "/Images/products/IMG_0221.WEBP",
  },
  {
    id: 13,
    name: "SLEEVELESS JACKET",
    type: "safety",
    image: "/Images/products/IMG_0222.PNG",
  },
  {
    id: 14,
    name: "SAFETY BOOTS",
    type: "safety",
    image: "/Images/products/IMG_0217.PNG",
  },
  {
    id: 15,
    name: "FIRE EXTINGUISHER",
    type: "safety",
    image: "/Images/products/IMG_0214.PNG",
  },
  {
    id: 16,
    name: "GLOVES",
    type: "safety",
    image: "/Images/products/IMG_0215.PNG",
  },
  {
    id: 17,
    name: "SAFETY GLASSES",
    type: "safety",
    image: "/Images/products/IMG_0216.PNG",
  },
  {
    id: 18,
    name: "REFLECTIVE PAINT",
    type: "safety",
    image: "/Images/products/IMG_0223.PNG",
  },
  {
    id: 19,
    name: "CLEANING",
    type: "services",
    image: "/Images/products/IMG_0211.JPG",
  },
  {
    id: 20,
    name: "MAINTENANCE",
    type: "services",
    image: "/Images/products/IMG_0212.PNG",
  },
  {
    id: 21,
    name: "MAINTENANCE",
    type: "services",
    image: "/Images/products/IMG_0213.PNG",
  },
  {
    id: 22,
    name: "ALL KIND OF LUBRICANT & AND OIL",
    type: "tech",
    image: "/Images/products/WhatsApp Image 2025-04-26 à 02.41.41_bf296fd6.jpg",
  }, 
];

const Services = () => {

  const [filter, setFilter] = useState("all");

  const filteredProducts =
    filter === "all"
      ? productsData
      : productsData.filter((p) => p.type === filter);



  return (
    <div className="services">
      <h1 className="services-title">Product and Services</h1>

      {/* <Accordion /> */}
      <div className="product-container">
        <div className="button-group">
          <button onClick={() => setFilter("all")}>All</button>
          <button onClick={() => setFilter("tech")}>Industrial Equipment</button>
          <button onClick={() => setFilter("IT")}> IT & Technology</button>
          <button onClick={() => setFilter("safety")}>Safety & Protection</button>
          <button onClick={() => setFilter("services")}> Facility Supplies & Services</button>
        </div>

        <div className={`product-list ${filter}`}>
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
