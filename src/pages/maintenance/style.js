import { makeStyles } from '@material-ui/core/styles';
import maintenanceBackground from "../../images/noFound.jpg";


const useStyles = makeStyles((theme) => ({
  rootMaintenance: {
    textAlign: 'center',
    backgroundImage: `linear-gradient(rgba(69, 69, 69, 0.45), rgba(69, 69, 69, 0.45)), url(${maintenanceBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  containerMaintenance: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tittle: {
    color: 'white',
    fontFamily: 'Century-Gothic',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: theme.spacing(5),
  },
  message: {
    color: 'white',
    fontFamily: 'Century-Gothic',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  footer: {
    width: '15%',
    borderBottom: '10px solid #fff',
    marginTop: theme.spacing(3),
    borderRadius: 36, 
    [theme.breakpoints.down('xs')]: {
      width: '40%',
    },
  },



})); export default useStyles;