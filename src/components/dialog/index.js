import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
//import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';

// styles
import { withStyles, useTheme } from '@material-ui/core/styles';
import useStyles from "./style";
 

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


function Modal(props) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const { classes, title, children, handleClose, handleConfirm, open } = props;

    return (
        <>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                disableBackdropClick
                disableEscapeKeyDown
                fullScreen={fullScreen}
                maxWidth={'lg'}
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description" 
                PaperProps={{
                    elevation: 8, 
                }} 
            >
                <DialogTitle id="alert-dialog-slide-title" >
                    <Typography component="p" variant="h4" className={classes.title}>
                        {title}
                    </Typography>
                </DialogTitle>
                <DialogContent dividers>
                    {/* <DialogContentText id="scroll-dialog-description"> */}
                        {children}
                    {/* </DialogContentText> */}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} className={classes.buttonSecondary} >
                        <Typography component="h2" variant="h6" className={classes.titleButton}>
                            Cancelar
                        </Typography>
                    </Button>
                    <Button onClick={handleConfirm} className={classes.buttonPrincipal} >
                        <Typography component="h2" variant="h6" className={classes.titleButton}>
                            Aceptar
                        </Typography>
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};
export default withStyles(useStyles)(Modal);
