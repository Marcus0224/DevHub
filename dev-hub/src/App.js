import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import { NavBar } from './components/Navbar';
import { Footer } from './components/Footer';
import Cart from './pages/Cart';
import { Login } from './pages/Login';

function App() {
  return (
    <Router>
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer /> 
    </div>
    </Router>
  );
}

export default App;
