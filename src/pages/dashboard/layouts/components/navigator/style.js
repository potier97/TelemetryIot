const drawerWidth = 256;

const useStyles = (theme) => ({
    categoryHeader: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    categoryHeaderPrimary: {
      color: theme.palette.common.white,
    },
    categoryHeaderPrimaryHidden: {
      display: 'none',
    },
    item: {
      paddingTop: 1,
      paddingBottom: 1,
      marginBottom: theme.spacing(2),
      color: 'rgba(255, 255, 255, 0.7)', 
    },
    itemCategory: {
      backgroundColor: '#232f3e',
      boxShadow: '0 -1px 0 #404854 inset',
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    firebase: {
      height: theme.spacing(6),
      fontSize: 24,
      color: theme.palette.common.white,
    },
    itemActiveItem: {
      color: '#4fc3f7',
    },
    itemPrimary: {
      fontSize: 'inherit',
    },
    itemIcon: {
      //minWidth: 'auto',
      marginLeft: theme.spacing(0.5),
      //marginRight: theme.spacing(2),
    },
    divider: {
      marginTop: theme.spacing(2),
    },
    dividerHidden: {
      marginBottom: theme.spacing(2),
    },
    logociduGrande: {
      width: theme.spacing(8),
      height: theme.spacing(8),
    },
    appBarShift:{
      width: drawerWidth,
      overflowX: 'hidden',
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    appBar:{
      width: '65px',
      overflowX: 'hidden',
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  });

export default useStyles;