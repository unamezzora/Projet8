import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <div className='layout'>
        <Header />
        <div className='contenu'>
          <Routes>
            <Route path='/' element={<Home />} />

          </Routes>
        </div>
          
      </div>
      
      <Footer />
    </Router>
  </React.StrictMode>
);


