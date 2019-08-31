import React, { Component } from "react";
import { connect } from "react-redux";

class MovieItems extends Component {
    render() {
        return (
            <div>
            <li key={this.props.movies.id}>{this.props.movies.title}</li>
            </div>
        )
    }
}
export default connect()(MovieItems);