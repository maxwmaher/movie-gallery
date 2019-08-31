import React, { Component } from "react";
import { connect } from "react-redux";
import MovieItems from '../MovieItems/MovieItems';
import { Grid } from "@material-ui/core";
class MovieList extends Component {

    componentDidMount() {
        this.getMovies();
    }

    getMovies() {
        this.props.dispatch({
            type: 'FETCH_MOVIES'
        })
    }

    render() {
        return (
            <div style={{marginTop: 20, padding: 30}}>
                <Grid container spacing={3} justify="center">
                    {this.props.store.movies.map((movies) => (<MovieItems movies={movies}/>))}
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = store => ({
    store,
});

export default connect(mapStateToProps)(MovieList);