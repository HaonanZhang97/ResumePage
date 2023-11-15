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

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState('default');
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
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 120,
      width: 120,
      x: mousePosition.x - 60,
      y: mousePosition.y - 60,
      backgroundColor: 'rgba(255,255,0,1)',
      mixBlendMode: 'difference',
    },
    button: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: 'rgba(255,255,0,1)',
      mixBlendMode: 'difference',
      borderRadius: '25%',
    },
    list: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: 'rgba(255,255,0,1)',
      mixBlendMode: 'difference',
    },
  };

  const textEnter = () => setCursorVariant('text');
  const textLeave = () => setCursorVariant('default');
  const buttonEnter = () => setCursorVariant('button');
  const itemEnter = () => setCursorVariant('list');

  const MenuContent = () => {
    return (
      <MenuOverlay
        navbarOpen={navbarOpen}
        setNavbarOpen={setNavbarOpen}
        onEnter={buttonEnter}
        onLeave={textLeave}
        onList={itemEnter}
      />
    );
  };

  return (
    <div className='App'>
      <motion.div
        className='cursor'
        variants={variants}
        animate={cursorVariant}
      />
      <Router>
        <Routes>
          <Route
            path='/ResumePage'
            element={
              navbarOpen ? (
                <MenuContent />
              ) : (
                <div>
                  <Header onEnter={textEnter} onLeave={textLeave} />
                  <Links
                    onEnter={buttonEnter}
                    onLeave={textLeave}
                    navbarOpen={navbarOpen}
                    setNavbarOpen={setNavbarOpen}
                  />
                  <Footer onEnter={textEnter} onLeave={textLeave} />
                </div>
              )
            }
          />
          <Route
            path='/about'
            element={
              navbarOpen ? (
                <MenuContent />
              ) : (
                <About
                  onEnter={textEnter}
                  onLeave={textLeave}
                  onMenu={buttonEnter}
                  onLink={itemEnter}
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
                <MenuContent />
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
                <MenuContent />
              ) : (
                <Contact
                  onEnter={textEnter}
                  onLeave={textLeave}
                  onMenu={buttonEnter}
                  onButton={itemEnter}
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
