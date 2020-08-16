const useStyles = (theme) => ({
    
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(2),
    },
    containerTittle:{
        marginLeft: theme.spacing(4),
    },
    tittle:{
        fontFamily: 'Century-Gothic',
        color: '#1498d5',
        fontWeight: 'bold', 
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px'
        },
    }

}); export default useStyles;