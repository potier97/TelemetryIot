import React, { Component } from "react";
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

//lOGOS
import TimelineIcon from '@material-ui/icons/Timeline';
import RouterIcon from '@material-ui/icons/Router';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';


//ESTILOS
import { withStyles } from '@material-ui/core/styles';
import useStyles from './style.js';


class Values extends Component {

    // constructor(props){
    //     super(props);
    // } 

    render() {
        const { classes } = this.props;
        return (
            <>
                <Grid aling='center' className={classes.root}>
                    <Container className={classes.container}>

                        <Grid container spacing={5}>
                            <Grid item xs={12} md={4}>
                                <div className={classes.item}>
                                    

                                    <RouterIcon className={classes.icon} />
                                    <Typography variant="h4" className={classes.title}>
                                       Telemetría
                                    </Typography>
                                    <Typography variant="h5" align='center' className={classes.contenttext}>
                                        {'Establecer un protocolo de comunicación de los dispositivos IoT enfocados a la '}
                                        {'medición de variables del entorno y del clima, para garantizar una conexión segura '}
                                        {'y estable a una base de datos.'}
                                    </Typography>
                                </div>
                            </Grid>


                            <Grid item xs={12} md={4}>
                                <div className={classes.item}>
                                   

                                    <TimelineIcon className={classes.icon} />
                                    <Typography variant="h4" className={classes.title}>
                                        Análisis
                                    </Typography>
                                    <Typography variant="h5" align='center' className={classes.contenttext}>
                                        {'Identificar las variables del entorno y del clima que generen mayor '} 
                                        {'impacto en el cultivo agrícola estudiado a través de procedimientos '} 
                                        {'de Analítica. '}
                                    </Typography>
                                </div>
                            </Grid>


                            <Grid item xs={12} md={4}>
                                <div className={classes.item}>
                                 

                                    <CloudQueueIcon className={classes.icon} />
                                    <Typography variant="h4" className={classes.title}>
                                        Nube
                                    </Typography>
                                    <Typography variant="h5" align='center' className={classes.contenttext}>
                                        {'Establecer una plataforma de servicios y almacenamiento en la nube, '}
                                        {'para difusión y uso de la información acerca del cultivo agrícola '}
                                        {'estudiado. '}
                                    </Typography>
                                </div>
                            </Grid>

                        </Grid>
                    </Container>
                </Grid>

            </>
        )
    }
}; 

Values.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(useStyles)(Values);