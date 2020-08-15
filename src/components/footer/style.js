
const useStyles = (theme) => ({

    root: {
        display: 'flex',
        background: '#18202c',
    },
    container: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8),
        //display: 'flex',
    },


    iconsWrapper: {
        //height: 120,
    },

    iconContainer:{
        background: 'red',

    },

    containerCopy:{
        //background: 'red',
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },

    title: {
        //fontWeight: 'bold',
        fontFamily: 'Century-Gothic',
        color: '#ffff',
    },
    iconColor: {
        color: '#fff',
        fontSize: 25,
        margin: theme.spacing(1),
    },


}); export default useStyles;