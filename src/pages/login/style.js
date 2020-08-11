
import maintenanceBackground from "../../images/fondoPlantas.jpg";

const useStyles = (theme) => ({

    root: {
        height: '100vh',
    },
    image: {
        textAlign: 'center',
        backgroundImage: `linear-gradient(rgba(69, 69, 69, 0.45), rgba(69, 69, 69, 0.45)), url(${maintenanceBackground})`,
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1), 
        width: theme.spacing(12),
        height: theme.spacing(12),
    },
    containerButton:{
        marginTop: theme.spacing(5), 
        marginBottom: theme.spacing(5), 
    },
    button:{
        marginTop: theme.spacing(5), 
        //marginBottom: theme.spacing(5), 
    },


}); export default useStyles;