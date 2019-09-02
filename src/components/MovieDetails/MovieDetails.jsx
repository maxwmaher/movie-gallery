import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { Theaters, Edit, List } from '@material-ui/icons';

class MovieDetails extends Component {

    //Handles route change to the Edit screen
    handleEdit = () => {
        this.props.history.push(`/edit`);
    }

    //Handle route change to the Home page
    handleBack = () => {
        this.props.history.push(`/`);
    }

    render() {

        return (
            <div style={{ marginTop: 20, padding: 30 }}>
                <Grid container spacing={1} justify="center">
                    {/* Width of the grid item is 4 out of 12 */}
                    <Grid item md={4} align="center">
                        <Card>
                            <CardContent>
                                <Grid container direction="row" alignItems="center">
                                    {/* Loop over genres, display theater icon and genre name */}
                                    {this.props.store.movieGenreDetails.map((genre, i) => {
                                        return (
                                            <div className="div-genreList">
                                                <Grid item>
                                                    <Theaters />
                                                </Grid>
                                                <Grid item>
                                                    {genre.name}
                                                </Grid>
                                            </div>
                                        )
                                    })}
                                </Grid>
                            </CardContent>
                            <CardContent>
                                <Typography>
                                    {/* Display the movie title */}
                                    <h2>{this.props.store.movieTitleDetails.title}</h2>
                                </Typography>
                            </CardContent>
                            {/* Display the movie poster */}
                            <CardMedia
                                component="img"
                                alt={this.props.store.movieTitleDetails.title}
                                style={{ width: '25%', marginTop: 10 }}
                                src={this.props.store.movieTitleDetails.poster}
                                title={this.props.store.movieTitleDetails.title}
                            />
                            <CardContent style={{ marginTop: 20 }}>
                                <Typography>
                                    {/* Display the movie description */}
                                    {this.props.store.movieTitleDetails.description}
                                </Typography>
                            </CardContent>
                            <Grid container direction="row" alignItems="center">
                                <Grid item>
                                    <CardActions>
                                        {/* Button to edit the content */}
                                        <Button onClick={this.handleEdit} size="small" style={{color: "#cd3801"}}>
                                            <Edit style={{ marginRight: 3 }} />
                                            Edit
                                        </Button>
                                    </CardActions>
                                </Grid>
                                <Grid item>
                                    <CardActions>
                                        {/* Button to go back to the home screen */}
                                        <Button onClick={this.handleBack} size="small" style={{ color: "#cd3801" }}>
                                            <List style={{ marginRight: 3 }} />
                                            Back to List
                                            </Button>
                                    </CardActions>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        )

    }
}

const mapStateToProps = store => ({
    store,
});

export default connect(mapStateToProps)(MovieDetails);