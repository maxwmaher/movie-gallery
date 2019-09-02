import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Header extends Component {

    handleClick = () => {
        this.props.history.push(`/`);
    }

    render() {
        return (
            // Material-UI Header Bar
            <AppBar style={{ backgroundColor: '#0197cd' }} position="static">
                <Toolbar>
                    <Typography variant="h5">
                         <div onClick={this.handleClick}>Movies and Genres</div> {/*Click to head back to home page */}
          </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default withRouter(Header);
