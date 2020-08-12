import React, { Component } from "react";
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';

//ESTILOS
import { withStyles } from '@material-ui/core/styles';
import useStyles from './style.js';


class Product extends Component {

    // constructor(props){
    //     super(props);
    // } 

    render() {
        const { classes } = this.props;
        return (
            <>
                <Grid aling='center' className={classes.root}>
                    <Container className={classes.generalContainer}>

                        <Grid container item
                            direction="column"
                            justify="center"
                            alignItems="center"
                            className={classes.container}
                        >

                            <Typography color="inherit" align="center" variant="h3" marked="center" className={classes.title}>
                                Nombre Proyecto
                        </Typography>

                            <Typography color="inherit" align="center" variant="h5" className={classes.subtitle}>
                                Lorem Ipsum dolor
                        </Typography>

                            <Button
                                color="secondary"
                                variant="contained"
                                size="large"
                                className={classes.bottomHome}
                                component="a"
                                href="/login"
                            >  Ingresar
                        </Button>


                        </Grid>
                    </Container>
                </Grid>
            </>
        )
    }
};


Product.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Product);