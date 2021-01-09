import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Restaurant } from './pages/Restaurant/Restaurant';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>  
          <Route path="/"  exact component={Home}></Route>
          <Route path="/restaurant" component={Restaurant}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
