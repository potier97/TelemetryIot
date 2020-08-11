const lightColor = 'rgba(255, 255, 255, 0.7)';
const drawerWidth = 256;


const useStyles = (theme) => ({
  appbarcololor: {
    background: '#33658a',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    background: '#33658a',
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  secondaryBar: {
    background: '#33658a',
    zIndex: 0,
  },
  menuButton: {
    marginLeft: -theme.spacing(1),
  },
  iconButtonAvatar: {
    margin: theme.spacing(1),
    //width: theme.spacing(12),
    //height: theme.spacing(12),
  },
  link: {
    textDecoration: 'none',
    color: '#33658a',
    '&:hover': {
      color: theme.palette.common.white,
    },
  },
  button: {
    borderColor: lightColor,
  },
  tittleSlide: {
    marginLeft: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      marginLeft: theme.spacing(0),
    },
  },
  nameUser: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      marginRight: theme.spacing(0),
    },
  },
});
export default useStyles;