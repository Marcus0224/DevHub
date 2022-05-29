import React from 'react';
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
  );
}

export default App;
