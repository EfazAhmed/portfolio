import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Home from './../src/pages/Home/index';
import Experience from './pages/Experience/index';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Experience />
    </>
  )
}

export default App;
