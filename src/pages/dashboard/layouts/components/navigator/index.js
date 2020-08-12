import React from 'react';
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
import { useHistory } from "react-router-dom";
import InfoIcon from '@material-ui/icons/Info';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';



//ESTILOS
import { withStyles } from '@material-ui/core/styles';
import useStyles from './style'

//FIREBASE
import { Auth } from '../../../../../config'



const categories = [
  {
    id: 'Opciones',
    children: [
      {
        id: 'Métricas',
        icon: <AssessmentOutlinedIcon />,
        href: '/dashboard/metrics'
      },
      {
        id: 'Acerca',
        icon: <InfoIcon />,
        href: '/dashboard/acerca',
      },
      {
        id: 'Salir',
        icon: <ExitToAppIcon />,
        href: '/'
      }
    ],
  }
];



function Navigator(props) {

  let history = useHistory();
  const { classes, stateScreen, statusbar, path, ...other } = props;


  const handlePage = async (value) => {

    if(value !== '/login'){
        history.push(value)
    }else{
        await Auth.signOut();
        history.push(value)
    }
  }


  




  return (
    <Drawer
      anchor="left"
      PaperProps={{ className: clsx(!statusbar && classes.appBar, classes.appBarShift) }}
      {...other}>


      <List disablePadding>
        <ListItem className={clsx(classes.firebase, classes.item, classes.itemCategory)}>

          <Grid item
            container
            direction="row"
            justify="center"
            alignItems="center">
            {/* <img src={Leaf} className={classes.logociduGrande} alt="leaf" /> */}
            <Avatar alt="leaf" src={Leaf} className={classes.iconButtonAvatar} />
          </Grid>


        </ListItem>
        {!stateScreen && <div className={classes.dividerHidden} />}
        {categories.map(({ id, children }) => (
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
                onClick={(event) => handlePage(href, event)}
                className={clsx(classes.item, path === href && classes.itemActiveItem)}
              >
                <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.itemPrimary }}
                >
                  {childId}
                </ListItemText>
              </ListItem>
            ))}

            {/* <Divider className={clsx(classes.divider, !stateScreen && classes.dividerHidden)} /> */}
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Navigator);