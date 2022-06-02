import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Landing from './pages/Landing';
import { NavBar } from './components/Navbar';
import { Footer } from './components/Footer';
import Cart from './/pages/Cart';
import { Login } from './pages/Login';
import { Catalog } from './pages/Catalog';
import { SignUp } from './pages/SignUp';
import { Checkout } from './pages/Checkout';
import { Test } from './pages/Test';
import { SingleProduct } from './pages/SingleProduct';
import { DashBoard } from './pages/DashBoard.js';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/single/:websiteType" element={<SingleProduct />} />
            <Route path='/dashboard' element={<DashBoard />} />
            <Route path="/test" element={<Test />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
