import React from 'react';

export default function Links(props) {
  return (
    <div
      className='links'
      onMouseEnter={props.onEnter}
      onMouseLeave={props.onLeave}
    >
      <a href='https://www.linkedin.com/in/haonan-zhang-233605200/'>
        <img
          className='icon'
          src='./ResumePage/images/linkedin.svg'
          alt='linkedin'
        />
      </a>
      <a href='https://github.com/HaonanZhang97'>
        <img
          className='icon'
          src='./ResumePage/images/github.svg'
          alt='github'
        />
      </a>
      <img
        className='icon menu'
        src='./ResumePage/images/menu.svg'
        alt='menu'
        onClick={() => {
          props.setNavbarOpen(!props.navbarOpen);
          props.onLeave();
        }}
      />
    </div>
  );
}
