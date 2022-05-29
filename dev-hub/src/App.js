import React from 'react';
<<<<<<< HEAD
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { NavBar } from './components/Navbar';
import { Footer } from './components/Footer';
import Landing from './pages/Landing';
import { Catalog } from './pages/Catalog';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    < ApolloProvider client={{client}}>
   <div>
     <NavBar />
     <div>
       <Catalog />
     </div>
   <div>
    <Footer />
   </div>
   </div>
   </ApolloProvider>
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import { NavBar } from './components/Navbar';
import { Footer } from './components/Footer';
import Cart from './components/Cart';
import { Login } from './components/Login';

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
      {/* <Footer /> */}
    </div>
    </Router>
>>>>>>> ca774c1549095dab28f3216da22439bfacc98968
  );
}

export default App;
