import React, { Component } from "react";
import { connect } from "react-redux";
import CenteredGrid from './index.jsx';
// import MovieItems from '../MovieItems/MovieItems';
import { Grid, Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

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
                    {this.props.store.movies.map((movies) => (
                        <Grid item key={movies.title} align="center">
                            <Card style={{width: 500}}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt={movies.title}
                                        style={{width: '35%', marginTop: 10}}
                                        image={movies.poster}
                                        title={movies.title}
                                    />
                                    <CardContent>
                                        <Typography gutterbottom variant="h5" component="h2">
                                            {movies.title}
                                        </Typography>
                                        <Typography component="p">{movies.description}</Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Details
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>



                {/* This is the movie list!
                <br /><br />
                <Grid container spacing={3}>
                {this.props.store.movies.map((movies) => {
                    return (
                        <MovieItems movies={movies} />
                    )
                })}
                </Grid>
                <CenteredGrid/> */}
            </div>
        )
    }
}

const mapStateToProps = store => ({
    store,
});

export default connect(mapStateToProps)(MovieList);