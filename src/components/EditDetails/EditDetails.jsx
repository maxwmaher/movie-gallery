import React, { Component } from "react";
import { connect } from "react-redux";

class EditDetails extends Component {

    render() {

        return (
            <div>
                Welcome to the Edit Details
            </div>
        )

    }
}

const mapStateToProps = store => ({
    store,
});

export default connect(mapStateToProps)(EditDetails);