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
        <hr className={`${props.theme === 'dark' ? 'dark' : ''}`} />
        <p>
          Hi,My name is Haonan Zhang.
          <br />I am holding a Master of System Science degree from the
          University of Ottawa and <br /> a Honours Bachelor of Science degree
          ,from Carleton University majoring in computer <br />
          science. Entertaining extensive computer science studies from my
          education and the <br />
          eye-opening experience to work in various software development
          internship roles <br />
          within the IT industry, I gained the rewarding experience to
          participate in various <br />
          software development activities such as web development, software
          testing, relational <br />
          database management, etc., which made me recognize the power of
          software <br />
          programming as it helped me overcome many cutting-edging technological{' '}
          issues in <br />a real-world situation, where my strong interests and
          curiosity in software development <br />
          started to accumulate, especially web development.
        </p>
        <button
          className={`resume ${props.theme === 'dark' ? 'dark' : ''}`}
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
