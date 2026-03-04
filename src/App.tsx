import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import SBSLanding from './pages/SBSLanding';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sbs" element={<SBSLanding />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;