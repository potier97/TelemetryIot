import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

//Estilos
import { withStyles } from '@material-ui/core/styles';
import useStyles from './style.js';
 




class Maps extends Component {
    render() {
        const { classes, lng, lat } = this.props;
        return (
            <> 
                <Grid className={classes.root}>
                    <Container maxWidth={false} className={classes.container}>
                        <Map
                            google={this.props.google}
                            zoom={15}
                            style={{ height: '450px', position: 'relative' }}
                            initialCenter={{ lat: lat, lng: lng }}
                            containerStyle={{
                                direction: "column",
                                justify: "center",
                                alignItems: "stretch",
                                position: 'relative',
                                width: '100%',
                                height: '100%'
                            }}
                        >
                            <Marker position={{ lat: lat, lng: lng }}
                                name={'Current location'} />
                        </Map>
                    </Container>
                </Grid>
            </>
        )
    };
};


Maps.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(useStyles)(GoogleApiWrapper({ apiKey: process.env.REACT_APP_APIKEY_GOOGLEMAPS })(Maps));
//export default withStyles(useStyles)(GoogleApiWrapper({ apiKey: 'AIzaSyCb8huxzfL_Kt_kdbZP6sEhiL9Bd4OmF9Q' })(Contactzone));