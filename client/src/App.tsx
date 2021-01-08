import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>  
          <Route path="/" component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;