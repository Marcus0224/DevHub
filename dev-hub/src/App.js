import React, { useState } from 'react';
import Landing from './pages/Landing';
import { NavBar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';

function App() {
  const categories = ['Landing', 'Catalog', 'Login', 'Signup', 'Cart'];
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const handleCategoryChange = (event) => {
    event.preventDefault();
    const item = event.target.textContent;
    if (categories.includes(item)) {
      setCurrentCategory(item);
    }
  }

  return (
    <div>
      <NavBar handleCategoryChange={handleCategoryChange} />
      {currentCategory === 'Landing' && <Landing />}
      {currentCategory === 'Cart' && <Cart />}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
