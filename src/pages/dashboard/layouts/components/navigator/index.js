import React, { Component } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Leaf from '../../../../../images/leaf.svg';
import Grid from '@material-ui/core/Grid';
import InfoIcon from '@material-ui/icons/Info';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import StorageIcon from '@material-ui/icons/Storage';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { withRouter } from 'react-router-dom';

//ESTILOS
import { withStyles } from '@material-ui/core/styles';
import useStyles from './style'

//FIREBASE
import { Auth } from '../../../../../config'




class Navigator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          id: 'Opciones',
          children: [
            {
              id: 'Métricas',
              icon: 1, //<AssessmentOutlinedIcon />,
              href: '/dashboard/metrics'
            },
            {
              id: 'Acerca',
              icon: 2, //<InfoIcon />,
              href: '/dashboard/about',
            },
            {
              id: 'Plantas',
              icon: 3, //<StorageIcon />,
              href: '/dashboard/plants'
            },
            {
              id: 'Salir',
              icon: 4, //<ExitToAppIcon />,
              href: '/'
            }
          ],
        }
      ]
    }
    this.handlePage = this.handlePage.bind(this);
  }


  async handlePage(value) {
    //console.log('change route')
    if (value !== '/') {
      this.props.history.push(value)
    } else {
      try {
        let algo = await Auth.signOut();
        console.log(algo)
        await this.props.history.push(value)
      } catch (error) {
        console.log('Error: ', error)
      }
    }
  }


  render() {
    const { classes, stateScreen, staticContext, statusbar, path, ...rest } = this.props;


    return (
      <Drawer
        anchor="left"
        PaperProps={{ className: clsx(!statusbar && classes.appBar, classes.appBarShift) }}
        {...rest}>


        <List disablePadding>
          <ListItem className={clsx(classes.firebase, classes.item, classes.itemCategory)}>

            <Grid item
              container
              direction="row"
              justify="center"
              alignItems="center">
              <Avatar alt="leaf" src={Leaf} className={classes.iconButtonAvatar} />
            </Grid>


          </ListItem>
          {!stateScreen && <div className={classes.dividerHidden} />}
          {this.state.categories.map(({ id, children }) => (
            <React.Fragment key={id}>
              <ListItem className={clsx(stateScreen ? classes.categoryHeader : classes.categoryHeaderPrimaryHidden)}>
                <ListItemText className={clsx(stateScreen && classes.categoryHeaderPrimary)} >
                  {id}
                </ListItemText>
              </ListItem>
              {children.map(({ id: childId, icon, href }) => (
                <ListItem
                  key={childId}
                  button
                  onClick={() => this.handlePage(href)}
                  className={clsx(classes.item, path === href && classes.itemActiveItem)}
                >
                  <ListItemIcon className={classes.itemIcon}>
                    {icon === 1 ? <AssessmentOutlinedIcon /> : icon === 2 ? <InfoIcon /> : icon === 3 ? <StorageIcon /> : <ExitToAppIcon />}

                  </ListItemIcon>
                  <ListItemText
                    classes={{ primary: classes.itemPrimary }}
                  >
                    {childId}
                  </ListItemText>
                </ListItem>
              ))}
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    )
  }
}


Navigator.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(useStyles)(withRouter(Navigator));