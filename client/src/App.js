import React from 'react';
import './App.css';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Header from './components/header';
import Foods from './components/foods';

const client = new ApolloClient({
  uri: `/graphql`
});

function App() {
  return (
    <ApolloProvider client={client} >
      <Router>
        <Header />
        <Foods />
      </Router>
    </ApolloProvider>  
  );
}

export default App;
