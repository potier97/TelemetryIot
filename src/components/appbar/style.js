

const useStyles = (theme) => ({


    appbar: {
        background: '#18202c',
    },

    toolbar: {
        height: 64,
        [theme.breakpoints.up('sm')]: {
            height: 70,
        },
        justifyContent: 'space-between',
    },

    title: {
        fontWeight: 'bold',
        fontFamily: 'Century-Gothic',
        color: '#fff'
    },

    placeholder: {
        height: 64,
        [theme.breakpoints.up('sm')]: {
            height: 70,
        },
    },


    left: {
        flex: 1,
    },


    right: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end',
    },
    rightLink: {
        fontWeight: 'bold',
        fontFamily: 'Century-Gothic',
        color: '#fff',
        marginLeft: theme.spacing(3),
    },



}); export default useStyles;