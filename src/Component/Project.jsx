import React from 'react';

export default function Project({
  navbarOpen,
  setNavbarOpen,
  onLeave,
  onEnter,
}) {
  return (
    <div>
      Project
      <img
        className='menuicon'
        src='./ResumePage/images/menu.svg'
        alt='menu'
        onClick={() => {
          setNavbarOpen(!navbarOpen);
          onLeave();
        }}
      />
    </div>
  );
}
