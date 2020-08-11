import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
//import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Leaf from '../../../../../images/leaf.svg';
import { withStyles } from '@material-ui/core/styles';
import useStyles from './style.js';

function Header(props) {

  const { classes, onDrawerToggle, statusbar, stateScreen } = props;

  const [statusMenu, setMenu] = React.useState(false);

  const handleChange = () => {
    setMenu(!statusMenu);
  };

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
              alignItems="center" xs={7}>

              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={() => { onDrawerToggle(); handleChange() }}
                className={classes.menuButton}>
                {statusMenu ? <MenuOpenIcon /> : <MenuIcon />}
              </IconButton>

              <Typography color="inherit" noWrap variant="h5" component="h1" className={classes.tittleSlide}>
                Dashboard
              </Typography>
            </Grid>

            <Grid item
              container
              direction="row"
              justify="flex-end"
              alignItems="center" xs={5}>
              {/* <Hidden xsDown>
                <Grid item
                  direction="row"
                  justify="center"
                  alignItems="center">
                  <Typography color="inherit" noWrap variant="h6" component="h1" className={classes.nameUser}>
                    Nombre Usuario
                </Typography>
                </Grid>
              </Hidden> */}
              <Grid item>
                <Avatar alt="leaf" src={Leaf} className={classes.iconButtonAvatar} />
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar >
    </>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(useStyles)(Header);