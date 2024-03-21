import React from 'react';

function Reason({ src, alt, title, subtitle }) {
  return (
    <div className="feature-item">
      <img src={src} alt={alt} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
}

export default Reason;