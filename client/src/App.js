import React from 'react';
import './App.css';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Link , Switch } from 'react-router-dom';

import Header from './components/header';
import SearchBar from './components/searchbar';
import Feed from './components/feed';
import Details from './components/details';

const client = new ApolloClient({
  
  // uri: 'http://localhost:5000/graphql'
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client} >
      <Router>
        <Header/>
        <SearchBar />
        <Switch>
          <Route exact path='/search/:q' component={Feed}/>
          <Route exact path='/details/:s' component={Details}/>
        </Switch>
      </Router>
    </ApolloProvider>  
  );
}

export default App;
