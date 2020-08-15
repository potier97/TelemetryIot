import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
//import DialogContentText from '@material-ui/core/DialogContentText'; 
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';

//SPINNER
import CircularProgress from '@material-ui/core/CircularProgress';

// styles
import { withStyles, useTheme } from '@material-ui/core/styles';
import useStyles from "./style";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


function Spinner(props) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const { classes, title, open } = props;

    return (
        <>

            <Dialog
                //className={classes.dialog} 
                open={open}
                TransitionComponent={Transition}
                disableBackdropClick
                disableEscapeKeyDown
                fullScreen={fullScreen}
                maxWidth={'lg'}
                //onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                PaperProps={{
                    elevation: 8,
                }}
            >

                <DialogContent className={classes.root}>
                    <Grid container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        className={classes.container}>
                        <Typography component="h1" variant="h5" className={classes.title}>
                            {title}
                        </Typography>
                        <Grid item className={classes.containerDots}   >
                            <CircularProgress
                                className={classes.dots}
                                size={55}
                                thickness={4}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>

        </>
    );
};
export default withStyles(useStyles)(Spinner);
