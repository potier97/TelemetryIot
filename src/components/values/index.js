import React, { Component } from "react";
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


//lOGOS
import TimelineIcon from '@material-ui/icons/Timeline';
import StorageIcon from '@material-ui/icons/Storage';
import RouterIcon from '@material-ui/icons/Router';
// eslint-disable-next-line
import CloudIcon from '@material-ui/icons/Cloud';

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
                                    <Typography variant="h6" className={classes.title}>
                                    OBJETIVO 1
                                    </Typography>
                                    <Typography variant="h5" className={classes.contenttext}>
                                        {'From the latest trendy boutique hotel to the iconic palace with XXL pool'}
                                        {', go for a mini-vacation just a few subway stops away from your home.'}
                                    </Typography>
                                </div>
                            </Grid>


                            <Grid item xs={12} md={4}>
                                <div className={classes.item}>
                                   

                                    <TimelineIcon className={classes.icon} />
                                    <Typography variant="h6" className={classes.title}>
                                    OBJETIVO 2
                                    </Typography>
                                    <Typography variant="h5" className={classes.contenttext}>
                                        {'Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… '}
                                        {'your Sundays will not be alike.'}
                                    </Typography>
                                </div>
                            </Grid>


                            <Grid item xs={12} md={4}>
                                <div className={classes.item}>
                                 

                                    <StorageIcon className={classes.icon} />
                                    <Typography variant="h6" className={classes.title}>
                                        OBJETIVO 3
                                    </Typography>
                                    <Typography variant="h5" className={classes.contenttext}>
                                        {'By registering, you will access specially negotiated rates '}
                                        {'that you will not find anywhere else.'}
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