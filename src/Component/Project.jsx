import React from 'react';

export default function Project({
  navbarOpen,
  setNavbarOpen,
  onLeave,
  onEnter,
}) {
  return (
    <div className='project'>
      <h1 className='pageTopic'>Project</h1>
      <hr />
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
