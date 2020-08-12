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
 



  bottomHome: {
    color: 'white',  
    background: '#18202c',
    paddingBlockStart: '10px',
    paddingBlockEnd: '10px',
    paddingInlineStart: '40px',
    paddingInlineEnd: '40px',
    fontWeight: 'bold',
    fontFamily: 'Century-Gothic',
    //marginBottom: theme.spacing(20),
    '&:hover': {
      backgroundColor: '#18202c',
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


