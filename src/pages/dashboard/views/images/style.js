const useStyles = (theme) => ({ 
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
        //height: 'calc(100% - 200px)'
    },
    cardContainer: {
        //backgroundColor: 'red',
        height: '10%'
        //height: 'calc(100% - 200px)'
    },
    greenhouse: {
        borderRadius: 7
    },
    carrousel:{
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    }


}); export default useStyles;
