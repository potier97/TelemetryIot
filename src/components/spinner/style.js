const useStyles = (theme) => ({

    dialog: {
        height: '100%',
        backgroundColor: '#72B01D',
    },
    dialogPaper: {
        backgroundColor: '#e4e4e4',
        height: '50%',
    },

    root: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        //backgroundColor: 'red',
        direction:"column",
        justify:"center",
        alignItems:"center",
    },
    container: {
        display: 'flex',
        //backgroundColor: 'red',
        height: '100%',  
    },

    dots:{
        color: '#18202c', 
    },
    containerDots:{
        margin: theme.spacing(4), 
    },

    title: {
        fontWeight: 'bold',
        fontFamily: 'Century-Gothic',
        color: '#18202c',
    },

}); export default useStyles;