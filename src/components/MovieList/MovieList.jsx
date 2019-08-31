import React, { Component } from "react";
import { connect } from "react-redux";
import CenteredGrid from './index.jsx';

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
                        <li key={movies.id}>{movies.title}</li>
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