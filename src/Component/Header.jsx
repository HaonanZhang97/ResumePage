import React from 'react';

export default function Header(props) {
  return (
    <header>
      <h1 onMouseEnter={props.onEnter} onMouseLeave={props.onLeave}>
        Haonan Zhang
      </h1>
      <h3>I'm a programmer! Welcome to my world!</h3>
      <p>
        I'm a new grad software developer based in Ottawa, Ontario, Canada.{' '}
        <br />
        I am looking for frontend, backend, full stack, QA, Testing jobs. <br />
        I would like to describe myself as an industrious, self-motivated person
        <br />
        at work. Also, I have exemplified my keen ability to collaborate on
        teams,
        <br /> and troubleshoot with difficult problems. Want to hear more?
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
