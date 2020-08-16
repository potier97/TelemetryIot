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


//IMAGENES
import Temperature from '../../../../images/temperature.svg';
import Gout from '../../../../images/gout.svg';
import Sun from '../../../../images/sun.svg';


//CONTEXTO
import { WeatherContext } from '../../../../context/weather';

//SPEEDOMETER
//import ReactSpeedometer from "react-d3-speedometer"
//import SemiCircleProgressBar from "react-progressbar-semicircle";

//ESTILOS
import { withStyles } from '@material-ui/core/styles';
import useStyles from './style.js'


import { Line } from "react-chartjs-2";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774"
    }
  ]
}




function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
};





class Metrics extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stateTabs: 0,
    };
    this.handleTabs = this.handleTabs.bind(this)
  };


  handleTabs(event, newValue) {
    const value = newValue;
    //console.log(other)
    //console.log(name)
    this.setState({ stateTabs: value });
  };



  render() {
    const { classes } = this.props;
    //const { weather  } = this.context;
    //console.log(weather)
    return (

      <Grid className={classes.root}>
        <CssBaseline />

        <AppBar position="static" className={classes.appbar} >
          <Tabs
            //variant="fullWidth"
            value={this.state.stateTabs}
            onChange={this.handleTabs}
            aria-label="simple tabs example"
            variant="scrollable"
            scrollButtons="on"
          //aria-label="nav tabs example"
          >
            <Tab wrapped label="Nodo Promedio" className={classes.title} {...a11yProps(0)} />
            <Tab wrapped label="Nodo Uno" className={classes.title}{...a11yProps(1)} />
            <Tab wrapped label="Item Dos" className={classes.title} {...a11yProps(2)} />
            <Tab wrapped label="Item Tres" className={classes.title} {...a11yProps(3)} />
            <Tab wrapped label="Item Cuatro" className={classes.title} {...a11yProps(4)} />
            <Tab wrapped label="Item Cinco" className={classes.title} {...a11yProps(5)} />
          </Tabs>
        </AppBar>
        {/* Datos Nodo Promedio
        Datos Nodo Promedio
        Datos Nodo Promedio */}
        <TabPanel value={this.state.stateTabs} index={0}>
          <BigTitle title={'Métricas Promedio'} />
          <Container maxWidth={false} className={classes.container}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={3}>
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
                    <img alt="AirTemp" src={Temperature} className={classes.icon} />
                    <Typography component="h1" variant={"h5"} className={classes.titleCard}>
                      25.12 °C
                    </Typography>
                  </Grid>
                </Card>
              </Grid>

              <Grid item xs={12} md={6} lg={3}>
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
                    <img alt="AirHum" src={Gout} className={classes.icon} />
                    <Typography component="h1" variant={"h5"} className={classes.titleCard}>
                      15.23 %
                    </Typography>
                  </Grid>

                </Card>
              </Grid>



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
                    <img alt="AirHum" src={Temperature} className={classes.icon} />
                    <Typography component="h1" variant={"h5"} className={classes.titleCard}>
                      15.23 °c
                    </Typography>
                  </Grid>


                </Card>
              </Grid>

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
                    <img alt="AirHum" src={Gout} className={classes.icon} />
                    <Typography component="h1" variant={"h5"} className={classes.titleCard}>
                      5.23 %
                    </Typography>
                  </Grid>

                </Card>
              </Grid>

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
                    <Typography component="h1" variant={"h5"} className={classes.titleCard}>
                      25.12 °C
                    </Typography>
                  </Grid>


                </Card>
              </Grid>


              {/* Metricas dos
                Metricas dos
                Metricas dos
                Metricas dos
                Metricas dos
                Metricas dos */}



              <Grid item xs={12} lg={9}>
                <Card
                  disableWidgetMenu
                  title={'Temperatura - Tiempo - Humedad - Aire'}
                >
                  <Line data={data} />
                </Card>
              </Grid>



              {/* 
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres */}

              <Grid item xs={12}>
                <Card
                  disableWidgetMenu
                  title={'Temperatura - Tiempo - Humedad - Tierra'}
                >
                  <Line data={data} />
                </Card>
              </Grid>


              {/* 
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres */}

              <Grid item xs={12}>
                <Card
                  disableWidgetMenu
                  title={'Luz - Tiempo'}
                >
                  <Line data={data} />
                </Card>
              </Grid>


            </Grid>
          </Container>

        </TabPanel>
        {/* Datos Nodo Uno
        Datos Nodo Uno
        Datos Nodo Uno
        Datos Nodo Uno */}
        <TabPanel value={this.state.stateTabs} index={1}>
          <BigTitle title={'Métricas Nodo Uno'} />
          <Container maxWidth={false} className={classes.container}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={3}>
                <Card
                  disableWidgetMenu
                  title={'Métrica 1'}
                >

                </Card>
              </Grid>

              <Grid item xs={12} md={6} lg={3}>
                <Card
                  disableWidgetMenu
                  title={'Métrica 2'}
                >

                </Card>
              </Grid>

              <Grid item xs={12} md={6} lg={3}>
                <Card
                  disableWidgetMenu
                  title={'Métrica 3'}
                >

                </Card>
              </Grid>

              <Grid item xs={12} md={6} lg={3}>
                <Card
                  disableWidgetMenu
                  title={'Métrica 4'}
                >

                </Card>
              </Grid>

              {/* Metricas dos
                Metricas dos
                Metricas dos
                Metricas dos
                Metricas dos
                Metricas dos */}



              <Grid item xs={12} md={8} lg={9}>
                <Card
                  disableWidgetMenu
                  title={'Métrica 5'}
                >
                  <Line data={data} />
                </Card>
              </Grid>

              <Grid item xs={12} md={4} lg={3}>
                <Card
                  disableWidgetMenu
                  title={'Métrica 6'}
                >

                </Card>
              </Grid>

              {/* 
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres */}

              <Grid item xs={12}>
                <Card
                  disableWidgetMenu
                  title={'Métrica 7'}
                >

                </Card>
              </Grid>
            </Grid>
          </Container>

        </TabPanel>
        {/* Datos Nodo Dos
        Datos Nodo Dos
        Datos Nodo Dos
        Datos Nodo Dos */}
        <TabPanel value={this.state.stateTabs} index={2}>
          <BigTitle title={'Métricas Nodo Dos'} />
          <Container maxWidth={false} className={classes.container}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={3}>
                <Card
                  disableWidgetMenu
                  title={'Métrica 1'}
                >

                </Card>
              </Grid>

              <Grid item xs={12} md={6} lg={3}>
                <Card
                  disableWidgetMenu
                  title={'Métrica 2'}
                >

                </Card>
              </Grid>

              <Grid item xs={12} md={6} lg={3}>
                <Card
                  disableWidgetMenu
                  title={'Métrica 3'}
                >

                </Card>
              </Grid>

              <Grid item xs={12} md={6} lg={3}>
                <Card
                  disableWidgetMenu
                  title={'Métrica 4'}
                >

                </Card>
              </Grid>

              {/* Metricas dos
                Metricas dos
                Metricas dos
                Metricas dos
                Metricas dos
                Metricas dos */}



              <Grid item xs={12} md={8} lg={9}>
                <Card
                  disableWidgetMenu
                  title={'Métrica 5'}
                >
                  <Line data={data} />
                </Card>
              </Grid>

              <Grid item xs={12} md={4} lg={3}>
                <Card
                  disableWidgetMenu
                  title={'Métrica 6'}
                >

                </Card>
              </Grid>

              {/* 
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres */}

              <Grid item xs={12}>
                <Card
                  disableWidgetMenu
                  title={'Métrica 7'}
                >

                </Card>
              </Grid>
            </Grid>
          </Container>

        </TabPanel>
        {/* Datos Nodo Tres
        Datos Nodo Tres
        Datos Nodo Tres
        Datos Nodo Tres  */}
        <TabPanel value={this.state.stateTabs} index={3}>
          <BigTitle title={'Métricas Nodo Tres'} />
          <Container maxWidth={false} className={classes.container}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={3}>
                <Card
                  disableWidgetMenu
                  title={'Métrica 1'}
                >

                </Card>
              </Grid>

              <Grid item xs={12} md={6} lg={3}>
                <Card
                  disableWidgetMenu
                  title={'Métrica 2'}
                >

                </Card>
              </Grid>

              <Grid item xs={12} md={6} lg={3}>
                <Card
                  disableWidgetMenu
                  title={'Métrica 3'}
                >

                </Card>
              </Grid>

              <Grid item xs={12} md={6} lg={3}>
                <Card
                  disableWidgetMenu
                  title={'Métrica 4'}
                >

                </Card>
              </Grid>

              {/* Metricas dos
                Metricas dos
                Metricas dos
                Metricas dos
                Metricas dos
                Metricas dos */}



              <Grid item xs={12} md={8} lg={9}>
                <Card
                  disableWidgetMenu
                  title={'Métrica 5'}
                >
                  <Line data={data} />
                </Card>
              </Grid>

              <Grid item xs={12} md={4} lg={3}>
                <Card
                  disableWidgetMenu
                  title={'Métrica 6'}
                >

                </Card>
              </Grid>

              {/* 
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres */}

              <Grid item xs={12}>
                <Card
                  disableWidgetMenu
                  title={'Métrica 7'}
                >

                </Card>
              </Grid>
            </Grid>
          </Container>

        </TabPanel>
        {/* Datos Nodo Cuatro
        Datos Nodo Cuatro
        Datos Nodo Cuatro
        Datos Nodo Cuatro
        Datos Nodo Cuatro */}
        <TabPanel value={this.state.stateTabs} index={4}>
          <BigTitle title={'Métricas Nodo Cuatro'} />
          <Container maxWidth={false} className={classes.container}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={3}>
                <Card
                  disableWidgetMenu
                  title={'Métrica 1'}
                >

                </Card>
              </Grid>

              <Grid item xs={12} md={6} lg={3}>
                <Card
                  disableWidgetMenu
                  title={'Métrica 2'}
                >

                </Card>
              </Grid>

              <Grid item xs={12} md={6} lg={3}>
                <Card
                  disableWidgetMenu
                  title={'Métrica 3'}
                >

                </Card>
              </Grid>

              <Grid item xs={12} md={6} lg={3}>
                <Card
                  disableWidgetMenu
                  title={'Métrica 4'}
                >

                </Card>
              </Grid>

              {/* Metricas dos
                Metricas dos
                Metricas dos
                Metricas dos
                Metricas dos
                Metricas dos */}



              <Grid item xs={12} md={8} lg={9}>
                <Card
                  disableWidgetMenu
                  title={'Métrica 5'}
                >
                  <Line data={data} />
                </Card>
              </Grid>

              <Grid item xs={12} md={4} lg={3}>
                <Card
                  disableWidgetMenu
                  title={'Métrica 6'}
                >

                </Card>
              </Grid>

              {/* 
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres */}

              <Grid item xs={12}>
                <Card
                  disableWidgetMenu
                  title={'Métrica 7'}
                >

                </Card>
              </Grid>
            </Grid>
          </Container>

        </TabPanel>
        {/* Datos Nodo Cinco
        Datos Nodo Cinco
        Datos Nodo Cinco
        Datos Nodo Cinco
        Datos Nodo Cinco */}
        <TabPanel value={this.state.stateTabs} index={5}>
          <BigTitle title={'Métricas Nodo Cinco'} />
          <Container maxWidth={false} className={classes.container}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={3}>
                <Card
                  disableWidgetMenu
                  title={'Métrica 1'}
                >

                </Card>
              </Grid>

              <Grid item xs={12} md={6} lg={3}>
                <Card
                  disableWidgetMenu
                  title={'Métrica 2'}
                >

                </Card>
              </Grid>

              <Grid item xs={12} md={6} lg={3}>
                <Card
                  disableWidgetMenu
                  title={'Métrica 3'}
                >

                </Card>
              </Grid>

              <Grid item xs={12} md={6} lg={3}>
                <Card
                  disableWidgetMenu
                  title={'Métrica 4'}
                >

                </Card>
              </Grid>

              {/* Metricas dos
                Metricas dos
                Metricas dos
                Metricas dos
                Metricas dos
                Metricas dos */}



              <Grid item xs={12} md={8} lg={9}>
                <Card
                  disableWidgetMenu
                  title={'Métrica 5'}
                >
                  <Line data={data} />
                </Card>
              </Grid>

              <Grid item xs={12} md={4} lg={3}>
                <Card
                  disableWidgetMenu
                  title={'Métrica 6'}
                >

                </Card>
              </Grid>

              {/* 
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres
                Metricas Tres */}

              <Grid item xs={12}>
                <Card
                  disableWidgetMenu
                  title={'Métrica 7'}
                >

                </Card>
              </Grid>
            </Grid>
          </Container>


        </TabPanel>
      </Grid >
    )
  };
}


Metrics.contextType = WeatherContext;

Metrics.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Metrics); 
