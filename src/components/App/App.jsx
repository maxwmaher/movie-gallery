import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails';
import EditDetails from '../EditDetails/EditDetails';
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component {
  // Renders the entire app on the DOM

  render() {
    return ( 
      <Router>
        {/* Basic styliing for Material-UI */}
        <CssBaseline />
        {/* Header - Material UI App Bar */}
        <Header/>
      <div className="App">
        {/* Home Page - list the movies */}
        <Route exact path="/" component={MovieList} />
        {/* Details Page - Show the details and genres of a specific movie */}
        <Route exact path="/details" component={MovieDetails} />
        {/* Edit Details page - Modify the details of an individual movie */}
        <Route exact path="/edit" component={EditDetails} />
      </div>
      </Router>
    );
  }
}

export default App;