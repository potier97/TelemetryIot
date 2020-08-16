import React from 'react';
//import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
//import Box from '@material-ui/core/Box';

//ESTILOS
import { withStyles } from '@material-ui/core/styles';
import useStyles from './style.js'


function TabPanel(props) {
    const { children, classes, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Grid  >
                    {children}
                </Grid>
            )}
        </div>
    );
};


export default withStyles(useStyles)(TabPanel); 