
import maintenanceBackground from "../../images/fondoPlantas.jpg";

const useStyles = (theme) => ({

    root: {
        height: '100%', 
    },
    image: {
        textAlign: 'center',
        backgroundImage: `linear-gradient(rgba(69, 69, 69, 0.45), rgba(69, 69, 69, 0.45)), url(${maintenanceBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    containerPaper:{
        backgroundColor: '#e4e4e4', 
    },
    paper: {
        //margin: theme.spacing(8, 4),
        height: '100%',
        //backgroundColor: 'red', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(2),
        width: theme.spacing(18),
        height: theme.spacing(18),
    },
    containerButton: {
        //marginTop: theme.spacing(5),
        //marginBottom: theme.spacing(5),
        
        //backgroundColor: 'red',
    },
    title: {
        fontWeight: 'bold',
        fontFamily: 'Century-Gothic',
        color: '#18202c',
    },
    subtitle: {
        fontWeight: 'bold',
        fontFamily: 'Century-Gothic',
        color: '#fff'
    },

    containerHeader:{
        //backgroundColor: 'red',
        margin: theme.spacing(3, 4),
    },


    socialButtom: {
        color: 'white', 
        background: '#18202c',
        paddingBlockStart: '10px',
        paddingBlockEnd: '10px',
        paddingInlineStart: '40px',
        paddingInlineEnd: '40px', 
        
        direction:"row",
        justify:"space-around",
        alignItems:"center",

        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        backgroundColor: '#18202c',
        '&:hover': {
            backgroundColor: '#18202e',
        },
    },
    iconsocial: {
        color: 'white',
        margin: theme.spacing(3),
        height: theme.spacing(4),
        width: theme.spacing(4), 
    },


}); export default useStyles;