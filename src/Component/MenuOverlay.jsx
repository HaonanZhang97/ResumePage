import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MenuOverlay({
  navbarOpen,
  setNavbarOpen,
  onEnter,
  onLeave,
  toggleTheme,
  theme,
}) {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    setNavbarOpen(!navbarOpen);
    onLeave();
    navigate(path);
  };

  return (
    <div className='menu' onMouseLeave={onLeave}>
      <div onMouseEnter={onEnter}>
        {theme === 'dark' ? (
          <img
            className='menuButton'
            src='./ResumePage/images/moon.svg'
            alt='dark'
            onClick={() => {
              toggleTheme();
            }}
          />
        ) : (
          <img
            className='menuButton'
            src='./ResumePage/images/sun.svg'
            alt='light'
            onClick={() => {
              toggleTheme();
            }}
          />
        )}
        <img
          className='closeIcon'
          src='./ResumePage/images/close.svg'
          alt='close'
          onClick={() => {
            setNavbarOpen(!navbarOpen);
            onLeave();
          }}
        />
      </div>
      <ul>
        <li
          className={`${theme === 'dark' ? 'dark' : ''}`}
          onClick={() => {
            handleNavigate('/ResumePage');
          }}
        >
          HOME
        </li>
        <li
          className={`${theme === 'dark' ? 'dark' : ''}`}
          onClick={() => {
            handleNavigate('/project');
          }}
        >
          PROJECTS
        </li>
        <li
          className={`${theme === 'dark' ? 'dark' : ''}`}
          onClick={() => {
            handleNavigate('/about');
          }}
        >
          ABOUT
        </li>
        <li
          className={`${theme === 'dark' ? 'dark' : ''}`}
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
