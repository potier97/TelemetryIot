import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import TabPanel from '../../../../components/tabPanel';
import BigTitle from '../../../../components/bigTittle';
import Card from '../../../../components/card';
import Hidden from '@material-ui/core/Hidden';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';


//SPINNER
import CircularProgress from '@material-ui/core/CircularProgress';


//IMAGENES
import TemperatureAir from '../../../../images/temperatureEarth.svg';
import GoutAir from '../../../../images/goutEarth.svg';
import TemperatureEarth from '../../../../images/temperatureAir.svg';
import GoutEarth from '../../../../images/goutAir.svg';
import Sun from '../../../../images/sun.svg';

//CALENDARIO
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';

//MODAL
import Modal from '../../../../components/dialog';

//CONTEXTO
import { WeatherContext } from '../../../../context/weather';

//FORMAT DATA
//import { formatWeather } from './config'

//ESTILOS
import { withStyles } from '@material-ui/core/styles';
import useStyles from './style.js'

//GRÁFICO   
import MuiltiLines from '../../../../components/muiltiLines';
import SimpleLines from '../../../../components/simpleLines';
//import DateLines from '../../../../components/dateLines';




//Filtrado de los datos
// const dates = ["2018-09-12", "2018-10-18", "2018-12-30"];
// const filteredDates = dates.filter(d => new Date(d) - new Date() > 0);
// Y así se vería en tu caso:
// events = events.filter(a => new Date(a.startDate) - new Date > 0);


class Metrics extends Component {





