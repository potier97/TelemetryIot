//IMAGEN
import noFoundBackground from "../../images/values2.jpg"



const useStyles = (theme) => ({

    root: {
        display: 'flex',
        overflow: 'hidden',
        //backgroundColor: "#72B01D",
        //rgba(63, 125, 32, 0.46) --> Verde  #3F7D20
        //rgba(114, 176, 29, 0.51) --> Verde Claro   #72B01D
        //rgba(214, 81, 8, 0.51)  --> Naranja #D65108

        backgroundImage: `linear-gradient(rgba(63, 125, 32, 0.5), rgba(63, 125, 32, 0.5)),  url(${noFoundBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
         // minHeight: 'calc(100% - 64px)',
        // [theme.breakpoints.up('sm')]: {
        //     height: 'calc(100% - 70px)',
        // }, 
    },
    container: {
        marginTop: theme.spacing(15),
        marginBottom: theme.spacing(30),
        display: 'flex',
        position: 'relative',
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(0, 5),
    }, 
    icon:{
        color: '#fff',
        margin: theme.spacing(2),
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
    title: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Century-Gothic',
    },
    contenttext:{
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Century-Gothic',
    },

 
 


}); export default useStyles;