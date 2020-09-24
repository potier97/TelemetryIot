import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './components/header';
import clsx from 'clsx';
import Navigator from './components/navigator'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';
import useStyles from './style.js'

 


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
    }
    this.handleMobile = this.handleMobile.bind(this);
  };

  handleMobile(){
    this.setState({
      isMobile: !this.state.isMobile,
    })
  };

  // componentDidMount(){
  //   let isWidth = isWidthUp('md', this.props.width)
  //   this.setState({
  //     isDesktop: isWidth
  //   })
  // }

  render() {
    const { children, classes, auth, width } = this.props; 
    const isDesktop = isWidthUp('md', width);
    //console.log(isDesktop)
    //console.log('algo')
    return (
      <>
        <div
          className={clsx({ [classes.root]: true })}>
          <Header onDrawerToggle={this.handleMobile} statusbar={this.state.isMobile} stateScreen={isDesktop} />
          <Navigator
            path={auth.path}
            open={this.state.isMobile}
            variant={isDesktop ? 'permanent' : 'temporary'}
            statusbar={this.state.isMobile}
            onClose={this.handleMobile}
            stateScreen={this.state.isMobile}
          />
          <main
            className={clsx(classes.main, this.state.isMobile && classes.mainShift)}>
            {children}
          </main>
        </div>
      </>
    )
  };
}

Main.propTypes = {
  children: PropTypes.node,
};

export default withStyles(useStyles)(withWidth()(Main));

 