  constructor(props) {
    super(props);
    this.state = {
      stateTabs: 0,


      //Modal
      stateModalRange: false,
      //stateModalDelete: false,
      //stateModalSpinner: false,


      oneRange: {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
      },
      changeRange: {},
      isRange: false,

      isData: false,
      dataStore: {},

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleTabs = this.handleTabs.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.handleRangeAverage = this.handleRangeAverage.bind(this);
    this.handleCancelRange = this.handleCancelRange.bind(this);
    this.handleSetRange = this.handleSetRange.bind(this);
  };




  componentDidMount() {
    this.setState({
      changeRange: this.state.oneRange,
      isData: true,
    })
    //console.log('ok')
  }


  handleChange(event) {
    //console.log(event)
    let data = event.selection
    this.setState({
      oneRange: data
    })
  };


  handleTabs(event, newValue) {
    const value = newValue;
    this.setState({ stateTabs: value });
  };

  handleModal() {
    this.setState({
      stateModalRange: !this.state.stateModalRange
    });
  };

  handleRangeAverage(e) {
    // eslint-disable-next-line
    let data = e;

    this.handleModal()
  };

  handleCancelRange() {
    this.setState({
      isRange: false,
    })
    this.handleModal()
  };

  handleSetRange() {
    //let data = {...this.state.oneRange};
    //console.log('filtrando los datos')
    if (this.state.changeRange.startDate !== this.state.oneRange.startDate && this.state.changeRange.endDate !== this.state.oneRange.endDate) {
      this.setState({
        isRange: true,
      })
      console.log('filtrando los datos')
    };
    this.handleModal()
  };


  render() {
    const { classes, width } = this.props;
    const { weather, lastWeather, dataReady } = this.context;
    const isDesktop = isWidthUp('md', width);




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

    console.log(weather)


    return (
      <Grid className={classes.root}>
        <CssBaseline />

        <AppBar position="static" className={classes.appbar} >
          <Tabs
            value={this.state.stateTabs}
            onChange={this.handleTabs}
            aria-label="simple tabs example"
            variant={!isDesktop ? "scrollable" : "fullWidth"}
            scrollButtons="on"
          >
            {/* component="h1" variant="h5" */}
            <Tab wrapped label="Promedio" className={classes.title} id='nav-tab-0' aria-controls='nav-tabpanel-0' />
            <Tab wrapped label="Nodo Uno" className={classes.title} id='nav-tab-1' aria-controls='nav-tabpanel-1' />
            <Tab wrapped label="Nodo Dos" className={classes.title} id='nav-tab-2' aria-controls='nav-tabpanel-2' />
            <Tab wrapped label="Nodo Tres" className={classes.title} id='nav-tab-3' aria-controls='nav-tabpanel-3' />
            <Tab wrapped label="Nodo Cuatro" className={classes.title} id='nav-tab-4' aria-controls='nav-tabpanel-4' />
            <Tab wrapped label="Nodo Cinco" className={classes.title} id='nav-tab-5' aria-controls='nav-tabpanel-5' />
          </Tabs>
        </AppBar>
        {/* Datos Nodo Promedio
        Datos Nodo Promedio
        Datos Nodo Promedio */}
        <TabPanel value={this.state.stateTabs} index={0}>
          <BigTitle
            title={'Métricas Promedio'}
            action={this.handleRangeAverage}
            showAction
          />
          <Container maxWidth={false} className={classes.container}>
            <Grid container spacing={3}>

              {/*  Metricas Uno
            Metricas Uno
            Metricas Uno
            Metricas Uno
            Metricas Uno
            Metricas Uno
            Metricas Uno */}


              <Grid item xs={12} md={4} lg={3}>
                <Card
                  disableWidgetMenu
                  title={'Temperatura Aire'}
                  bodyClass={classes.card}
                >
                  <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    className={classes.containerVar}>
                    <img alt="AirTemp" src={TemperatureAir} className={classes.icon} />
                    <Typography component="h1" variant={"h6"} className={classes.titleCard}>
                      {this.state.isData && lastWeather.nodeId0.airTemp} {' °C'}
                    </Typography>
                  </Grid>
                </Card>
              </Grid>


              <Hidden xsDown>
                <Grid item xs={12} md={8} lg={9}>
                  <Card
                    disableWidgetMenu
                    title={'Temperatura Aire Vs Tiempo'}
                  >
                    {/* < DateLines
                      stepLabel={2}
                      yOneLabel={'Humedad %'}
                      dataOne={[33, 32, 36, -41, 85, 65]}
                      dataTwo={[45, 85, 45, 41, 25, 32]}
                      dataThree={[85, 45, 91, 85, 90, 45]}
                      dataFour={[10, 65, 19, 47, 90, 29]}
                      dataFive={[3, 52, 36, 14, 90, 25]}
                    /> */}
                    <SimpleLines
                      firstLabel={'Temperatura Aire'}
                      xLabel={'Tiempo'}
                      yOneLabel={'°C'}
                      oneColor={'#4bc0c066'}
                      borderOneColor={'#4bc0c0'}
                      stepLabel={2}
                    />
                  </Card>
                </Grid>
              </Hidden>



              {/* Metricas dos
                Metricas dos
                Metricas dos
                Metricas dos
                Metricas dos
                Metricas dos
                Metricas dos */}

              <Grid item xs={12} md={4} lg={3}>
                <Card
                  disableWidgetMenu
                  title={'Humedad Aire'}
                  bodyClass={classes.card}
                >
                  <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    className={classes.containerVar}>
                    <img alt="AirHum" src={GoutAir} className={classes.icon} />
                    <Typography component="h1" variant={"h6"} className={classes.titleCard}>
                      {this.state.isData && lastWeather.nodeId0.airHum} {' %'}
                    </Typography>
                  </Grid>

                </Card>
              </Grid>

              <Hidden xsDown>
                <Grid item xs={12} md={8} lg={9}>
                  <Card
                    disableWidgetMenu
                    title={'Humedad Aire Vs Tiempo'}
                  >
                    {/* < DateLines
                      stepLabel={2}
                      yOneLabel={'Humedad %'}
                      dataOne={[33, 32, 36, -41, 85, 65]}
                      dataTwo={[45, 85, 45, 41, 25, 32]}
                      dataThree={[85, 45, 91, 85, 90, 45]}
                      dataFour={[10, 65, 19, 47, 90, 29]}
                      dataFive={[3, 52, 36, 14, 90, 25]}
                    /> */}
                    <SimpleLines
                      firstLabel={'Humedad Aire'}
                      xLabel={'Tiempo'}
                      yOneLabel={'%'}
                      oneColor={'#ff638444'}
                      borderOneColor={'#ff6384'}
                      stepLabel={2}
                    />
                  </Card>
                </Grid>
              </Hidden>

              {/* 
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres */}


              <Grid item xs={12} md={4} lg={3}>
                <Card
                  disableWidgetMenu
                  title={'Temperatura Tierra'}
                  bodyClass={classes.card}
                >
                  <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    className={classes.containerVar}>
                    <img alt="AirHum" src={TemperatureEarth} className={classes.icon} />
                    <Typography component="h1" variant={"h6"} className={classes.titleCard}>
                      {this.state.isData && lastWeather.nodeId0.earthTemp} {' °C'}
                    </Typography>
                  </Grid>
                </Card>
              </Grid>

              <Hidden xsDown>
                <Grid item xs={12} md={8} lg={9}>
                  <Card
                    disableWidgetMenu
                    title={'Temperatura Tierra Vs Tiempo'}
                  >
                    {/* < DateLines
                      stepLabel={2}
                      yOneLabel={'Humedad %'}
                      dataOne={[33, 32, 36, -41, 85, 65]}
                      dataTwo={[45, 85, 45, 41, 25, 32]}
                      dataThree={[85, 45, 91, 85, 90, 45]}
                      dataFour={[10, 65, 19, 47, 90, 29]}
                      dataFive={[3, 52, 36, 14, 90, 25]}
                    /> */}
                    <SimpleLines
                      firstLabel={'Temperatura Tierra'}
                      xLabel={'Tiempo'}
                      yOneLabel={'°C'}
                      oneColor={'#ff9f4044'}
                      borderOneColor={'#ff9f40'}
                      stepLabel={2}
                    />
                  </Card>
                </Grid>
              </Hidden>

              {/* Metricas Cuatro
              Metricas Cuatro
              Metricas Cuatro
              Metricas Cuatro
              Metricas Cuatro
              Metricas Cuatro
              Metricas Cuatro
              Metricas Cuatro */}

              <Grid item xs={12} md={4} lg={3}>
                <Card
                  disableWidgetMenu
                  title={'Humedad Tierra'}
                  bodyClass={classes.card}
                >
                  <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    className={classes.containerVar}>
                    <img alt="AirHum" src={GoutEarth} className={classes.icon} />
                    <Typography component="h1" variant={"h6"} className={classes.titleCard}>
                      {this.state.isData && lastWeather.nodeId0.earthHum} {' %'}
                    </Typography>
                  </Grid>
                </Card>
              </Grid>

              <Hidden xsDown>
                <Grid item xs={12} md={8} lg={9}>
                  <Card
                    disableWidgetMenu
                    title={'Humedad Tierra Vs Tiempo'}
                  >
                    {/* < DateLines
                      stepLabel={2}
                      yOneLabel={'Humedad %'}
                      dataOne={[33, 32, 36, -41, 85, 65]}
                      dataTwo={[45, 85, 45, 41, 25, 32]}
                      dataThree={[85, 45, 91, 85, 90, 45]}
                      dataFour={[10, 65, 19, 47, 90, 29]}
                      dataFive={[3, 52, 36, 14, 90, 25]}
                    /> */}
                    <SimpleLines
                      firstLabel={'Humedad Tierra'}
                      xLabel={'Tiempo'}
                      yOneLabel={'%'}
                      oneColor={'#36a2eb44'}
                      borderOneColor={'#36a2eb'}
                      stepLabel={2}
                    />
                  </Card>
                </Grid>
              </Hidden>

              {/* Metricas Cinco
              Metricas Cinco
              Metricas Cinco
              Metricas Cinco
              Metricas Cinco
              Metricas Cinco
              Metricas Cinco */}


              <Grid item xs={12} md={4} lg={3}>
                <Card
                  disableWidgetMenu
                  title={'Luz'}
                  bodyClass={classes.card}
                >
                  <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    className={classes.containerVar}>
                    <img alt="Light" src={Sun} className={classes.icon} />
                    <Typography component="h1" variant={"h6"} className={classes.titleCard}>
                      {this.state.isData && lastWeather.nodeId0.light} {' Lux'}
                    </Typography>
                  </Grid>
                </Card>
              </Grid>

              <Hidden xsDown>
                <Grid item xs={12} md={8} lg={9}>
                  <Card
                    disableWidgetMenu
                    title={'Luz Vs Tiempo'}
                  >
                    {/* < DateLines
                      stepLabel={2}
                      yOneLabel={'Humedad %'}
                      dataOne={[33, 32, 36, -41, 85, 65]}
                      dataTwo={[45, 85, 45, 41, 25, 32]}
                      dataThree={[85, 45, 91, 85, 90, 45]}
                      dataFour={[10, 65, 19, 47, 90, 29]}
                      dataFive={[3, 52, 36, 14, 90, 25]}
                    /> */}
                    <SimpleLines
                      firstLabel={'Luz'}
                      xLabel={'Tiempo'}
                      yOneLabel={'Lux'}
                      oneColor={'#ffe50044'}
                      borderOneColor={'#ffe500'}  //#ca8e00 dcc500 d8a200
                      stepLabel={2}
                    />
                  </Card>
                </Grid>
              </Hidden>


            </Grid>
          </Container>

        </TabPanel>
        {/* Datos Nodo Uno
        Datos Nodo Uno
        Datos Nodo Uno
        Datos Nodo Uno */}
        <TabPanel value={this.state.stateTabs} index={1}>
          <BigTitle
            title={'Métricas Nodo Uno'}
            action={this.handleRangeAverage}
            showAction
          />
          <Container maxWidth={false} className={classes.container}>
            <Grid container spacing={3}>



              <Hidden lgUp>
                <Grid item xs={12} sm={6}>
                  <Card
                    disableWidgetMenu
                    title={'Temperatura Aire'}
                    bodyClass={classes.card}
                  >
                    <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      className={classes.containerVar}>
                      <img alt="AirTemp" src={TemperatureAir} className={classes.icon} />
                      <Typography component="h1" variant="h6" className={classes.titleCard}>
                        {this.state.isData && lastWeather.nodeId1.airTemp} {' °C'}
                      </Typography>
                    </Grid>
                  </Card>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Card
                    disableWidgetMenu
                    title={'Humedad Aire'}
                    bodyClass={classes.card}
                  >
                    <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      className={classes.containerVar}>
                      <img alt="AirHum" src={GoutAir} className={classes.icon} />
                      <Typography component="h1" variant="h6" className={classes.titleCard}>
                        {this.state.isData && lastWeather.nodeId1.airHum} {' %'}
                      </Typography>
                    </Grid>

                  </Card>
                </Grid>
              </Hidden>



              {/* Metricas dos
                Metricas dos
                Metricas dos
                Metricas dos
                Metricas dos
                Metricas dos */}


              <Hidden mdDown>
                <Grid item xs={12} md={2}>
                  <Card
                    disableWidgetMenu
                    title={'Temperatura Aire'}
                    bodyClass={classes.card}
                  >
                    <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      className={classes.containerVar}>
                      <img alt="AirTemp" src={TemperatureAir} className={classes.icon} />
                      <Typography component="h1" variant="h6" className={classes.titleCard}>
                        {this.state.isData && lastWeather.nodeId1.airTemp} {' °C'}
                      </Typography>
                    </Grid>
                  </Card>
                </Grid>
              </Hidden>

              <Hidden xsDown>
                <Grid item xs={12} lg={8} >
                  <Card
                    disableWidgetMenu
                    title={'Temperatura Aire Vs Humedad Aire Vs Tiempo'}
                  >


                    <MuiltiLines
                      firstLabel={'Temperatura Aire Nodo 1'}
                      secondLabel={'Humedad Aire Nodo 1'}
                      xLabel={'Tiempo'}
                      yOneLabel={'Temperatura °C'}
                      yTwoLabel={'Humedad %'}
                      oneColor={'#4bc0c066'}
                      twoColor={'#ff638444'}
                      stepLabel={2}
                    />
                  </Card>
                </Grid>
              </Hidden>

              <Hidden mdDown>
                <Grid item xs={12} sm={2}>
                  <Card
                    disableWidgetMenu
                    title={'Humedad Aire'}
                    bodyClass={classes.card}
                  >
                    <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      className={classes.containerVar}>
                      <img alt="AirHum" src={GoutAir} className={classes.icon} />
                      <Typography component="h1" variant="h6" className={classes.titleCard}>
                        {this.state.isData && lastWeather.nodeId1.airHum} {' %'}
                      </Typography>
                    </Grid>

                  </Card>
                </Grid>
              </Hidden>





              {/* 
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres */}






              <Hidden lgUp>
                <Grid item xs={12} sm={6}>
                  <Card
                    disableWidgetMenu
                    title={'Temperatura Tierra'}
                    bodyClass={classes.card}
                  >
                    <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      className={classes.containerVar}>
                      <img alt="AirHum" src={TemperatureEarth} className={classes.icon} />
                      <Typography component="h1" variant={"h6"} className={classes.titleCard}>
                        {this.state.isData && lastWeather.nodeId1.earthTemp} {' °C'}
                      </Typography>
                    </Grid>
                  </Card>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Card
                    disableWidgetMenu
                    title={'Humedad Tierra'}
                    bodyClass={classes.card}
                  >
                    <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      className={classes.containerVar}>
                      <img alt="AirHum" src={GoutEarth} className={classes.icon} />
                      <Typography component="h1" variant={"h6"} className={classes.titleCard}>
                        {this.state.isData && lastWeather.nodeId1.earthHum} {' %'}
                      </Typography>
                    </Grid>
                  </Card>
                </Grid>
              </Hidden>




              {/* 
                Metricas Tres
                Metricas Tres
                Metricas Tres */}

              <Hidden mdDown>
                <Grid item xs={12} sm={2}>
                  <Card
                    disableWidgetMenu
                    title={'Temperatura Tierra'}
                    bodyClass={classes.card}
                  >
                    <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      className={classes.containerVar}>
                      <img alt="AirHum" src={TemperatureEarth} className={classes.icon} />
                      <Typography component="h1" variant={"h6"} className={classes.titleCard}>
                        {this.state.isData && lastWeather.nodeId1.earthTemp} {' °C'}
                      </Typography>
                    </Grid>
                  </Card>
                </Grid>
              </Hidden>
              <Hidden xsDown>
                <Grid item xs={12} lg={8} >
                  <Card
                    disableWidgetMenu
                    title={'Temperatura Tierra Vs Humedad Tierra Vs Tiempo'}
                  >
                    <MuiltiLines
                      firstLabel={'Temperatura Tierra Nodo 1'}
                      secondLabel={'Humedad Tierra Nodo 1'}
                      xLabel={'Tiempo'}
                      yOneLabel={'Temperatura °C'}
                      yTwoLabel={'Humedad %'}
                      oneColor={'#ff9f4044'}
                      twoColor={'#36a2eb44'}
                      stepLabel={2}
                    />
                  </Card>
                </Grid>
              </Hidden>
              <Hidden mdDown>
                <Grid item xs={12} sm={2}>
                  <Card
                    disableWidgetMenu
                    title={'Humedad Tierra'}
                    bodyClass={classes.card}
                  >
                    <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      className={classes.containerVar}>
                      <img alt="AirHum" src={GoutEarth} className={classes.icon} />
                      <Typography component="h1" variant={"h6"} className={classes.titleCard}>
                        {this.state.isData && lastWeather.nodeId1.earthHum} {' %'}
                      </Typography>
                    </Grid>
                  </Card>
                </Grid>
              </Hidden>

              {/* 
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres */}

              <Grid item xs={12} md={3}   >
                <Card
                  disableWidgetMenu
                  title={'Luz'}
                  bodyClass={classes.card}
                >
                  <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    className={classes.containerVar}>
                    <img alt="Light" src={Sun} className={classes.icon} />
                    <Typography component="h1" variant={"h6"} className={classes.titleCard}>
                      {this.state.isData && lastWeather.nodeId1.light} {' Lux'}
                    </Typography>
                  </Grid>
                </Card>
              </Grid>
              <Hidden xsDown>
                <Grid item xs={12} md={9}  >
                  <Card
                    disableWidgetMenu
                    title={'Luz Vs Tiempo'}
                  >
                    <SimpleLines
                      firstLabel={'Luz Nodo 1'}
                      xLabel={'Tiempo'}
                      yOneLabel={'Lux'}
                      oneColor={'#ffe50044'}
                      borderOneColor={'#ffe500'}  //#ca8e00 dcc500 d8a200
                      stepLabel={2}
                    />
                  </Card>
                </Grid>
              </Hidden>


            </Grid>
          </Container>

        </TabPanel>
        {/* Datos Nodo Dos
        Datos Nodo Dos
        Datos Nodo Dos
        Datos Nodo Dos */}
        <TabPanel value={this.state.stateTabs} index={2}>
          <BigTitle
            title={'Métricas Nodo Dos'}
            action={this.handleRangeAverage}
            showAction
          />
          <Container maxWidth={false} className={classes.container}>
            <Grid container spacing={3}>

              <Hidden lgUp>
                <Grid item xs={12} sm={6}>
                  <Card
                    disableWidgetMenu
                    title={'Temperatura Aire'}
                    bodyClass={classes.card}
                  >
                    <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      className={classes.containerVar}>
                      <img alt="AirTemp" src={TemperatureAir} className={classes.icon} />
                      <Typography component="h1" variant="h6" className={classes.titleCard}>
                        {this.state.isData && lastWeather.nodeId2.airTemp} {' °C'}
                      </Typography>
                    </Grid>
                  </Card>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Card
                    disableWidgetMenu
                    title={'Humedad Aire'}
                    bodyClass={classes.card}
                  >
                    <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      className={classes.containerVar}>
                      <img alt="AirHum" src={GoutAir} className={classes.icon} />
                      <Typography component="h1" variant="h6" className={classes.titleCard}>
                        {this.state.isData && lastWeather.nodeId2.airHum} {' %'}
                      </Typography>
                    </Grid>

                  </Card>
                </Grid>
              </Hidden>



              {/* Metricas dos
                Metricas dos
                Metricas dos
                Metricas dos
                Metricas dos
                Metricas dos */}


              <Hidden mdDown>
                <Grid item xs={12} md={2}>
                  <Card
                    disableWidgetMenu
                    title={'Temperatura Aire'}
                    bodyClass={classes.card}
                  >
                    <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      className={classes.containerVar}>
                      <img alt="AirTemp" src={TemperatureAir} className={classes.icon} />
                      <Typography component="h1" variant="h6" className={classes.titleCard}>
                        {this.state.isData && lastWeather.nodeId2.airTemp} {' °C'}
                      </Typography>
                    </Grid>
                  </Card>
                </Grid>
              </Hidden>

              <Hidden xsDown>
                <Grid item xs={12} lg={8} >
                  <Card
                    disableWidgetMenu
                    title={'Temperatura Aire Vs Humedad Aire Vs Tiempo'}
                  >
                    <MuiltiLines
                      firstLabel={'Temperatura Aire Nodo 2'}
                      secondLabel={'Humedad Aire Nodo 2'}
                      xLabel={'Tiempo'}
                      yOneLabel={'Temperatura °C'}
                      yTwoLabel={'Humedad %'}
                      oneColor={'#4bc0c066'}
                      twoColor={'#ff638444'}
                      stepLabel={2}
                    />
                  </Card>
                </Grid>
              </Hidden>

              <Hidden mdDown>
                <Grid item xs={12} sm={2}>
                  <Card
                    disableWidgetMenu
                    title={'Humedad Aire'}
                    bodyClass={classes.card}
                  >
                    <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      className={classes.containerVar}>
                      <img alt="AirHum" src={GoutAir} className={classes.icon} />
                      <Typography component="h1" variant="h6" className={classes.titleCard}>
                        {this.state.isData && lastWeather.nodeId2.airHum} {' %'}
                      </Typography>
                    </Grid>

                  </Card>
                </Grid>
              </Hidden>





              {/* 
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres */}






              <Hidden lgUp>
                <Grid item xs={12} sm={6}>
                  <Card
                    disableWidgetMenu
                    title={'Temperatura Tierra'}
                    bodyClass={classes.card}
                  >
                    <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      className={classes.containerVar}>
                      <img alt="AirHum" src={TemperatureEarth} className={classes.icon} />
                      <Typography component="h1" variant={"h6"} className={classes.titleCard}>
                        {this.state.isData && lastWeather.nodeId2.earthTemp} {' °C'}
                      </Typography>
                    </Grid>
                  </Card>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Card
                    disableWidgetMenu
                    title={'Humedad Tierra'}
                    bodyClass={classes.card}
                  >
                    <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      className={classes.containerVar}>
                      <img alt="AirHum" src={GoutEarth} className={classes.icon} />
                      <Typography component="h1" variant={"h6"} className={classes.titleCard}>
                        {this.state.isData && lastWeather.nodeId2.earthHum} {' %'}
                      </Typography>
                    </Grid>
                  </Card>
                </Grid>
              </Hidden>




              {/* 
                Metricas Tres
                Metricas Tres
                Metricas Tres */}

              <Hidden mdDown>
                <Grid item xs={12} sm={2}>
                  <Card
                    disableWidgetMenu
                    title={'Temperatura Tierra'}
                    bodyClass={classes.card}
                  >
                    <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      className={classes.containerVar}>
                      <img alt="AirHum" src={TemperatureEarth} className={classes.icon} />
                      <Typography component="h1" variant={"h6"} className={classes.titleCard}>
                        {this.state.isData && lastWeather.nodeId2.earthTemp} {' °C'}
                      </Typography>
                    </Grid>
                  </Card>
                </Grid>
              </Hidden>
              <Hidden xsDown>
                <Grid item xs={12} lg={8} >
                  <Card
                    disableWidgetMenu
                    title={'Temperatura Tierra Vs Humedad Tierra Vs Tiempo'}
                  >
                    <MuiltiLines
                      firstLabel={'Temperatura Tierra Nodo 2'}
                      secondLabel={'Humedad Tierra Nodo 2'}
                      xLabel={'Tiempo'}
                      yOneLabel={'Temperatura °C'}
                      yTwoLabel={'Humedad %'}
                      oneColor={'#ff9f4044'}
                      twoColor={'#36a2eb44'}
                      stepLabel={2}
                    />
                  </Card>
                </Grid>
              </Hidden>
              <Hidden mdDown>
                <Grid item xs={12} sm={2}>
                  <Card
                    disableWidgetMenu
                    title={'Humedad Tierra'}
                    bodyClass={classes.card}
                  >
                    <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      className={classes.containerVar}>
                      <img alt="AirHum" src={GoutEarth} className={classes.icon} />
                      <Typography component="h1" variant={"h6"} className={classes.titleCard}>
                        {this.state.isData && lastWeather.nodeId2.earthHum} {' %'}
                      </Typography>
                    </Grid>
                  </Card>
                </Grid>
              </Hidden>

              {/* 
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres */}

              <Grid item xs={12} md={3}   >
                <Card
                  disableWidgetMenu
                  title={'Luz'}
                  bodyClass={classes.card}
                >
                  <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    className={classes.containerVar}>
                    <img alt="Light" src={Sun} className={classes.icon} />
                    <Typography component="h1" variant={"h6"} className={classes.titleCard}>
                      {this.state.isData && lastWeather.nodeId2.light} {' Lux'}
                    </Typography>
                  </Grid>
                </Card>
              </Grid>
              <Hidden xsDown>
                <Grid item xs={12} md={9}  >
                  <Card
                    disableWidgetMenu
                    title={'Luz Vs Tiempo'}
                  >
                    <SimpleLines
                      firstLabel={'Luz Nodo 2'}
                      xLabel={'Tiempo'}
                      yOneLabel={'Lux'}
                      oneColor={'#ffe50044'}
                      borderOneColor={'#ffe500'}  //#ca8e00 dcc500 d8a200
                      stepLabel={2}
                    />
                  </Card>
                </Grid>
              </Hidden>





            </Grid>
          </Container>

        </TabPanel>
        {/* Datos Nodo Tres
        Datos Nodo Tres
        Datos Nodo Tres
        Datos Nodo Tres  */}
        <TabPanel value={this.state.stateTabs} index={3}>
          <BigTitle
            title={'Métricas Nodo Tres'}
            action={this.handleRangeAverage}
            showAction
          />
          <Container maxWidth={false} className={classes.container}>
            <Grid container spacing={3}>

              <Hidden lgUp>
                <Grid item xs={12} sm={6}>
                  <Card
                    disableWidgetMenu
                    title={'Temperatura Aire'}
                    bodyClass={classes.card}
                  >
                    <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      className={classes.containerVar}>
                      <img alt="AirTemp" src={TemperatureAir} className={classes.icon} />
                      <Typography component="h1" variant="h6" className={classes.titleCard}>
                        {this.state.isData && lastWeather.nodeId3.airTemp} {' °C'}
                      </Typography>
                    </Grid>
                  </Card>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Card
                    disableWidgetMenu
                    title={'Humedad Aire'}
                    bodyClass={classes.card}
                  >
                    <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      className={classes.containerVar}>
                      <img alt="AirHum" src={GoutAir} className={classes.icon} />
                      <Typography component="h1" variant="h6" className={classes.titleCard}>
                        {this.state.isData && lastWeather.nodeId3.airHum} {' %'}
                      </Typography>
                    </Grid>

                  </Card>
                </Grid>
              </Hidden>



              {/* Metricas dos
                Metricas dos
                Metricas dos
                Metricas dos
                Metricas dos
                Metricas dos */}


              <Hidden mdDown>
                <Grid item xs={12} md={2}>
                  <Card
                    disableWidgetMenu
                    title={'Temperatura Aire'}
                    bodyClass={classes.card}
                  >
                    <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      className={classes.containerVar}>
                      <img alt="AirTemp" src={TemperatureAir} className={classes.icon} />
                      <Typography component="h1" variant="h6" className={classes.titleCard}>
                        {this.state.isData && lastWeather.nodeId3.airTemp} {' °C'}
                      </Typography>
                    </Grid>
                  </Card>
                </Grid>
              </Hidden>

              <Hidden xsDown>
                <Grid item xs={12} lg={8} >
                  <Card
                    disableWidgetMenu
                    title={'Temperatura Aire Vs Humedad Aire Vs Tiempo'}
                  >
                    <MuiltiLines
                      firstLabel={'Temperatura Aire Nodo 3'}
                      secondLabel={'Humedad Aire Nodo 3'}
                      xLabel={'Tiempo'}
                      yOneLabel={'Temperatura °C'}
                      yTwoLabel={'Humedad %'}
                      oneColor={'#4bc0c066'}
                      twoColor={'#ff638444'}
                      stepLabel={2}
                    />
                  </Card>
                </Grid>
              </Hidden>

              <Hidden mdDown>
                <Grid item xs={12} sm={2}>
                  <Card
                    disableWidgetMenu
                    title={'Humedad Aire'}
                    bodyClass={classes.card}
                  >
                    <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      className={classes.containerVar}>
                      <img alt="AirHum" src={GoutAir} className={classes.icon} />
                      <Typography component="h1" variant="h6" className={classes.titleCard}>
                        {this.state.isData && lastWeather.nodeId3.airHum} {' %'}
                      </Typography>
                    </Grid>

                  </Card>
                </Grid>
              </Hidden>





              {/* 
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres */}






              <Hidden lgUp>
                <Grid item xs={12} sm={6}>
                  <Card
                    disableWidgetMenu
                    title={'Temperatura Tierra'}
                    bodyClass={classes.card}
                  >
                    <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      className={classes.containerVar}>
                      <img alt="AirHum" src={TemperatureEarth} className={classes.icon} />
                      <Typography component="h1" variant={"h6"} className={classes.titleCard}>
                        {this.state.isData && lastWeather.nodeId3.earthTemp} {' °C'}
                      </Typography>
                    </Grid>
                  </Card>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Card
                    disableWidgetMenu
                    title={'Humedad Tierra'}
                    bodyClass={classes.card}
                  >
                    <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      className={classes.containerVar}>
                      <img alt="AirHum" src={GoutEarth} className={classes.icon} />
                      <Typography component="h1" variant={"h6"} className={classes.titleCard}>
                        {this.state.isData && lastWeather.nodeId3.earthHum} {' %'}
                      </Typography>
                    </Grid>
                  </Card>
                </Grid>
              </Hidden>




              {/* 
                Metricas Tres
                Metricas Tres
                Metricas Tres */}

              <Hidden mdDown>
                <Grid item xs={12} sm={2}>
                  <Card
                    disableWidgetMenu
                    title={'Temperatura Tierra'}
                    bodyClass={classes.card}
                  >
                    <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      className={classes.containerVar}>
                      <img alt="AirHum" src={TemperatureEarth} className={classes.icon} />
                      <Typography component="h1" variant={"h6"} className={classes.titleCard}>
                        {this.state.isData && lastWeather.nodeId3.earthTemp} {' °C'}
                      </Typography>
                    </Grid>
                  </Card>
                </Grid>
              </Hidden>
              <Hidden xsDown>
                <Grid item xs={12} lg={8} >
                  <Card
                    disableWidgetMenu
                    title={'Temperatura Tierra Vs Humedad Tierra Vs Tiempo'}
                  >
                    <MuiltiLines
                      firstLabel={'Temperatura Tierra Nodo 3'}
                      secondLabel={'Humedad Tierra Nodo 3'}
                      xLabel={'Tiempo'}
                      yOneLabel={'Temperatura °C'}
                      yTwoLabel={'Humedad %'}
                      oneColor={'#ff9f4044'}
                      twoColor={'#36a2eb44'}
                      stepLabel={2}
                    />
                  </Card>
                </Grid>
              </Hidden>
              <Hidden mdDown>
                <Grid item xs={12} sm={2}>
                  <Card
                    disableWidgetMenu
                    title={'Humedad Tierra'}
                    bodyClass={classes.card}
                  >
                    <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      className={classes.containerVar}>
                      <img alt="AirHum" src={GoutEarth} className={classes.icon} />
                      <Typography component="h1" variant={"h6"} className={classes.titleCard}>
                        {this.state.isData && lastWeather.nodeId3.earthHum} {' %'}
                      </Typography>
                    </Grid>
                  </Card>
                </Grid>
              </Hidden>

              {/* 
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres */}

              <Grid item xs={12} md={3}   >
                <Card
                  disableWidgetMenu
                  title={'Luz'}
                  bodyClass={classes.card}
                >
                  <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    className={classes.containerVar}>
                    <img alt="Light" src={Sun} className={classes.icon} />
                    <Typography component="h1" variant={"h6"} className={classes.titleCard}>
                      {this.state.isData && lastWeather.nodeId3.light} {' Lux'}
                    </Typography>
                  </Grid>
                </Card>
              </Grid>
              <Hidden xsDown>
                <Grid item xs={12} md={9}  >
                  <Card
                    disableWidgetMenu
                    title={'Luz Vs Tiempo'}
                  >
                    <SimpleLines
                      firstLabel={'Luz Nodo 3'}
                      xLabel={'Tiempo'}
                      yOneLabel={'Lux'}
                      oneColor={'#ffe50044'}
                      borderOneColor={'#ffe500'}  //#ca8e00 dcc500 d8a200
                      stepLabel={2}
                    />
                  </Card>
                </Grid>
              </Hidden>


            </Grid>
          </Container>

        </TabPanel>
        {/* Datos Nodo Cuatro
        Datos Nodo Cuatro
        Datos Nodo Cuatro
        Datos Nodo Cuatro
        Datos Nodo Cuatro */}
        <TabPanel value={this.state.stateTabs} index={4}>
          <BigTitle
            title={'Métricas Nodo Cuatro'}
            action={this.handleRangeAverage}
            showAction
          />
          <Container maxWidth={false} className={classes.container}>
            <Grid container spacing={3}>

              <Hidden lgUp>
                <Grid item xs={12} sm={6}>
                  <Card
                    disableWidgetMenu
                    title={'Temperatura Aire'}
                    bodyClass={classes.card}
                  >
                    <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      className={classes.containerVar}>
                      <img alt="AirTemp" src={TemperatureAir} className={classes.icon} />
                      <Typography component="h1" variant="h6" className={classes.titleCard}>
                        {this.state.isData && lastWeather.nodeId4.airTemp} {' °C'}
                      </Typography>
                    </Grid>
                  </Card>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Card
                    disableWidgetMenu
                    title={'Humedad Aire'}
                    bodyClass={classes.card}
                  >
                    <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      className={classes.containerVar}>
                      <img alt="AirHum" src={GoutAir} className={classes.icon} />
                      <Typography component="h1" variant="h6" className={classes.titleCard}>
                        {this.state.isData && lastWeather.nodeId4.airHum} {' %'}
                      </Typography>
                    </Grid>

                  </Card>
                </Grid>
              </Hidden>



              {/* Metricas dos
                Metricas dos
                Metricas dos
                Metricas dos
                Metricas dos
                Metricas dos */}


              <Hidden mdDown>
                <Grid item xs={12} md={2}>
                  <Card
                    disableWidgetMenu
                    title={'Temperatura Aire'}
                    bodyClass={classes.card}
                  >
                    <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      className={classes.containerVar}>
                      <img alt="AirTemp" src={TemperatureAir} className={classes.icon} />
                      <Typography component="h1" variant="h6" className={classes.titleCard}>
                        {this.state.isData && lastWeather.nodeId4.airTemp} {' °C'}
                      </Typography>
                    </Grid>
                  </Card>
                </Grid>
              </Hidden>

              <Hidden xsDown>
                <Grid item xs={12} lg={8} >
                  <Card
                    disableWidgetMenu
                    title={'Temperatura Aire Vs Humedad Aire Vs Tiempo'}
                  >
                    <MuiltiLines
                      firstLabel={'Temperatura Aire Nodo 4'}
                      secondLabel={'Humedad Aire Nodo 4'}
                      xLabel={'Tiempo'}
                      yOneLabel={'Temperatura °C'}
                      yTwoLabel={'Humedad %'}
                      oneColor={'#4bc0c066'}
                      twoColor={'#ff638444'}
                      stepLabel={2}
                    />
                  </Card>
                </Grid>
              </Hidden>

              <Hidden mdDown>
                <Grid item xs={12} sm={2}>
                  <Card
                    disableWidgetMenu
                    title={'Humedad Aire'}
                    bodyClass={classes.card}
                  >
                    <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      className={classes.containerVar}>
                      <img alt="AirHum" src={GoutAir} className={classes.icon} />
                      <Typography component="h1" variant="h6" className={classes.titleCard}>
                        {this.state.isData && lastWeather.nodeId4.airHum} {' %'}
                      </Typography>
                    </Grid>

                  </Card>
                </Grid>
              </Hidden>





              {/* 
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres */}






              <Hidden lgUp>
                <Grid item xs={12} sm={6}>
                  <Card
                    disableWidgetMenu
                    title={'Temperatura Tierra'}
                    bodyClass={classes.card}
                  >
                    <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      className={classes.containerVar}>
                      <img alt="AirHum" src={TemperatureEarth} className={classes.icon} />
                      <Typography component="h1" variant={"h6"} className={classes.titleCard}>
                        {this.state.isData && lastWeather.nodeId4.earthTemp} {' °C'}
                      </Typography>
                    </Grid>
                  </Card>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Card
                    disableWidgetMenu
                    title={'Humedad Tierra'}
                    bodyClass={classes.card}
                  >
                    <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      className={classes.containerVar}>
                      <img alt="AirHum" src={GoutEarth} className={classes.icon} />
                      <Typography component="h1" variant={"h6"} className={classes.titleCard}>
                        {this.state.isData && lastWeather.nodeId4.earthHum} {' %'}
                      </Typography>
                    </Grid>
                  </Card>
                </Grid>
              </Hidden>




              {/* 
                Metricas Tres
                Metricas Tres
                Metricas Tres */}

              <Hidden mdDown>
                <Grid item xs={12} sm={2}>
                  <Card
                    disableWidgetMenu
                    title={'Temperatura Tierra'}
                    bodyClass={classes.card}
                  >
                    <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      className={classes.containerVar}>
                      <img alt="AirHum" src={TemperatureEarth} className={classes.icon} />
                      <Typography component="h1" variant={"h6"} className={classes.titleCard}>
                        {this.state.isData && lastWeather.nodeId4.earthTemp} {' °C'}
                      </Typography>
                    </Grid>
                  </Card>
                </Grid>
              </Hidden>
              <Hidden xsDown>
                <Grid item xs={12} lg={8} >
                  <Card
                    disableWidgetMenu
                    title={'Temperatura Tierra Vs Humedad Tierra Vs Tiempo'}
                  >
                    <MuiltiLines
                      firstLabel={'Temperatura Tierra Nodo 4'}
                      secondLabel={'Humedad Tierra Nodo 4'}
                      xLabel={'Tiempo'}
                      yOneLabel={'Temperatura °C'}
                      yTwoLabel={'Humedad %'}
                      oneColor={'#ff9f4044'}
                      twoColor={'#36a2eb44'}
                      stepLabel={2}
                    />
                  </Card>
                </Grid>
              </Hidden>
              <Hidden mdDown>
                <Grid item xs={12} sm={2}>
                  <Card
                    disableWidgetMenu
                    title={'Humedad Tierra'}
                    bodyClass={classes.card}
                  >
                    <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      className={classes.containerVar}>
                      <img alt="AirHum" src={GoutEarth} className={classes.icon} />
                      <Typography component="h1" variant={"h6"} className={classes.titleCard}>
                        {this.state.isData && lastWeather.nodeId4.earthHum} {' %'}
                      </Typography>
                    </Grid>
                  </Card>
                </Grid>
              </Hidden>

              {/* 
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres */}

              <Grid item xs={12} md={3}   >
                <Card
                  disableWidgetMenu
                  title={'Luz'}
                  bodyClass={classes.card}
                >
                  <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    className={classes.containerVar}>
                    <img alt="Light" src={Sun} className={classes.icon} />
                    <Typography component="h1" variant={"h6"} className={classes.titleCard}>
                      {this.state.isData && lastWeather.nodeId4.light} {' Lux'}
                    </Typography>
                  </Grid>
                </Card>
              </Grid>
              <Hidden xsDown>
                <Grid item xs={12} md={9}  >
                  <Card
                    disableWidgetMenu
                    title={'Luz Vs Tiempo'}
                  >
                    <SimpleLines


                      firstLabel={'Luz Nodo 4'}
                      xLabel={'Tiempo'}
                      yOneLabel={'Lux'}
                      oneColor={'#ffe50044'}
                      borderOneColor={'#ffe500'}  //#ca8e00 dcc500 d8a200
                      stepLabel={2}
                    />
                  </Card>
                </Grid>
              </Hidden>



            </Grid>
          </Container>
        </TabPanel>
        {/* Datos Nodo Cinco
        Datos Nodo Cinco
        Datos Nodo Cinco
        Datos Nodo Cinco
        Datos Nodo Cinco */}
        <TabPanel value={this.state.stateTabs} index={5}>
          <BigTitle
            title={'Métricas Nodo Cinco'}
            action={this.handleRangeAverage}
            showAction
          />
          <Container maxWidth={false} className={classes.container}>
            <Grid container spacing={3}>

              <Hidden lgUp>
                <Grid item xs={12} sm={6}>
                  <Card
                    disableWidgetMenu
                    title={'Temperatura Aire'}
                    bodyClass={classes.card}
                  >
                    <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      className={classes.containerVar}>
                      <img alt="AirTemp" src={TemperatureAir} className={classes.icon} />
                      <Typography component="h1" variant="h6" className={classes.titleCard}>
                        {this.state.isData && lastWeather.nodeId5.airTemp} {' °C'}
                      </Typography>
                    </Grid>
                  </Card>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Card
                    disableWidgetMenu
                    title={'Humedad Aire'}
                    bodyClass={classes.card}
                  >
                    <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      className={classes.containerVar}>
                      <img alt="AirHum" src={GoutAir} className={classes.icon} />
                      <Typography component="h1" variant="h6" className={classes.titleCard}>
                        {this.state.isData && lastWeather.nodeId5.airHum} {' %'}
                      </Typography>
                    </Grid>

                  </Card>
                </Grid>
              </Hidden>



              {/* Metricas dos
                Metricas dos
                Metricas dos
                Metricas dos
                Metricas dos
                Metricas dos */}


              <Hidden mdDown>
                <Grid item xs={12} md={2}>
                  <Card
                    disableWidgetMenu
                    title={'Temperatura Aire'}
                    bodyClass={classes.card}
                  >
                    <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      className={classes.containerVar}>
                      <img alt="AirTemp" src={TemperatureAir} className={classes.icon} />
                      <Typography component="h1" variant="h6" className={classes.titleCard}>
                        {this.state.isData && lastWeather.nodeId5.airTemp} {' °C'}
                      </Typography>
                    </Grid>
                  </Card>
                </Grid>
              </Hidden>

              <Hidden xsDown>
                <Grid item xs={12} lg={8} >
                  <Card
                    disableWidgetMenu
                    title={'Temperatura Aire Vs Humedad Aire Vs Tiempo'}
                  >
                    <MuiltiLines
                      firstLabel={'Temperatura Aire Nodo 5'}
                      secondLabel={'Humedad Aire Nodo 5'}
                      xLabel={'Tiempo'}
                      yOneLabel={'Temperatura °C'}
                      yTwoLabel={'Humedad %'}
                      oneColor={'#4bc0c066'}
                      twoColor={'#ff638444'}
                      stepLabel={2}
                    />
                  </Card>
                </Grid>
              </Hidden>

              <Hidden mdDown>
                <Grid item xs={12} sm={2}>
                  <Card
                    disableWidgetMenu
                    title={'Humedad Aire'}
                    bodyClass={classes.card}
                  >
                    <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      className={classes.containerVar}>
                      <img alt="AirHum" src={GoutAir} className={classes.icon} />
                      <Typography component="h1" variant="h6" className={classes.titleCard}>
                        {this.state.isData && lastWeather.nodeId5.airHum} {' %'}
                      </Typography>
                    </Grid>

                  </Card>
                </Grid>
              </Hidden>





              {/* 
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres */}






              <Hidden lgUp>
                <Grid item xs={12} sm={6}>
                  <Card
                    disableWidgetMenu
                    title={'Temperatura Tierra'}
                    bodyClass={classes.card}
                  >
                    <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      className={classes.containerVar}>
                      <img alt="AirHum" src={TemperatureEarth} className={classes.icon} />
                      <Typography component="h1" variant={"h6"} className={classes.titleCard}>
                        {this.state.isData && lastWeather.nodeId5.earthTemp} {' °C'}
                      </Typography>
                    </Grid>
                  </Card>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Card
                    disableWidgetMenu
                    title={'Humedad Tierra'}
                    bodyClass={classes.card}
                  >
                    <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      className={classes.containerVar}>
                      <img alt="AirHum" src={GoutEarth} className={classes.icon} />
                      <Typography component="h1" variant={"h6"} className={classes.titleCard}>
                        {this.state.isData && lastWeather.nodeId5.earthHum} {' %'}
                      </Typography>
                    </Grid>
                  </Card>
                </Grid>
              </Hidden>




              {/* 
                Metricas Tres
                Metricas Tres
                Metricas Tres */}

              <Hidden mdDown>
                <Grid item xs={12} sm={2}>
                  <Card
                    disableWidgetMenu
                    title={'Temperatura Tierra'}
                    bodyClass={classes.card}
                  >
                    <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      className={classes.containerVar}>
                      <img alt="AirHum" src={TemperatureEarth} className={classes.icon} />
                      <Typography component="h1" variant={"h6"} className={classes.titleCard}>
                        {this.state.isData && lastWeather.nodeId5.earthTemp} {' °C'}
                      </Typography>
                    </Grid>
                  </Card>
                </Grid>
              </Hidden>
              <Hidden xsDown>
                <Grid item xs={12} lg={8} >
                  <Card
                    disableWidgetMenu
                    title={'Temperatura Tierra Vs Humedad Tierra Vs Tiempo'}
                  >
                    <MuiltiLines
                      firstLabel={'Temperatura Tierra Nodo 5'}
                      secondLabel={'Humedad Tierra Nodo 5'}
                      xLabel={'Tiempo'}
                      yOneLabel={'Temperatura °C'}
                      yTwoLabel={'Humedad %'}
                      oneColor={'#ff9f4044'}
                      twoColor={'#36a2eb44'}
                      stepLabel={2}
                    />
                  </Card>
                </Grid>
              </Hidden>
              <Hidden mdDown>
                <Grid item xs={12} sm={2}>
                  <Card
                    disableWidgetMenu
                    title={'Humedad Tierra'}
                    bodyClass={classes.card}
                  >
                    <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      className={classes.containerVar}>
                      <img alt="AirHum" src={GoutEarth} className={classes.icon} />
                      <Typography component="h1" variant={"h6"} className={classes.titleCard}>
                        {this.state.isData && lastWeather.nodeId5.earthHum} {' %'}
                      </Typography>
                    </Grid>
                  </Card>
                </Grid>
              </Hidden>

              {/* 
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres */}

              <Grid item xs={12} md={3}   >
                <Card
                  disableWidgetMenu
                  title={'Luz'}
                  bodyClass={classes.card}
                >
                  <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    className={classes.containerVar}>
                    <img alt="Light" src={Sun} className={classes.icon} />
                    <Typography component="h1" variant={"h6"} className={classes.titleCard}>
                      {this.state.isData && lastWeather.nodeId5.light} {' Lux'}
                    </Typography>
                  </Grid>
                </Card>
              </Grid>
              <Hidden xsDown>
                <Grid item xs={12} md={9}  >
                  <Card
                    disableWidgetMenu
                    title={'Luz Vs Tiempo'}
                  >
                    <SimpleLines
                      firstLabel={'Luz Nodo 5'}
                      xLabel={'Tiempo'}
                      yOneLabel={'Lux'}
                      oneColor={'#ffe50044'}
                      borderOneColor={'#ffe500'}  //#ca8e00 dcc500 d8a200
                      stepLabel={2}
                    />
                  </Card>
                </Grid>
              </Hidden>

            </Grid>
          </Container>
        </TabPanel>



        {/* Modal
           Modal 
           Modal
           Modal
           Modal
           Modal */}

        <Modal
          open={this.state.stateModalRange}
          title={'Seleccione Rango'}
          handleClose={this.handleCancelRange}
          handleConfirm={this.handleSetRange}
        >
          <Grid item xs={12}  >
            <DateRange
              moveRangeOnFirstSelection={false}
              editableDateInputs={true}
              //showSelectionPreview={false}
              rangeColors={['#1498d5', '#1498d5']}
              FixedHeight
              maxDate={new Date("2025-05-25")}
              minDate={new Date("2020-08-01")}
              ranges={[this.state.oneRange]}
              onChange={this.handleChange}
              color={'#1498d5'}
            />
          </Grid>
        </Modal>


      </Grid >
    )
  };
}

Metrics.contextType = WeatherContext;

Metrics.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(withWidth()(Metrics)); 
