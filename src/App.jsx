import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from './common/themeContext';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import FitLift from './components/FitLift/FitLift';
import Burger from './components/Burger/zeroStyle';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/fitlift" element={<FitLift />} />
          <Route path="/burger" element={<Burger />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

function MainContent() {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <main>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
