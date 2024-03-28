import React from 'react';
import maquette from '../assets/images/mockup.jpg';

function Mockup() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <img src={maquette} alt="maquette" style={{ width: '100%', height: '100%' }} />
    </div>
  );
}

export default Mockup;