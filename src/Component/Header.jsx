import React from 'react';

export default function Header(props) {
  return (
    <header>
      <h1 onMouseEnter={props.onEnter} onMouseLeave={props.onLeave}>
        Haonan Zhang
      </h1>
    </header>
  );
}
