import React, { useEffect } from 'react';
import { ThemeProvider, useTheme } from './common/themeContext';
import Hero from './components/Hero/Hero';
import './App.css';

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

  return <Hero />;
}

export default App;
