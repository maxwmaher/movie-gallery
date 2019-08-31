import React, { Component } from "react";
import { connect } from "react-redux";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class MovieItems extends Component {
    render() {
        return (
            <div>
                <Grid item xs={4}>
                    <Paper className={this.props.paper}>
                    {this.props.movies.title}
                    </Paper>
                </Grid>
            {/* <li key={this.props.movies.id}>{this.props.movies.title}</li> */}
            </div>
        )
    }
}


export default connect()(MovieItems);