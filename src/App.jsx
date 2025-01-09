import React, { useEffect } from 'react';
import { ThemeProvider, useTheme } from './common/themeContext';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import './App.css';
import Skills from './components/Skills/Skills';


function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}

// Separate component to use theme
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
    </main>
  );
}

export default App;
