import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.js';
import './App.css';

// Define the page components
import Home from './components/Home/Home.js';

function App() {
  return (
    <Router>
      <Header />
      <div className="main-content">
        <Routes> {/* Use Routes to wrap your Route components */}
          <Route path="/" element={<Home />} /> {/* Use element prop instead of component */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
