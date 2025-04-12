import React from 'react';

const GalleryItem = ({ image, title, description,  logo }) => {
  return (
    <div className="gallery-item">
      <img src={image} alt={title} className="item-image" />
      <div className="gallery-info">
        {logo && <img src={logo} alt="Logo" className="item-logo" />}
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default GalleryItem;
