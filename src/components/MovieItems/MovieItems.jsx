import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Movie } from '@material-ui/icons';

class MovieItems extends Component {

    //Get info from Movies database
    getMovieDetails = (id) => {
        console.log('the id currently is:', id)
        this.props.dispatch({
            type: 'FETCH_MOVIE_TITLE_DETAILS',
            payload: id
        })
        //Get info from Genres database
        this.props.dispatch({
            type: 'FETCH_MOVIE_GENRE_DETAILS',
            payload: id
        })
        //Navigate to the details page for a particular movie
        this.props.history.push(`/details`);
    }

    render() {
        return (
            <Grid item md={3} align="center">
                <Card>
                    {/* Display movie poster */}
                    <CardMedia onClick={() => this.getMovieDetails(this.props.movies.id)}
                        component="img"
                        alt={this.props.movies.title}
                        style={{ width: '35%', marginTop: 10 }}
                        image={this.props.movies.poster}
                        title={this.props.movies.title}
                    />
                    <CardContent>
                        <CardActionArea>
                            {/* Display expansion panel for description */}
                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header">
                                    <Typography>
                                        {/* Display movie title */}
                                        <b>{this.props.movies.title}</b>
                                    </Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                        {/* Display movie description */}
                                        {this.props.movies.description}
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </CardActionArea>
                    </CardContent>
                    <CardActions>
                        {/* Display button to navigate into movie details page */}
                        <Button onClick={() => this.getMovieDetails(this.props.movies.id)} size="small" style={{ color: "#cd3801" }}>
                            <Movie style={{ marginRight: 3 }} />
                            Details
                         </Button>
                    </CardActions>
                </Card>
            </Grid>
        )
    }
}

export default withRouter(connect()(MovieItems));