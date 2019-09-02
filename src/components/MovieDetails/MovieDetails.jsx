import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { Theaters } from '@material-ui/icons';

class MovieDetails extends Component {

    handleEdit = () => {
        this.props.history.push(`/edit`);
    }


    handleBack = () => {
        this.props.history.push(`/`);
    }

    render() {

        return (
            <Grid container spacing={1} justify="center">
                <Grid item md={4} align="center">
                    <Card>
                        <CardContent>

                            <Grid container direction="row" alignItems="center" padding="300">
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
                                <h3>{this.props.store.movieTitleDetails.title}</h3>
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            alt={this.props.store.movieTitleDetails.title}
                            style={{ width: '25%', marginTop: 10 }}
                            image={this.props.store.movieTitleDetails.poster}
                            title={this.props.store.movieTitleDetails.title}
                        />
                        <CardContent>
                            <Typography>
                                {this.props.store.movieTitleDetails.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button>Movie</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>


            // <div>
            //     <p>Title: {this.props.store.movieTitleDetails.title}</p>
            //     <p>Description: {this.props.store.movieTitleDetails.description}</p>
            //     <p>Genres:</p>
            // <ul>
            //     {this.props.store.movieGenreDetails.map((genre, i) => {
            //         return (
            //             <li key={i}>{genre.name}</li>
            //         )
            //     })}
            // </ul>
            //     <p><button onClick={this.handleEdit}>Edit</button></p>
            //     <p><button onClick={this.handleBack}>Back to List</button></p>
            // </div>
        )

    }
}

const mapStateToProps = store => ({
    store,
});

export default connect(mapStateToProps)(MovieDetails);