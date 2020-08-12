import React, { Component } from "react";
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

//ICONOS
import GoogleIcon from '../../images/googleBlanco.svg'; 
import GitHubIcon from '@material-ui/icons/GitHub';
import Leaf from '../../images/leaf.svg';

//CMPONENTE
import Copyright from '../../components/copyright'

//ESTILOS
import { withStyles } from '@material-ui/core/styles';
import useStyles from './style.js';

//FIREBASE
import {GithubProvider, GoogleProvider, Auth } from '../../config'



class Login extends Component {

  constructor(props) {
    super(props)
    this.handleSinginGoogle = this.handleSinginGoogle.bind(this); 
    this.handleSinginGitHub = this.handleSinginGitHub.bind(this);
  }



  async handleSinginGoogle() {

    try { 
      let statusLogin = await Auth.signInWithPopup(GoogleProvider)
      console.log(statusLogin);

      this.props.history.push({
        pathname: '/dashboard/metrics',
        //state: { detail: statusLogin }
      });

    } catch (error) {
      console.log('Error: ', error);

    }
  }
 

  async handleSinginGitHub() {

    try { 
      let statusLogin = await Auth.signInWithPopup(GithubProvider)
      console.log(statusLogin);

      this.props.history.push({
        pathname: '/dashboard/metrics',
        //state: { detail: statusLogin }
      });

    } catch (error) {
      console.log('Error: ', error);

    }
  }





  render() {
    const { classes } = this.props;
    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={8} square className={classes.containerPaper}>
          <div className={classes.paper} >

            <Grid container
              item
              direction="column"
              justify="center"
              alignItems="center"
              className={classes.containerHeader}>
              <Avatar alt="Leaf" src={Leaf} className={classes.avatar} />
              <Typography component="h1" variant="h5" className={classes.title}>
                Ingresar
              </Typography>
            </Grid>

            <Grid item xs={8}
              container
              direction="column"
              justify="center"
              alignItems="center"
              className={classes.containerButton}>
              <Grid container
                direction="column"
                justify="center"
                alignItems="stretch">
                <Fab variant="extended" aria-label="add" className={classes.socialButtom} onClick={this.handleSinginGoogle}>
                  <img src={GoogleIcon} alt="google" className={classes.iconsocial} />
                  <Typography component="h1" variant="body2" className={classes.subtitle} >
                    Ingresar con Gmail
                </Typography>
                </Fab>
              </Grid>
             
             
              <Grid container
                direction="column"
                justify="center"
                alignItems="stretch">
                <Fab variant="extended" aria-label="add" className={classes.socialButtom} onClick={this.handleSinginGitHub}>
                  <GitHubIcon className={classes.iconsocial} />
                  <Typography component="h1" variant="body2" className={classes.subtitle} >
                    Ingresar con Git
                </Typography>
                </Fab>
              </Grid>
            </Grid>

            <Grid item className={classes.containerHeader}>
              <Box mt={5}>
                <Copyright />
              </Box>
            </Grid>
          </div>
        </Grid>
      </Grid>
    )
  };
}; export default withStyles(useStyles)(Login);