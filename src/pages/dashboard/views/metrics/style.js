const useStyles = (theme) => ({
    root: {
        //height: '100%',
        background: '#e4e4e4',
    },
    appbar: {
        background: '#33658a',
    },
    title: {
        //fontWeight: 'bold',
        fontFamily: 'Century-Gothic',
        color: '#fff',

    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    card: {
        //background: '#e4e4e4',
        height: '100%',
    },
    carddos:{
        height: '200px',
    },

    containerVar: {
        //background: '#e4e4e4',
        height: '100%',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    titleCard: {
        fontWeight: 'bold',
        fontFamily: 'Century-Gothic',
        color: '#18202c',
    },
    icon: {
        margin: theme.spacing(2),
        width: theme.spacing(8),
        height: theme.spacing(8),
        [theme.breakpoints.down('xs')]: {
            margin: theme.spacing(1),
            width: theme.spacing(6),
            height: theme.spacing(6),
        },
    }


}); export default useStyles;
