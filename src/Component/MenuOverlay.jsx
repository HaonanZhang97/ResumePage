import React from 'react';

export default function MenuOverlay({ navbarOpen, setNavbarOpen }) {
  return (
    <div>
      <img
        src='/images/close.svg'
        alt='close'
        onClick={() => {
          setNavbarOpen(!navbarOpen);
        }}
      />
    </div>
  );
}
