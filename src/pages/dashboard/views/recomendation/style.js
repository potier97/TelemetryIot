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
    },



    containerTable: {
        [theme.breakpoints.up('lg')]: {
            maxHeight: '674px',
            overflowX: 'auto',
        },
    },





    carrousel: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    }


}); export default useStyles;
