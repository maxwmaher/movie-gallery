import React, { Component } from "react";
import { connect } from "react-redux";

class MovieDetails extends Component {

handleEdit = () => {
    this.props.history.push(`/edit`);
}


handleBack = () => {
    this.props.history.push(`/`);
}

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
                <p><button onClick={this.handleEdit}>Edit</button></p>
                <p><button onClick={this.handleBack}>Back to List</button></p>
                </div>
        )

    }
}

const mapStateToProps = store => ({
    store,
});

export default connect(mapStateToProps)(MovieDetails);