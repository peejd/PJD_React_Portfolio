import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';
import About from './components/pages/About'
import Projects from './components/pages/Projects';
import Footer from './components/pages/Footer';

function App() {

  return (
    <Router>
      <div className="app-wrapper">
      <div class = 'background'>
        <h1 class = 'mainheader'>Philip Davidian's Portfolio <Navigation /></h1>
        <Routes>
          <Route index element={<About />} />
          <Route path="/projects" element={<Projects/>} />
          {/* <Route path="/contact" element={<Contact/>} />
          <Route path="/resume" element={<Resume/>} /> */}
          <Route path="*" element={<About />} />
        </Routes>
      <Footer/>
      </div>
      </div>
    </Router>
  );
}

export default App;