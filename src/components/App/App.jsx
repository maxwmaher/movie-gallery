import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails';
import EditDetails from '../EditDetails/EditDetails';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return ( 
      <Router>
        <CssBaseline />
        <AppBar style={{ backgroundColor: '#0197cd' }} position="static">
          <Toolbar>
            <Typography variant="h5">
              Movies and Genres
          </Typography>
          </Toolbar>
        </AppBar>
      <div className="App">
        <Route exact path="/" component={MovieList} />
        <Route exact path="/details" component={MovieDetails} />
        <Route exact path="/edit" component={EditDetails} />
      </div>
      </Router>
    );
  }
}

export default App;