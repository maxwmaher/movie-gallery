import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return ( 
      <Router>
      <div className="App">
        <p>App Page</p>
        <Route exact path="/" component={MovieList} />
        {/* <Route exact path="/details" component={MovieDetails} /> */}
      </div>
      </Router>
    );
  }
}


export default App;