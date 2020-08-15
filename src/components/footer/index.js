import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Typography from '@material-ui/core/Typography';

//LOGOS



//COMPONENTES
import Copyright from '../copyright'

//ESTILOS
import { withStyles } from '@material-ui/core/styles';
import useStyles from './style.js';


class Footer extends Component {

    // constructor(props){
    //     super(props);
    // } 



    render() {
        const { classes } = this.props;
        return (
            <>
                <Grid className={classes.root}>
                    <Container className={classes.container}>


                        <Grid container
                            direction="column"
                            justify="flex-start"
                            alignItems="stretch" >

                            <Grid item xs={12}  >
                                <Typography variant="h6" gutterBottom className={classes.title}>
                                    Contacto
                                </Typography>
                            </Grid>

                            <Grid item xs={12}
                                container
                                direction="row"
                                justify="center"
                                alignItems="center"
                                //className={classes.iconsWrapper}
                                spacing={2}>

                                <Grid item
                                    xs={6}
                                    container
                                    direction="column"
                                    justify="center"
                                    alignItems="flex-start"
                                //className={classes.iconContainer}
                                >

                                    <Grid container
                                        direction="row"
                                        justify="flex-start"
                                        alignItems="center">
                                        <LinkedInIcon className={classes.iconColor} />
                                        <Typography variant="body2" gutterBottom className={classes.title}>
                                            @usuario
                                        </Typography>
                                    </Grid>
                                    <Grid container
                                        direction="row"
                                        justify="flex-start"
                                        alignItems="center">
                                        <MailOutlineIcon className={classes.iconColor} />
                                        <Typography variant="body2" gutterBottom className={classes.title}>
                                            correo@ejemplo.com
                                            </Typography>
                                    </Grid>
                                </Grid>

                                <Grid item
                                    xs={6}
                                    container
                                    direction="column"
                                    justify="center"
                                    alignItems="flex-start"
                                //className={classes.iconContainer}
                                >
                                    <Grid container
                                        direction="row"
                                        justify="flex-start"
                                        alignItems="center">
                                        <LinkedInIcon className={classes.iconColor} />
                                        <Typography variant="body2" gutterBottom className={classes.title}>
                                            @usuario
                                            </Typography>
                                    </Grid>
                                    <Grid container
                                        direction="row"
                                        justify="flex-start"
                                        alignItems="center">
                                        <MailOutlineIcon className={classes.iconColor} />
                                        <Typography variant="body2" gutterBottom className={classes.title}>
                                            correo@ejemplo.com
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid container
                                direction="row"
                                justify="flex-start"
                                alignItems="center"
                                className={classes.containerCopy}>
                                <Copyright white />
                            </Grid>

                        </Grid>

                    </Container>
                </Grid>
            </>
        )
    }
}; export default withStyles(useStyles)(Footer);