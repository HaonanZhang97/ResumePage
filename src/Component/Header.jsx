import React from 'react';

export default function Header(props) {
  return (
    <header>
      <h1 onMouseEnter={props.onEnter} onMouseLeave={props.onLeave}>
        Hi, I'm Haonan Zhang
      </h1>
      <h2> Welcome to my world!</h2>
      <p>
        I'm a new grad software developer based in Ottawa, Ontario, Canada.{' '}
        <br />
        I am looking for frontend, backend, full stack, QA, Testing jobs. <br />
        I would like to describe myself as an industrious, <br />
        self-motivated person at work. Also, I have exemplified <br />
        my keen ability to collaborate on teams, and troubleshoot <br />
        with difficult problems. Want to hear more?
      </p>

      <a href='/about'>
        <img src='./ResumePage/images/rightArrow.svg' alt='right arrow' />
        Read my full story
      </a>
      <a href='/project'>
        <img src='./ResumePage/images/rightArrow.svg' alt='right arrow' />
        Projects
      </a>
    </header>
  );
}
