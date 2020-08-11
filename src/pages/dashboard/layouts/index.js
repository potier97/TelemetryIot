import React, { useState } from 'react';
import PropTypes from 'prop-types'; 
import Header from './components/header';
import clsx from 'clsx'; 
import Navigator from './components/navigator'
import { useMediaQuery } from '@material-ui/core';
import { withStyles, useTheme  } from '@material-ui/core/styles';
import useStyles from './style.js'

function Main(props) {

  const { children, classes, auth } = props;

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true
  });
  
  const [mobileOpen, setOpenSidebar] = useState(false);

  const handleDrawerToggle = () => {
    setOpenSidebar(!mobileOpen);
  };

  return (
    <>
      <div 
        className={clsx({[classes.root]: true})}> 
          <Header onDrawerToggle={handleDrawerToggle} statusbar={mobileOpen} stateScreen={isDesktop}/>
          <Navigator
            path={auth.path}
            open={mobileOpen}
            variant={isDesktop ? 'permanent' : 'temporary'}
            statusbar={mobileOpen}
            onClose={handleDrawerToggle}
            stateScreen={mobileOpen}
          />
          <main 
            className={clsx(classes.main, mobileOpen && classes.mainShift)}>
              {children}
          </main>
      </div>
    </>
  );
}

Main.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Main); 
