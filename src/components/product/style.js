
//IMAGEN
import noFoundBackground from "../../images/noFound.jpg"


const useStyles = (theme) => ({


    root: {
        textAlign: 'center',
        backgroundImage: `linear-gradient(rgba(69, 69, 69, 0.45), rgba(69, 69, 69, 0.45)),  url(${noFoundBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',  
        alignItems: 'center', 
        height: 'calc(100% - 64px)',
        [theme.breakpoints.up('sm')]: {
            height: 'calc(100% - 70px)',
        },
        //backgroundColor: 'red',
        display: 'flex',
        flex: 1,
    }, 
    generalContainer:{
        //backgroundColor: 'red',
    },

    container: {
        //marginTop: theme.spacing(3),
        //marginBottom: theme.spacing(14),
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center', 
        //backgroundColor: 'red', 
    },
 

    title: {
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Century-Gothic',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    subtitle: {
        color: 'white',
        //fontWeight: 'bold',
        fontFamily: 'Century-Gothic',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    bottomHome: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
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

 

}); export default useStyles;