
const useStyles = (theme) => ({

    root: {
        display: 'flex',
        overflow: 'hidden',
        backgroundColor: "#3F7D20", //72B01D D65108  3F7D20
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