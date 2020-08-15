const useStyles = (theme) => ({

    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    containerTittle: {
        marginLeft: theme.spacing(4),
    },
    title: {
        fontFamily: 'Century-Gothic',
        color: '#1498d5',
        fontWeight: 'bold',
    },


    buttonPrincipal: {
        paddingBlockStart: '10px',
        paddingBlockEnd: '10px',
        paddingInlineStart: '40px',
        paddingInlineEnd: '40px',

        backgroundColor: '#1498d5',
        '&:hover': {
            backgroundColor: '#1498d5',
        },
    },
    buttonSecondary: {
        paddingBlockStart: '10px',
        paddingBlockEnd: '10px',
        paddingInlineStart: '40px',
        paddingInlineEnd: '40px',

        backgroundColor: 'red',
        '&:hover': {
            backgroundColor: 'red',
        },
    },

    titleButton: {
        color: 'white',
        fontFamily: 'Century-Gothic',
        fontWeight: 'bold',
    }

}); export default useStyles;