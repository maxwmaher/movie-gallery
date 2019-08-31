import React, { Component } from "react";
import { connect } from "react-redux";
import CenteredGrid from './index.jsx';
import MovieItems from '../MovieItems/MovieItems'

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
            <div>
                This is the movie list!
                <br /><br />
                <ul>
                {this.props.store.movies.map((movies) => {
                    return (
                        <MovieItems movies={movies} />
                    )
                })}
                </ul>
                <CenteredGrid/>
            </div>
        )
    }
}

const mapStateToProps = store => ({
    store,
});

export default connect(mapStateToProps)(MovieList);