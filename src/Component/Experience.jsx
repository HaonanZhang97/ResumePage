import React from 'react';

export default function Experience({ onEnter, onLeave }) {
  return (
    <div className='experience' onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <div className='scrollable'>
        <div className='experience-item'>
          <div className='title'>
            <h3>Software Engineer</h3>
            <h5 className='duration'> May, 2023 - Present</h5>
          </div>
          <ul>
            <li>Reactjs</li>
            <li>RESTful API</li>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>Node.js</li>
            <li>Java</li>
            <li>Springboot</li>
          </ul>
        </div>
        <div className='experience-item'>
          <div className='title'>
            <h3>Software Developer Intern</h3>
            <h5 className='duration'> May, 2022 - Aug. 2022</h5>
          </div>
          <ul>
            <li>SDLC</li>
            <li>Java</li>
            <li>Agile</li>
            <li>Testing</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
