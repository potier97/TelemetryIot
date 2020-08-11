import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import useStyles from './style.js'

function Maintenance() {
    const classes = useStyles();
    return (
        <>
            <Grid aling='center' className={classes.rootMaintenance}>
                <Container>
                    <Grid className={classes.containerMaintenance}>
                        <Typography align="center" variant="h3" className={classes.tittle}>
                            PÁGINA EN DESARROLLO
                        </Typography>
                        <Typography align="center" variant="h5" className={classes.message}>
                            Nos encontramos actualizando esta página Web <br></br>
                            para ofrecer un análisis de variables ambientales en el Agro.
                        </Typography>
                        <Grid className={classes.footer} />
                    </Grid>
                </Container>
            </Grid>
        </>
    );
} export default Maintenance;
