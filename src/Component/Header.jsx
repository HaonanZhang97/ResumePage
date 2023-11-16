import React from 'react';

export default function Header(props) {
  return (
    <header>
      <h1 onMouseEnter={props.onEnter} onMouseLeave={props.onLeave}>
        Haonan Zhang
      </h1>
      <h3>I'm a programmer</h3>
      <p>
        I'm a new grad software developer based in Ottawa, Ontario, Canada.{' '}
        <br />
        I am looking for frontend, backend, full stack, QA, Testing jobs. <br />
      </p>
    </header>
  );
}
