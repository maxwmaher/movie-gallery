import React, { Component } from "react";
import { connect } from "react-redux";
import MovieItems from '../MovieItems/MovieItems';
import { Grid } from "@material-ui/core";

class MovieList extends Component {

    //On load, get movies from Redux
    componentDidMount() {
        this.getMovies();
    }

    //Function to fetch the list of movies from Redux
    getMovies() {
        this.props.dispatch({
            type: 'FETCH_MOVIES'
        })
    }

    render() {
        return (
            //Establish spacing for Material-UI cards
            <div style={{marginTop: 20, padding: 30}}>
                {/* Establish spacing between cards */}
                <Grid container spacing={4} justify="center">
                    {/* Loop through movie list, and render through MovieItems component */}
                    {this.props.store.movies.map((movies, i) => (<MovieItems key={i} movies={movies}/>))}
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = store => ({
    store,
});

export default connect(mapStateToProps)(MovieList);