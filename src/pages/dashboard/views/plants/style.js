const useStyles = (theme) => ({
    //const useStyles = (theme) => makeStyles({
    root: {
        //height: '100%',
        background: '#e4e4e4',
    },
    subroot: {
        height: '100%',
        background: '#e4e4e4',
    },
    subcontainer: {
        display: 'flex',
        //backgroundColor: 'red',
        height: '100%',
    },
    dots: {
        color: '#33658a',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },

    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        backgroundColor: '#1498d5',
        color: 'white',
        '&:hover': {
            backgroundColor: '#1498d5',
        },
    },


    multilineColor: {
        color: '#18202c',
        fontFamily: 'Century-Gothic',
    },

    labelRoot: {
        fontFamily: 'Century-Gothic',
        "&$labelFocused": {
            fontFamily: 'Century-Gothic',
            //color: "purple"
        },
    },
    labelFocused: {},




    //Tabla
    rootTable: {
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
