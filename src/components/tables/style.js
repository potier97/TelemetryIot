const useStyles = (theme) => ({


    root: {
        marginBottom: theme.spacing(6),
    },
    table: {
        minWidth: 650,
    },

    title: {
        color: '#18202c',
        fontFamily: 'Century-Gothic',
        fontWeight: 'bold',
    },
    text: {
        fontFamily: 'Century-Gothic',
        fontWeight: 'bold',
    },
    icon: {
        color: '#ffffff',
        backgroundColor: '#33658a', 
        height: theme.spacing(5),
        width: theme.spacing(5),
        '&:hover': {
            color: '#ffffff',
            backgroundColor: '#33658a',
        }, 
    },
 
}); export default useStyles;