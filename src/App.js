import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PostDetail from './components/PostDetail/PostDetail';
import NotFound from './components/NotFound/NotFound';
import { Container, Grid } from '@material-ui/core';
import Header from './components/Header/Header';


function App() {
  return (
    <div>
      <Header></Header>
      <Container maxWidth="md">
        <Router>
          <Switch>
            <Route path='/postDetail/:id'>
              <PostDetail></PostDetail>
            </Route>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
