import React from 'react';
import Typography from '@material-ui/core/Typography'; 
import Link from '@material-ui/core/Link';

function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="textSecondary"
            align="center"
            style={props.white ? { 'color': '#fff', fontFamily: 'Century-Gothic', } : { 'color': '#18202c', fontFamily: 'Century-Gothic', }}> 
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/potier97/AgroIot" target="_blank">
                Telemetry Iot
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
};


export default Copyright;