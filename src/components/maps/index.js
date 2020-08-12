import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import useStyles from './style.js';


function Maps(props) {
    const { classes } = props;
    const latPoss = 4.724277;
    const lngPoss = -73.968302;
    return (
        <Grid className={classes.root}>
            <Container maxWidth={false} className={classes.container}>
                <Map
                    google={props.google}
                    zoom={15}
                    style={{ height: '450px', position: 'relative' }}
                    initialCenter={{ lat: latPoss, lng: lngPoss }}
                    containerStyle={{ 
                        direction:"column",
                        justify:"center",
                        alignItems:"stretch",
                        position: 'relative',
                        width: '100%',
                        height: '100%'
                    }}
                >
                    <Marker position={{ lat: latPoss, lng: lngPoss }}
                        name={'Current location'} />
                </Map>
            </Container>
        </Grid>
    )
};
export default withStyles(useStyles)(GoogleApiWrapper({ apiKey: process.env.REACT_APP_APIKEY_GOOGLEMAPS })(Maps));
