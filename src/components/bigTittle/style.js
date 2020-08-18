const useStyles = (theme) => ({
    
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(2),
        //backgroundColor: 'red',
    },
    containerTittle:{
        //marginLeft: theme.spacing(2),
        //backgroundColor: 'red',
    },
    tittle:{
        fontFamily: 'Century-Gothic',
        color: '#1498d5',
        fontWeight: 'bold', 
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px'
        },
    },

    icon: {
        color: '#ffffff',
        backgroundColor: '#33658a', 
        height: theme.spacing(6),
        width: theme.spacing(6),
        margin: theme.spacing(1),
        '&:hover': {
            color: '#ffffff',
            backgroundColor: '#33658a',
            //margin: theme.spacing(0),
        }, 
    },

}); export default useStyles;