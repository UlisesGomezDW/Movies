import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import Movies from './components/Movies'

import { Switch, Route, NavLink } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <ul className="navbar">
         <NavLink to="/" style={{color: "#fff", textDecoration: "none"}}>
            <li className="linksito">Home</li>
          </NavLink>
          <NavLink to="/movies" style={{color: "#fff", textDecoration: "none"}}>
            <li className="linksito">Movies</li>
          </NavLink>
          </ul>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movies" component={Movies} />
        </Switch>
      </div>
    );
  }
}

export default App;