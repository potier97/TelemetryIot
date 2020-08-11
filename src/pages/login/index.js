import React from 'react';
import Avatar from '@material-ui/core/Avatar';
// eslint-disable-next-line 
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline'; 
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'; 
import Typography from '@material-ui/core/Typography';
import Copyright from '../../components/copyright'
import Leaf from '../../images/leaf.svg'
import { withStyles } from '@material-ui/core/styles';
import useStyles from './style.js';


function Login(props) {

  const { classes } = props;

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>

          <Avatar alt="Leaf" src={Leaf} className={classes.avatar} />

          <Typography component="h1" variant="h5">
            Ingresar
          </Typography>


          <Grid item xs={10}
            container
            direction="column"
            justify="center"
            alignItems="center" 
            className={classes.containerButton}>
            <Button className={classes.button}>
              Uno
            </Button>
            <Button className={classes.button}>
              Dos
            </Button>
            <Button className={classes.button}>
              Tres
            </Button>
          </Grid>

          <Box mt={5}>
             <Copyright />
          </Box>
        </div>
      </Grid>
    </Grid>
  );
}; export default withStyles(useStyles)(Login);