const drawerWidth = 256;

const useStyles = (theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flex: 1,
    background: '#e4e4e4',
    height: '100%',
    [theme.breakpoints.up('md')]: {
      marginLeft: 65,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    
  },
  mainShift:{
    [theme.breakpoints.up('md')]: {
      marginLeft: drawerWidth,
      //width: `calc(100% - ${drawerWidth}px)`, 
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }), 
    },
  },
});
export default useStyles;
