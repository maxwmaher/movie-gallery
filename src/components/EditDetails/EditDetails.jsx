import React, { Component } from "react";
import { connect } from "react-redux";

class EditDetails extends Component {

state = {
    title: this.props.store.movieTitleDetails.title,
    description: this.props.store.movieTitleDetails.description
}

    handleChangeFor = (key) => event => {
        console.log('this is working okay?');
        this.setState({
                [key]: event.target.value
        });
    }

    handleCancel = () => {
        this.props.history.push(`/details`);
    }

    render() {

        return (
            <div>
                Welcome to the Edit Details page!
                <p><input type="text" value={this.state.title} onChange={this.handleChangeFor('title')} /></p>
                <p><textarea value={this.state.description} onChange={this.handleChangeFor('description')} /></p>
                <p><button onClick={this.handleCancel}>Cancel</button></p>
                <p><button onClick={this.handleSave}>Save</button></p>
            </div>
        )

    }
}

const mapStateToProps = store => ({
    store,
});

export default connect(mapStateToProps)(EditDetails);