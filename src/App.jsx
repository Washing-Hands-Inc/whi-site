import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Stack from './pages/Stack';
import Concepts from './pages/Concepts';
import Lichen from './pages/Lichen';
import Flint from './pages/Flint';
import About from './pages/About';
import ArtNouveauTracers from './components/ArtNouveauTracers';

function App() {
  return (
    <BrowserRouter>
      <div className="grit-overlay"><div className="noise-rect"></div></div>
      <div className="floating-filaments"></div>
      <ArtNouveauTracers />
      
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/concepts" element={<Concepts />} />
        <Route path="/lichen" element={<Lichen />} />
        <Route path="/flint" element={<Flint />} />
        <Route path="/flint/about" element={<About />} />
      </Routes>
      
      <style dangerouslySetInnerHTML={{__html: `
        .reveal.show, .reveal-left.show, .reveal-right.show {
          opacity: 1 !important;
          transform: translate(0, 0) !important;
        }
      `}} />
    </BrowserRouter>
  );
}

export default App;
