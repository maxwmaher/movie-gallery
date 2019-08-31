import React, { Component } from "react";
import { connect } from "react-redux";

class MovieDetails extends Component {

    render() {

        return (
            <div>
                <p>Title: {this.props.store.movieTitleDetails.title}</p>
                <p>Description: {this.props.store.movieTitleDetails.description}</p>
                <p>Genres:</p>
                <ul>
                    {this.props.store.movieGenreDetails.map((genre, i) => {
                        return (
                        <li key={i}>{genre.name}</li>
                        )
                    })}
                </ul>
                </div>
        )

    }
}

const mapStateToProps = store => ({
    store,
});

export default connect(mapStateToProps)(MovieDetails);