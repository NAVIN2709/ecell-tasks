import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Individual Page Components
import Home from './pages/Home'
import About from './pages/About'
import Vision from './pages/Vision'
import Showcase from './pages/Showcase'
import Contact from './pages/Contact'
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <div className="font-sans bg-white text-gray-800">
        <Navbar />
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
