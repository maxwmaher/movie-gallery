import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import { Save, Backspace } from '@material-ui/icons';

class EditDetails extends Component {

    state = {
        title: this.props.store.movieTitleDetails.title,
        description: this.props.store.movieTitleDetails.description,
        id: this.props.store.movieTitleDetails.id,
        poster: this.props.store.movieTitleDetails.poster
    }

    handleChangeFor = (key) => event => {
        this.setState({
            [key]: event.target.value
        });
    }

    handleCancel = () => {
        this.props.history.push(`/details`);
    }

    handleSave = () => {
        console.log('the state objected getting updated:', this.state);
        this.props.dispatch({
            type: 'UPDATE_MOVIE',
            payload: this.state
        })
        this.props.history.push(`/details`);
    }

    render() {

        return (

            <div style={{ marginTop: 20, padding: 30 }}>
                <Grid container spacing={1} justify="center">
                    <Grid item md={4} align="center">
                        <Card>
                            <CardContent>
                                <Typography>
                                    <TextField
                                        id="standard-name"
                                        label="title"
                                        value={this.state.title}
                                        onChange={this.handleChangeFor('title')}
                                        margin="normal"
                                        style={{ width: 400 }} />
                                    <TextField
                                        id="standard-multiline-static"
                                        label="description"
                                        multiline
                                        rows="12"
                                        defaultValue={this.state.description}
                                        onChange={this.handleChangeFor('description')}
                                        margin="normal"
                                        style={{ width: 400}} />
                                </Typography>
                            </CardContent>
                            <Grid container direction="row" alignItems="center">
                                <Grid item>
                                    <CardActions>
                                        <Button onClick={this.handleSave} size="small" style={{ color: "#cd3801" }}>
                                            <Save style={{ marginRight: 3 }} />
                                            Save
                                            </Button>
                                    </CardActions>
                                </Grid>
                                <Grid item>
                                    <CardActions>
                                        <Button onClick={this.handleCancel} size="small" style={{ color: "#cd3801" }}>
                                            <Backspace style={{ marginRight: 5 }} />
                                            Cancel
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

export default connect(mapStateToProps)(EditDetails);