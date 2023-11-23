import React from 'react';

export default function Project({
  navbarOpen,
  setNavbarOpen,
  onLeave,
  onEnter,
  onMenu,
  theme,
}) {
  return (
    <div className='project'>
      <h1 className='pageTopic' onMouseEnter={onEnter} onMouseLeave={onLeave}>
        Project
      </h1>
      <hr />
      <img
        className={`menuicon ${theme === 'dark' ? 'dark' : ''}`}
        src='./ResumePage/images/menu.svg'
        alt='menu'
        onMouseEnter={onMenu}
        onMouseLeave={onLeave}
        onClick={() => {
          setNavbarOpen(!navbarOpen);
          onLeave();
        }}
      />
      <div className='out-container'>
        <div className='scroll-container'>
          <div className='data-item'>
            <a
              href='https://haonanzhang97.github.io/Simon-Game/'
              className='item-link'
            >
              <div className='content'>
                <img
                  className='projectImg'
                  src='./ResumePage/images/simonGame.png'
                  alt='Simon Game'
                />
                <div className='description'>
                  <h2>Simon Game</h2>
                  <p>
                    This is a javascript project that replicate the old "Simon"
                    toy into a web version.
                    <br />
                    The project guideline and resources are provided by Dr.
                    Angula Yu from The App brewery{' '}
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className='data-item reverse'>
            <a
              href='https://github.com/HaonanZhang97/ToDoList'
              className='item-link'
            >
              <div className='content'>
                <div className='description'>
                  <h2>To Do List</h2>
                  <p>
                    This is a node.js project using ejs and html that could keep
                    track of your to do things for yourself and work of the day.
                    The project is still under development.
                    <br />
                    The project guideline and resources are provided by Dr.
                    Angula Yu from The App brewery
                  </p>
                </div>
                <img
                  className='projectImg'
                  src='./ResumePage/images/coming-soon.jpg'
                  alt='Right'
                />
              </div>
            </a>
          </div>
          <div className='data-item'>
            <a href='https://github.com/ivespeggy' className='item-link'>
              <div className='content'>
                <img
                  className='projectImg'
                  src='./ResumePage/images/coming-soon.jpg'
                  alt='Left'
                />
                <div className='description'>
                  <h2>Workout Plan Generator</h2>
                  <p>
                    This is a full stack project using Reactjs for the frontend,
                    Springboot for the backend, MySql for data storage. CRUD,
                    Restful API, Spring Authentication and Authorization,
                    Password Hashing and more.
                    <br />
                    The backend could generate smart advice for the user based
                    on the user's body data and target setting. This project is
                    still under development.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
