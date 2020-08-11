import noFoundBackground from "../../images/noFound.jpg"

const useStyles = (theme) => ({

  root: {
    textAlign: 'center',
    backgroundImage: `linear-gradient(rgba(69, 69, 69, 0.45), rgba(69, 69, 69, 0.45)),  url(${noFoundBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover', 
  },
  container: {
    minHeight: '100vh',  
  }, 

  container2:{
    backgroundColor: 'red',
  },



  bottomHome: {
    color: 'white', 
    boxShadow: '0px 0px 4px 0.125px #ffffff',
    background: '#33658A',
    paddingBlockStart: '10px',
    paddingBlockEnd: '10px',
    paddingInlineStart: '40px',
    paddingInlineEnd: '40px',
    fontWeight: 'bold',
    fontFamily: 'Century-Gothic',
    //marginBottom: theme.spacing(20),
    '&:hover': {
      backgroundColor: '#33658B',
    },
  },



  tittle: {
    fontFamily: 'Century-Gothic',
    color: 'white',
    fontWeight: 'bold', 
  },
  subtitlelineOne: {
    alignItems: 'center',
    fontFamily: 'sans-serif',
    position: 'relative', 
    fontSize: '150px',
    fontWeight: 800,
    margin: 0,
    padding: 0,
    color: 'white',
    textTransform: 'uppercase',
    letterSpacing: '-20px',
    marginLeft: '-20px',
  },
  subtitlelineTwo: {
    color: 'white',
    fontFamily: 'Century-Gothic',
    marginBottom: theme.spacing(2),
    fontWeight: 'bold',
  },
  letter: {
    textShadow: '-8px 0px 0px gray',
  },

 


  // [theme.breakpoints.down('sm')]: {
  //   paddingBottom: theme.spacing(5),
  //   paddingTop: theme.spacing(5),
  // },

}); export default useStyles;


