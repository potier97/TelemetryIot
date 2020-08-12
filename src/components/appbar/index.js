import React, { Component } from "react";
import PropTypes from 'prop-types'; 
//import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

//ESTILOS
import { withStyles } from '@material-ui/core/styles';
import useStyles from './style.js';


class AppbarIot extends Component {

    // constructor(props) {
    //     super(props);
    // }



    render() {
        const { classes } = this.props;
        return (
            <>
                <AppBar elevation={0} position="fixed" className={classes.appbar}>
                    <Toolbar className={classes.toolbar}>
                        <div className={classes.left} />
                        <Typography component="h1" variant="h4" className={classes.title} >
                            {'Telemetry Iot'}
                        </Typography>
                        <div className={classes.right}>
                            {/* <Link
                                variant="h6"
                                underline="none"
                                className={classes.rightLink}
                                href="/login"
                            >
                                {'Ingresar'}
                            </Link> */}
                        </div>

                    </Toolbar>
                </AppBar>
                <div className={classes.placeholder} />
            </>
        )
    }
};

AppbarIot.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(useStyles)(AppbarIot);