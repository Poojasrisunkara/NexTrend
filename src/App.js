import React from 'react';
import './Re.css'
import Home from './Home';
import Trail from './Trail';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Chatbot from './Chatbot';
import Login from './Login';
import './Styles.css'; // Import your CSS

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/chatbot" element={<Trail />} />
          <Route path="*" element={<h2>404 - Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


