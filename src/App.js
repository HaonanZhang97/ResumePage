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
  };

  const textEnter = () => {
    setCursorVariant('text');
    setCircleCursor('disappear');
  };
  const textLeave = () => {
    setCursorVariant('default');
    setCircleCursor('default');
  };
  const buttonEnter = () => {
    setCursorVariant('button');
    setCircleCursor('disappear');
  };

  return (
    <div className='App'>
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
                  <Experience onEnter={textEnter} onLeave={textLeave} />
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
                />
              ) : (
                <About
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
            path='/project'
            element={
              navbarOpen ? (
                <MenuOverlay
                  navbarOpen={navbarOpen}
                  setNavbarOpen={setNavbarOpen}
                  onEnter={buttonEnter}
                  onLeave={textLeave}
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
                />
              ) : (
                <Contact
                  onEnter={textEnter}
                  onLeave={textLeave}
                  onMenu={buttonEnter}
                  navbarOpen={navbarOpen}
                  setNavbarOpen={setNavbarOpen}
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
