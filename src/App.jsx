import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ParkDetails from './components/ParkDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/natpark/:id" element={<ParkDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
