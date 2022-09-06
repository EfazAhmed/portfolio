import './App.css';
import React from 'react';
import Home from './pages/Home/index';
import Experience from './pages/Experience/index';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  return (
    <>
      <ParticlesBackground />
      <Home />
      <Experience />
    </>
  )
}

export default App;
