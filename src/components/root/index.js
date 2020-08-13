import React, { Component } from "react";
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


//SPINNER

import CircularProgress from '@material-ui/core/CircularProgress';


//ESTILOS
import { withStyles } from '@material-ui/core/styles';
import useStyles from './style.js';

//CONTEXT
import { AuthContext } from '../../context/auth'




class Root extends Component {
    render() {
        const { children, classes, } = this.props;
        const { authReady } = this.context;

        if (!authReady) { 
            return (
                <>
                    <Dialog
                        open={true}
                        maxWidth={'md'}
                        aria-labelledby="max-width-dialog-title"
                        disableBackdropClick
                        disableEscapeKeyDown
                        fullWidth
                        className={classes.dialog}
                        PaperProps={{
                            elevation: 8,
                            className: classes.dialogPaper
                        }}
                    >

                        <DialogContent className={classes.root}>
                            <Grid container
                                direction="column"
                                justify="center"
                                alignItems="center"
                                className={classes.container}>
                                <Typography component="h1" variant="h3" className={classes.title}>
                                    Cargando...
                                </Typography>
                                <Grid item   className={classes.containerDots}   >
                                <CircularProgress
                                    className={classes.dots}
                                    size={80}
                                    thickness={4}
                                />
                                </Grid>
                            </Grid>
                        </DialogContent>
                    </Dialog>
                </>
            )
        }

        return (<> {children} </>)
    }
};


Root.contextType = AuthContext;

Root.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.object.isRequired
};



export default withStyles(useStyles)(Root);