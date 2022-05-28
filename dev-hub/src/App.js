import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import { NavBar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';

function App() {
  // const categories = ['Landing', 'Catalog', 'Login', 'Signup', 'Cart'];
  // const [currentCategory, setCurrentCategory] = useState(categories[0]);

  // const handleCategoryChange = (event) => {
  //   event.preventDefault();
  //   const item = event.target.textContent;
  //   if (categories.includes(item)) {
  //     setCurrentCategory(item);
  //   }
  // }

  return (
    <Router>
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      {/* <Footer /> */}
    </div>
    </Router>
  );
}

export default App;
