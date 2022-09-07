import './App.css';
import React from 'react';
import Home from './pages/Home/index';
import Experience from './pages/Experience/index';
import Skills from './pages/Skills';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  return (
    <>
      <ParticlesBackground />
      <Home />
      <Experience />
      <Skills />    
    </>
  )
}

export default App;
