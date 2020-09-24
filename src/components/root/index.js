import React, { Component } from "react";
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';


//SPINNER
import CircularProgress from '@material-ui/core/CircularProgress';


//ESTILOS
import { withStyles } from '@material-ui/core/styles';
import useStyles from './style.js';

//CONTEXT
import { AuthContext } from '../../context/auth'


class Root extends Component {
    render() {
        const { children, classes, width } = this.props;
        const isDesktop = isWidthUp('sm', width);
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
                                <Typography component="h1" variant={isDesktop ? "h3":"h5"} className={classes.title}>
                                    Cargando...
                                </Typography>
                                <Grid item   className={classes.containerDots}   >
                                <CircularProgress
                                    className={classes.dots}
                                    size={isDesktop ? 80 : 50}
                                    thickness={isDesktop ? 4 : 3}
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

export default withStyles(useStyles)(withWidth()(Root));