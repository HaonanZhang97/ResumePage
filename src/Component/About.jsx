import React from 'react';

export default function About(props) {
  const openPDF = () => {
    window.open('./ResumePage/images/Haonan_Zhang.pdf');
  };
  return (
    <div className='About'>
      <div className='pageContent'>
        <h1
          className='pageTopic'
          onMouseLeave={props.onLeave}
          onMouseEnter={props.onEnter}
        >
          About
        </h1>
        <hr />
        <p>
          Hi,My name is Haonan Zhang. I am a new grad software developer. I have
          <br />
          some project experience few popular frontend and backend frameworks
          such
          <br />
          as Reactjs, Bootstrap, Node.js, Springboot. As well as few popular
          <br />
          databases such as postgreSQL, mySQL, mongoDB. I am a fast leaner,
          <br />
          passionate about creating things with code and always curious to learn
          <br />
          more when it comes to new technologies.
        </p>
        <button
          className='resume'
          onMouseEnter={props.onLink}
          onMouseLeave={props.onLeave}
          onClick={() => {
            openPDF();
          }}
        >
          <img src='./ResumePage/images/downArrow.svg' alt='down arrow' />
          My Resume
        </button>
      </div>
      <img
        className='menuicon'
        src='./ResumePage/images/menu.svg'
        alt='menu'
        onMouseEnter={props.onMenu}
        onMouseLeave={props.onLeave}
        onClick={() => {
          props.setNavbarOpen(!props.navbarOpen);
          props.onLeave();
        }}
      />
      <div className='myPic'></div>
    </div>
  );
}
