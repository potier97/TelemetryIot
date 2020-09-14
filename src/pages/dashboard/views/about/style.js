
const useStyles = (theme) => ({
    root: {
        background: '#e4e4e4', 
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },

    summary:{
        fontWeight: 'bold',
        fontFamily: 'Century-Gothic',
        color: '#18202c',
        textAling: 'justify'
    },

    containerSummary:{
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
    },

    greenhouseImg:{ 
        
        // width:'100%',
        // height:'100%'
    },

    inscriptionKey:{
        fontWeight: 'bold',
        fontFamily: 'Century-Gothic',
        color: '#18202c',
        textAlign: 'left'
    },
    inscriptionValue:{ 
        fontFamily: 'Century-Gothic',
        color: '#18202c',
    },





}); export default useStyles;
