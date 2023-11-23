import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Links from './Component/Links';
import MenuOverlay from './Component/MenuOverlay';
import About from './Component/About';
import Contact from './Component/Contact';
import Project from './Component/Project';
import Experience from './Component/Experience';

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [circleCursor, setCircleCursor] = useState('default');
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      setCircleCursor('dark');
      setCursorVariant('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setCursorVariant('default');
      setCircleCursor('default');
    }
  }, [theme]);

  const variants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
    },
    text: {
      height: 120,
      width: 120,
      x: mousePosition.x - 60,
      y: mousePosition.y - 60,
      backgroundColor: 'rgba(245,245,245,0.2)',
      mixBlendMode: 'difference',
    },
    button: {
      height: 32,
      width: 32,
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: 'rgba(245,245,245,1)',
      mixBlendMode: 'difference',
      borderRadius: '25%',
    },
    dark: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      backgroundColor: 'rgba(255,255,255,1)',
    },
  };
  const circleVariants = {
    default: {
      x: mousePosition.x - 16.5,
      y: mousePosition.y - 16.5,
      transition: { duration: 0.05 },
    },
    disappear: {
      x: mousePosition.x - 16.5,
      y: mousePosition.y - 16.5,
      borderColor: 'rgba(0, 0, 0, 0)',
    },
    dark: {
      x: mousePosition.x - 16.5,
      y: mousePosition.y - 16.5,
      transition: { duration: 0.05 },
      borderColor: 'rgba(255,255,255,1)',
    },
  };

  const textEnter = () => {
    if (theme === 'light') {
      setCursorVariant('text');
      setCircleCursor('disappear');
    }
  };
  const textLeave = () => {
    if (theme === 'light') {
      setCursorVariant('default');
      setCircleCursor('default');
    }
  };
  const buttonEnter = () => {
    if (theme === 'light') {
      setCursorVariant('button');
      setCircleCursor('disappear');
    }
  };

  const handleSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`App ${theme === 'dark' ? 'dark' : ''}`}>
      <motion.div
        className='cursor'
        variants={variants}
        animate={cursorVariant}
      />
      <motion.div
        className='circle'
        variants={circleVariants}
        animate={circleCursor}
      />
      <Router>
        <Routes>
          <Route
            path='/ResumePage'
            element={
              navbarOpen ? (
                <MenuOverlay
                  navbarOpen={navbarOpen}
                  setNavbarOpen={setNavbarOpen}
                  onEnter={buttonEnter}
                  onLeave={textLeave}
                  toggleTheme={handleSwitch}
                  theme={theme}
                />
              ) : (
                <div>
                  <Header onEnter={textEnter} onLeave={textLeave} />
                  <Links
                    onEnter={buttonEnter}
                    onLeave={textLeave}
                    navbarOpen={navbarOpen}
                    setNavbarOpen={setNavbarOpen}
                  />
                  <Experience theme={theme} />
                  <Footer onEnter={textEnter} onLeave={textLeave} />
                </div>
              )
            }
          />
          <Route
            path='/about'
            element={
              navbarOpen ? (
                <MenuOverlay
                  navbarOpen={navbarOpen}
                  setNavbarOpen={setNavbarOpen}
                  onEnter={buttonEnter}
                  onLeave={textLeave}
                  toggleTheme={handleSwitch}
                  theme={theme}
                />
              ) : (
                <About
                  onEnter={textEnter}
                  onLeave={textLeave}
                  onMenu={buttonEnter}
                  navbarOpen={navbarOpen}
                  setNavbarOpen={setNavbarOpen}
                  theme={theme}
                />
              )
            }
          />
          <Route
            path='/project'
            element={
              navbarOpen ? (
                <MenuOverlay
                  navbarOpen={navbarOpen}
                  setNavbarOpen={setNavbarOpen}
                  onEnter={buttonEnter}
                  onLeave={textLeave}
                  toggleTheme={handleSwitch}
                  theme={theme}
                />
              ) : (
                <Project
                  onEnter={textEnter}
                  onLeave={textLeave}
                  onMenu={buttonEnter}
                  navbarOpen={navbarOpen}
                  setNavbarOpen={setNavbarOpen}
                />
              )
            }
          />
          <Route
            path='/contact'
            element={
              navbarOpen ? (
                <MenuOverlay
                  navbarOpen={navbarOpen}
                  setNavbarOpen={setNavbarOpen}
                  onEnter={buttonEnter}
                  onLeave={textLeave}
                  toggleTheme={handleSwitch}
                  theme={theme}
                />
              ) : (
                <Contact
                  onEnter={textEnter}
                  onLeave={textLeave}
                  onMenu={buttonEnter}
                  navbarOpen={navbarOpen}
                  setNavbarOpen={setNavbarOpen}
                  theme={theme}
                />
              )
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
