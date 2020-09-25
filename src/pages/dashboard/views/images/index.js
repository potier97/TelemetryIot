import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
//import TextField from '@material-ui/core/TextField';
import Card from '../../../../components/card';
import BigTitle from '../../../../components/bigTittle';
import CssBaseline from '@material-ui/core/CssBaseline';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

//SPINNER
//import CircularProgress from '@material-ui/core/CircularProgress';


//IMAGENES
import Uno from '../../../../images/carousel/uno.jpeg'
import Dos from '../../../../images/carousel/dos.jpeg'
import Tres from '../../../../images/carousel/tres.jpeg'
import Cuatro from '../../../../images/carousel/cuatro.jpeg'
import Cinco from '../../../../images/carousel/cinco.jpeg'
import Seis from '../../../../images/carousel/seis.jpeg'
import Siete from '../../../../images/carousel/siete.jpeg'
import Ocho from '../../../../images/carousel/ocho.jpeg'
import Nueve from '../../../../images/carousel/nueve.jpeg'
import Diez from '../../../../images/carousel/diez.jpeg'

import Once from '../../../../images/carousel/once.jpeg'
import Doce from '../../../../images/carousel/doce.jpeg'
import Trece from '../../../../images/carousel/trece.jpeg'
import Catorce from '../../../../images/carousel/catorce.jpeg'
import Quince from '../../../../images/carousel/quince.jpeg'
import Dieciseis from '../../../../images/carousel/dieciseis.jpeg'
//import Diecisiete from '../../../../images/carousel/diecisiete.jpeg'
import Dieciocho from '../../../../images/carousel/dieciocho.jpeg'
import Diecinueve from '../../../../images/carousel/diecinueve.jpeg'
import Veinte from '../../../../images/carousel/veinte.jpeg'
import veintiuno from '../../../../images/carousel/veintiuno.jpeg'
import veintidos from '../../../../images/carousel/veintidos.jpeg'



//ESTILOS
import { withStyles } from '@material-ui/core/styles';
import useStyles from './style.js'





class Images extends Component {

  constructor(props) {
    super(props);
    this.state = {
      //Modal
      stateModal: false,
      stateModalDelete: false,
      stateModalSpinner: false,
    };
  };


  render() {
    const { classes, width } = this.props;
    const isDesktop = isWidthUp('lg', width);

    return (

      <Grid className={classes.root}>
        <CssBaseline />
        <BigTitle title={'Imágenes'} />

        <Container maxWidth={false} className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} >
              <Card
                disableWidgetMenu
                title={'Invernadero'}
              >
                <Grid item xs={12} >
                  <Carousel
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    interval={2500}
                    infiniteLoop={true}
                    useKeyboardArrows={false}
                    swipeable={true}
                    emulateTouch={true}
                    width={isDesktop ? '70%' : '100%'}
                    dynamicHeight={true}
                    className={classes.carrousel}
                  >
                    <div>
                      <img src={Uno} alt="Uno" className={classes.greenhouse} height={isDesktop ? '650px' : null} />
                    </div>
                    <div>
                      <img src={Dos} alt="Dos" className={classes.greenhouse} height={isDesktop ? '650px' : null} />
                    </div>
                    <div>
                      <img src={Tres} alt="Tres" className={classes.greenhouse} height={isDesktop ? '650px' : null} />
                    </div>
                    <div>
                      <img src={Cuatro} alt="Cuatro" className={classes.greenhouse} height={isDesktop ? '650px' : null} />
                    </div>
                    <div>
                      <img src={Cinco} alt="Cinco" className={classes.greenhouse} height={isDesktop ? '650px' : null} />
                    </div>
                    <div>
                      <img src={Seis} alt="Seis" className={classes.greenhouse} height={isDesktop ? '650px' : null} />
                    </div>
                    <div>
                      <img src={Siete} alt="Siete" className={classes.greenhouse} height={isDesktop ? '650px' : null} />
                    </div>
                    <div>
                      <img src={Ocho} alt="Ocho" className={classes.greenhouse} height={isDesktop ? '650px' : null} />
                    </div>
                    <div>
                      <img src={Nueve} alt="Nueve" className={classes.greenhouse} height={isDesktop ? '650px' : null} />
                    </div>
                    <div>
                      <img src={Diez} alt="Diez" className={classes.greenhouse} height={isDesktop ? '650px' : null} />
                    </div>
                    <div>
                      <img src={Once} alt="Once" className={classes.greenhouse} height={isDesktop ? '650px' : null} />
                    </div>
                    <div>
                      <img src={Doce} alt="Doce" className={classes.greenhouse} height={isDesktop ? '650px' : null} />
                    </div>
                    <div>
                      <img src={Trece} alt="Trece" className={classes.greenhouse} height={isDesktop ? '650px' : null} />
                    </div>
                    <div>
                      <img src={Catorce} alt="Catorce" className={classes.greenhouse} height={isDesktop ? '650px' : null} />
                    </div>
                    <div>
                      <img src={Quince} alt="Quince" className={classes.greenhouse} height={isDesktop ? '650px' : null} />
                    </div>
                    <div>
                      <img src={Dieciseis} alt="Dieciseis" className={classes.greenhouse} height={isDesktop ? '650px' : null} />
                    </div>
                    {/* <div>
                    <img src={Diecisiete} alt="Diecisiete" className={classes.greenhouse} height={isDesktop ? '650px' : null} />
                  </div> */}
                    <div>
                      <img src={Dieciocho} alt="Dieciocho" className={classes.greenhouse} height={isDesktop ? '650px' : null} />
                    </div>
                    <div>
                      <img src={Diecinueve} alt="Diecinueve" className={classes.greenhouse} height={isDesktop ? '650px' : null} />
                    </div>
                    <div>
                      <img src={Veinte} alt="Veinte" className={classes.greenhouse} height={isDesktop ? '650px' : null} />
                    </div>
                    <div>
                      <img src={veintiuno} alt="veintiuno" className={classes.greenhouse} height={isDesktop ? '650px' : null} />
                    </div>
                    <div>
                      <img src={veintidos} alt="veintidos" className={classes.greenhouse} height={isDesktop ? '650px' : null} />
                    </div>
                  </Carousel>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    )
  };
}

Images.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(withWidth()(Images));
















