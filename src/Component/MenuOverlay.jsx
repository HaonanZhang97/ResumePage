import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MenuOverlay({
  navbarOpen,
  setNavbarOpen,
  onEnter,
  onLeave,
}) {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    setNavbarOpen(!navbarOpen);
    onLeave();
    navigate(path);
  };

  return (
    <div className='menu' onMouseLeave={onLeave}>
      <div
        onMouseEnter={onEnter}
        onClick={() => {
          setNavbarOpen(!navbarOpen);
          onLeave();
        }}
      >
        <img
          className='closeIcon'
          src='./ResumePage/images/close.svg'
          alt='close'
        />
      </div>
      <ul>
        <li
          onClick={() => {
            handleNavigate('/ResumePage');
          }}
        >
          HOME
        </li>
        <li
          onClick={() => {
            handleNavigate('/project');
          }}
        >
          PROJECTS
        </li>
        <li
          onClick={() => {
            handleNavigate('/about');
          }}
        >
          ABOUT
        </li>
        <li
          onClick={() => {
            handleNavigate('/contact');
          }}
        >
          CONTACT
        </li>
      </ul>
    </div>
  );
}
