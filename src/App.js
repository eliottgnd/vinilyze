import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Home />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App; 