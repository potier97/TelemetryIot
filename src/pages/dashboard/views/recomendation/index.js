import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '../../../../components/card'
import BigTitle from '../../../../components/bigTittle'
import CssBaseline from '@material-ui/core/CssBaseline';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

//COMPONENTES DE LA TABLA
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

//Carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

//CONTEXTO
import { AnalysisContext } from '../../../../context/analisys';

//SPINNER
import CircularProgress from '@material-ui/core/CircularProgress';

//TREEMAP
import TreeMap from '../../../../components/treeMap';
 

//ESTILOS
import { withStyles } from '@material-ui/core/styles';
import useStyles from './style.js'



const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: '#f5f5f5',
    },
  },
}))(TableRow);

class Recomendation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataReadyGo: false,
      showDots: true,
      delayTime: 5000,

      airTempImages: [],
      airHumImages: [],
      earthTempImages: [],
      earthHumImages: [],
      lightImages: [],

    }
  };

  componentDidMount() {
    this.setState({
      dataReadyGo: true
    })
    //console.log('ok')
  }


  render() {
    const { classes, width } = this.props; 
    const { dataReady, heatMaps, plants } = this.context;
    const isDesktop = isWidthUp('md', width);
    const isDesktopTwo = isWidthUp('lg', width);


    //if (!this.state.dataReadyGo) {
    if (!dataReady) {
      return (
        <Grid className={classes.subroot}>
          <CssBaseline />

          <Grid container
            direction="column"
            justify="center"
            alignItems="center"
            className={classes.subcontainer}>


            <CircularProgress
              className={classes.dots}
              size={isDesktop ? 250 : 100}
              thickness={isDesktop ? 6 : 4}
            />

          </Grid>
        </Grid>
      )
    }


    //console.log(heatMaps)
    //console.log(plants)
  
    return (
      <Grid className={classes.root}>
        <CssBaseline />
        <BigTitle title={'Recomendación'} />
        <Container maxWidth={false} className={classes.container}>
          <Grid container spacing={3}>



            <Grid item xs={12}>
              <Card
                disableWidgetMenu
                title={'Mapa de Densidad'}
              >
                <TreeMap data={plants} />
              </Card>
            </Grid>

            {/* PRIMERA FILA
            PRIMERA FILA
            PRIMERA FILA
            PRIMERA FILA
            PRIMERA FILA
            PRIMERA FILA */}


            <Grid item xs={12}
            //className={classes.containerTable}
            >
              <Card
                disableWidgetMenu
                title={'Tabla'}
                bodyClass={classes.containerTable}
              >

                <TableContainer className={classes.rootTable}  >
                  <Table className={classes.table}  >
                    <TableHead>
                      <TableRow >
                        <TableCell padding={'checkbox'} />
                        <TableCell >
                          <Typography component="h1" variant="h6" className={classes.title}>
                            Planta
                          </Typography>
                        </TableCell>
                        <TableCell align="right" >
                          <Typography component="h1" variant="body2" className={classes.title}>
                            Temp. Aire
                          </Typography>
                        </TableCell>
                        <TableCell align="right" >
                          <Typography component="h1" variant="body2" className={classes.title}>
                            Hum. Aire
                          </Typography>
                        </TableCell>
                        <TableCell align="right" >
                          <Typography component="h1" variant="body2" className={classes.title}>
                            Temp. Tierra
                          </Typography>
                        </TableCell>
                        <TableCell align="right" >
                          <Typography component="h1" variant="body2" className={classes.title}>
                            Hum. Tierra
                          </Typography>
                        </TableCell>
                        <TableCell align="right" >
                          <Typography component="h1" variant="body2" className={classes.title}>
                            Luz
                          </Typography>
                        </TableCell>
                        <TableCell align="right" >
                          <Typography component="h1" variant="body2" className={classes.title}>
                            Recomendación
                          </Typography>
                        </TableCell>
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {plants.map((plant, index) =>
                        <StyledTableRow key={index}>
                          <TableCell component="th" scope="row" className={classes.text}>{parseInt(index)+1}</TableCell>
                          <TableCell component="th" scope="row" className={classes.text}>{plant.namePlants}</TableCell>
                          <TableCell align="center" className={classes.text}>{plant.reliabilityAirTemp} {' %'}</TableCell>
                          <TableCell align="center" className={classes.text}>{plant.reliabilityAirHum} {' %'}</TableCell>
                          <TableCell align="center" className={classes.text}>{plant.reliabilityEarthTemp} {' %'}</TableCell>
                          <TableCell align="center" className={classes.text}>{plant.reliabilityEarthHum} {' %'}</TableCell>
                          <TableCell align="right" className={classes.text}>{plant.reliabilityLight} {' %'}</TableCell>
                          <TableCell align="center" className={classes.text}>{plant.value} {' %'}</TableCell>
                        </StyledTableRow>
                      )}

                      {/* <StyledTableRow >
                        <TableCell component="th" scope="row" className={classes.text}>dffvdv</TableCell>
                        <TableCell align="right" className={classes.text}>fgb {' %'}</TableCell>
                      </StyledTableRow> */}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Card>
            </Grid>

            {/*  SEGUNDA FILA
            SEGUNDA FILA
            SEGUNDA FILA
            SEGUNDA FILA
            SEGUNDA FILA
            SEGUNDA FILA */}


            <Grid item xs={12}>
              <Card
                disableWidgetMenu
                title={'Mapa de Calor - Temperatura Aire - 24 Horas'}
              >
                <Grid item xs={12} >
                  <Carousel
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    interval={this.state.delayTime}
                    infiniteLoop={true}
                    useKeyboardArrows={false}
                    swipeable={true}
                    emulateTouch={true}
                    width={isDesktopTwo ? '70%' : '100%'}
                    showIndicators={this.state.showDots}
                    dynamicHeight={true}
                    className={classes.carrousel}
                  >
                    {heatMaps.map((map, index) =>
                      <div key={index} >
                        <img
                          //src={"https://storage.googleapis.com/telemetryiot.appspot.com/temperaturaAire/Temperatura-Aire-24-09-2020_15-52-09.png"}
                          src={map.airTempImg}
                          alt={map.airTempImg}
                          className={classes.greenhouse}
                          height={isDesktopTwo ? '650px' : null}
                        />
                      </div>
                    )}
                  </Carousel>
                </Grid>
              </Card>
            </Grid>

            {/* TERCERA FILA
            TERCERA FILA
            TERCERA FILA
            TERCERA FILA
            TERCERA FILA */}

            <Grid item xs={12}>
              <Card
                disableWidgetMenu
                title={'Mapa de Calor - Humedad Aire - 24 Horas'}
              >
                <Grid item xs={12} >
                  <Carousel
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    interval={this.state.delayTime}
                    infiniteLoop={true}
                    useKeyboardArrows={false}
                    swipeable={true}
                    emulateTouch={true}
                    width={isDesktopTwo ? '70%' : '100%'}
                    showIndicators={this.state.showDots}
                    dynamicHeight={true}
                    className={classes.carrousel}
                  >
                    {heatMaps.map((map, index) =>
                      <div key={index} >
                        <img
                          //src={"https://storage.googleapis.com/telemetryiot.appspot.com/humedadAire/Humedad-Aire-24-09-2020_15-52-09.png"} 
                          src={map.airHumImg}
                          alt={map.airHumImg}
                          className={classes.greenhouse}
                          height={isDesktopTwo ? '650px' : null}
                        />
                      </div>
                    )}
                  </Carousel>
                </Grid>
              </Card>
            </Grid>

            {/* CUARTA FILA
            CUARTA FILA
            CUARTA FILA
            CUARTA FILA
            CUARTA FILA */}

            <Grid item xs={12} >
              <Card
                disableWidgetMenu
                title={'Mapa de Calor - Temperatura Tierra - 24 Horas'}
              >
                <Grid item xs={12} >
                  <Carousel
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    interval={this.state.delayTime}
                    infiniteLoop={true}
                    useKeyboardArrows={false}
                    swipeable={true}
                    emulateTouch={true}
                    width={isDesktopTwo ? '70%' : '100%'}
                    showIndicators={this.state.showDots}
                    dynamicHeight={true}
                    className={classes.carrousel}
                  >
                    {heatMaps.map((map, index) =>
                      <div key={index} >
                        <img
                          //src={"https://storage.googleapis.com/telemetryiot.appspot.com/temperaturaTierra/Temperatura-Tierra-24-09-2020_15-52-09.png"} 
                          src={map.earthTempImg}
                          alt={map.earthTempImg}
                          className={classes.greenhouse}
                          height={isDesktopTwo ? '650px' : null}
                        />
                      </div>
                    )}
                  </Carousel>
                </Grid>
              </Card>
            </Grid>

            {/* QUINTA FILA
            QUINTA FILA
            QUINTA FILA
            QUINTA FILA
            QUINTA FILA */}

            <Grid item xs={12} >
              <Card
                disableWidgetMenu
                title={'Mapa de Calor - Humedad Tierra - 24 Horas'}
              >
                <Grid item xs={12} >
                  <Carousel
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    interval={this.state.delayTime}
                    infiniteLoop={true}
                    useKeyboardArrows={false}
                    swipeable={true}
                    emulateTouch={true}
                    width={isDesktopTwo ? '70%' : '100%'}
                    showIndicators={this.state.showDots}
                    dynamicHeight={true}
                    className={classes.carrousel}
                  >
                    {heatMaps.map((map, index) =>
                      <div key={index} >
                        <img
                          //src={"https://storage.googleapis.com/telemetryiot.appspot.com/humedadTierra/Humedad-Tierra-24-09-2020_15-52-09.png"}
                          src={map.earthHumImg}
                          alt={map.earthHumImg}
                          className={classes.greenhouse}
                          height={isDesktopTwo ? '650px' : null}
                        />
                      </div>
                    )}
                  </Carousel>
                </Grid>
              </Card>
            </Grid>

            {/* SEXTA FILA
            SEXTA FILA
            SEXTA FILA
            SEXTA FILA
            SEXTA FILA
            SEXTA FILA */}

            <Grid item xs={12} >
              <Card
                disableWidgetMenu
                title={'Mapa de Calor - luz - 24 Horas'}
              >
                <Grid item xs={12} >
                  <Carousel
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    interval={this.state.delayTime}
                    infiniteLoop={true}
                    useKeyboardArrows={false}
                    swipeable={true}
                    emulateTouch={true}
                    width={isDesktopTwo ? '70%' : '100%'}
                    showIndicators={this.state.showDots}
                    dynamicHeight={true}
                    className={classes.carrousel}
                  >
                    {heatMaps.map((map, index) =>
                      <div key={index} >
                        <img
                          //src={"https://storage.googleapis.com/telemetryiot.appspot.com/luz/Luz-24-09-2020_15-52-09.png"} 
                          src={map.lightImg}
                          alt={map.lightImg}
                          className={classes.greenhouse}
                          height={isDesktopTwo ? '650px' : null}
                        />
                      </div>
                    )}
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

Recomendation.contextType = AnalysisContext;

Recomendation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(withWidth()(Recomendation)); 
