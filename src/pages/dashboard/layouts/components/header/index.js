import React, { Component } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';


import AppBar from '@material-ui/core/AppBar';
//import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid'; 
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


import IconButton from '@material-ui/core/IconButton';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import MenuIcon from '@material-ui/icons/Menu';
//import Leaf from '../../../../../images/leaf.svg';


//ESTILOS
import { withStyles } from '@material-ui/core/styles';
import useStyles from './style.js';

//CONTEXT
import { AuthContext } from '../../../../../context/auth'

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      statusMenu: false
    };
    this.handleMenu = this.handleMenu.bind(this);
  };
 
  handleMenu() {
    this.setState({
      statusMenu: !this.state.statusMenu
    })
  };


  render() {
    const { classes, onDrawerToggle, statusbar, stateScreen } = this.props;
    //console.log('algo')
    return (
      <>
        <AppBar
          color="primary"
          position="sticky"
          className={clsx({
            [classes.appbarcololor]: true,
            [classes.appBarShift]: statusbar && stateScreen,
          })}
          elevation={0}>
          <Toolbar>

            <Grid item
              container
              direction="row"
              justify="space-between"
              alignItems="center">

              <Grid item
                container
                direction="row"
                justify="flex-start"
                alignItems="center" xs={12}>

                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  onClick={() => { onDrawerToggle(); this.handleMenu() }}
                  className={classes.menuButton}>
                  {stateScreen ?  <MenuIcon /> : <MenuOpenIcon />  }
                </IconButton>

                <Typography  noWrap variant="h6" component="h1" className={classes.tittleSlide}>
                  {this.context.user && this.context.user.displayName}
              </Typography>
              </Grid>

              {/* <Grid item
                container
                direction="row"
                justify="flex-end"
                alignItems="center" xs={5}> 
                 <Grid item>
                  <Avatar alt="leaf" src={Leaf} className={classes.iconButtonAvatar} />
                </Grid> 
              </Grid> */}
            </Grid>
          </Toolbar>
        </AppBar >
      </>
    );
  };
};


Header.contextType = AuthContext;

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(useStyles)(Header);