import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";


class MovieItems extends Component {
    render() {
        return (
                <Grid item key={this.props.movies.title} align="center">
                            <Card style={{ width: 500 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt={this.props.movies.title}
                            style={{ width: '35%', marginTop: 10 }}
                            image={this.props.movies.poster}
                            title={this.props.movies.title}
                        />
                        <CardContent>
                            <Typography gutterbottom variant="h5" component="h2">
                                {this.props.movies.title}
                            </Typography>
                            <Typography component="p">{this.props.movies.description}</Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Details
                                    </Button>
                    </CardActions>
                </Card>
                        </Grid>
        )
    }
}


export default connect()(MovieItems);