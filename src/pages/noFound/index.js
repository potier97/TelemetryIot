import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import useStyles from './style.js';


function NoFound(props) {

    const { classes } = props;
    let history = useHistory();

    function goto(e) {
        let value = e.currentTarget.value;
        history.push(value);
        //console.log(value);
    }

    return (
        <Grid aling='center' className={classes.root}>
            <Container >
                <Grid  container item
                    direction="column"
                    justify="center"
                    alignItems="center"
                    className={classes.container}
                    >
                    <Grid container 
                    direction="column"
                    justify="center"
                    alignItems="center"
                    //className={classes.container2} 
                    >
                        <Grid item >
                        <Typography align="center" variant="h4"   className={classes.tittle}>
                            Oops! No encotramos esa página
                        </Typography>
                        </Grid>
                        <Grid item >
                        <h1 className={classes.subtitlelineOne}>
                            <span className={classes.letter} >4</span>
                            <span className={classes.letter} >0</span>
                            <span className={classes.letter} >4</span>
                        </h1>
                        </Grid>
                        <Grid item >
                        <Typography align="center" variant="h5"   className={classes.subtitlelineTwo}>
                            Lo sentimos, pero la página solicitada no fue encontrada
                        </Typography>
                        </Grid>
                        <Grid item >
                        <Button
                            className={classes.bottomHome}
                            size="large"
                            value="/TelemetryIot"
                            onClick={(e) => goto(e)}
                        >Inicio</Button>
                         </Grid> 
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    );
}

NoFound.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(NoFound);