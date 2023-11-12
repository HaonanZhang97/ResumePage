import React from 'react';

export default function Footer(props) {
  return (
    <footer>
      <p onMouseEnter={props.onEnter} onMouseLeave={props.onLeave}>
        Copyright ⓒ 2023
      </p>
    </footer>
  );
}
