import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '../../../../components/card';
import Maps from '../../../../components/maps';
import Typography from '@material-ui/core/Typography';
import BigTitle from '../../../../components/bigTittle'
import CssBaseline from '@material-ui/core/CssBaseline';

//Constant
import { WEATHERAPI, LAT, LNG, LANG } from '../../../../constant'
import Axios from 'axios';

//Images
import Greenhouse from '../../../../images/greenhouse.jpg'


//Stiles
import { withStyles } from '@material-ui/core/styles';
import useStyles from './style.js';


class About extends Component {

  constructor(props) {
    super(props);
    this.state = {

      latPoss: 4.732539, //4.732539 anterior => 4.736610
      lngPoss: -73.911276, //-73.911276 anterior => -73.907915
      dataSummary: [
        {
          id: '0',
          idName: 'city_name',
          key: 'Ubicación',
          value: 'no Data',
          show: true
        },
        {
          id: '1',
          idName: 'ob_time',
          key: 'Última observación',
          value: 'no Data',
          show: true
        },
        {
          id: '2',
          idName: 'temp',
          key: 'Temperatura (Celcius)',
          value: 'no Data',
          show: true
        },
        {
          id: '3',
          idName: 'app_temp',
          key: 'Temperatura aparente (Celcius)',
          value: 'no Data',
          show: true
        },
        {
          id: '4',
          idName: 'rh',
          key: 'Humedad relativa (%)',
          value: 'no Data',
          show: true
        },
        {
          id: '5',
          idName: 'dewpt',
          key: 'Punto de rocío (Celcius)',
          value: 'no Data',
          show: true
        },
        {
          id: '6',
          idName: 'clouds',
          key: 'Cobertura de nubes (%)',
          value: 'no Data',
          show: true
        },
        {
          id: '7',
          idName: 'wind_cdir_full',
          key: 'Dirección del viento',
          value: 'no Data',
          show: true
        },
        {
          id: '8',
          idName: 'wind_dir',
          key: 'Dirección del viento (grados)',
          value: 'no Data',
          show: true
        },
        {
          id: '9',
          idName: 'wind_spd',
          key: 'Velocidad del viento (m/s)',
          value: 'no Data',
          show: true
        },
        {
          id: '10',
          idName: 'pres',
          key: 'Presión (mb)',
          value: 'no Data',
          show: true
        },
        {
          id: '11',
          idName: 'slp',
          key: 'Presión al nivel del mar (mb)',
          value: 'no Data',
          show: true
        },
        {
          id: '12',
          idName: 'solar_rad',
          key: 'Radiación solar estimada (W/m\u00b2)',
          value: 'no Data',
          show: true
        },
        {
          id: '13',
          idName: 'uv',
          key: 'Índice UV (0-11 +)',
          value: 'no Data',
          show: true
        },
        {
          id: '14',
          idName: 'elev_angle',
          key: 'Ángulo de elevación solar (grados)',
          value: 'no Data',
          show: true
        },
        {
          id: '15',
          idName: 'h_angle',
          key: 'Ángulo horario solar (grados)',
          value: 'no Data',
          show: true
        },
      ],

      // city_name: Nombre de la ciudad.
      // ob_time: Hora de la última observación (AAAA-MM-DD HH: MM). 

      // temp: Temperatura (Celsius por defecto). 
      // app_temp: Temperatura aparente / "Se siente como" (Celcius predeterminado). 

      // rh: Humedad relativa (%).
      // dewpt: Punto de rocío (Celcius predeterminado).

      // clouds: Cobertura de nubes (%). 
      // wind_cdir_full: Dirección verbal del viento.
      // wind_dir: Dirección del viento (grados).
      // wind_spd: Velocidad del viento (m / s por defecto)

      // pres: Presión (mb).
      // slp: Presión al nivel del mar (mb). 

      // solar_rad: Radiación solar estimada (W / m ^ 2). 
      // uv: Índice UV (0-11 +). 
      // elev_angle: Ángulo de elevación solar (grados).
      // h_angle: Ángulo horario solar (grados).
    }
  }


  async componentDidMount() {

    try {
      //const getWeather = await Axios.post(WEATHERAPI + '?lang=' + LANG + "&lat=" + LAT + "&lon=" + LNG + "&key=" + process.env.REACT_APP_API_WEATHER)  
      const getWeather = await Axios.get(WEATHERAPI, {
        params: {
          key: process.env.REACT_APP_API_WEATHER,
          lat: LAT,
          lon: LNG,
          lang: LANG
        }
      });
      //console.log(getWeather);
      if (getWeather.status === 200) {
        //console.log('Ok')
        const weather = getWeather.data.data[0];
        //console.log(weather);
        await this.setState(prevState => ({
          dataSummary: prevState.dataSummary.map(data => {
            if (data.idName === 'city_name') {
              let value = weather.city_name;
              return { ...data, value }
            } else if (data.idName === 'ob_time') {
              let value = weather.ob_time;
              return { ...data, value }
            } else if (data.idName === 'temp') {
              let value = weather.temp;
              return { ...data, value }
            } else if (data.idName === 'app_temp') {
              let value = weather.app_temp;
              return { ...data, value }
            } else if (data.idName === 'rh') {
              let value = weather.rh;
              return { ...data, value }
            } else if (data.idName === 'dewpt') {
              let value = weather.dewpt;
              return { ...data, value }
            } else if (data.idName === 'clouds') {
              let value = weather.clouds;
              return { ...data, value }
            } else if (data.idName === 'wind_cdir_full') {
              let value = weather.wind_cdir_full;
              return { ...data, value }
            } else if (data.idName === 'wind_dir') {
              let value = weather.wind_dir;
              return { ...data, value }
            } else if (data.idName === 'wind_spd') {
              let value = weather.wind_spd;
              return { ...data, value }
            } else if (data.idName === 'pres') {
              let value = weather.pres;
              return { ...data, value }
            } else if (data.idName === 'slp') {
              let value = weather.slp;
              return { ...data, value }
            } else if (data.idName === 'solar_rad') {
              let value = weather.solar_rad;
              return { ...data, value }
            } else if (data.idName === 'uv') {
              let value = weather.uv;
              return { ...data, value }
            } else if (data.idName === 'elev_angle') {
              let value = weather.elev_angle;
              return { ...data, value }
            } else if (data.idName === 'h_angle') {
              let value = weather.h_angle;
              return { ...data, value }
            } else {
              return { ...data }
            }
          })
        }));
      }
    } catch (error) {
      console.log('error: ', error)
    }
  }


  render() {
    const { classes } = this.props;
    return (
      <>
        <Grid className={classes.root}>
          <CssBaseline />

          <BigTitle title={'Acerca de'} />

          <Container maxWidth={false} className={classes.container}>
            <Grid container spacing={3}>

              <Grid item xs={12} md={8} lg={9}>
                <Card
                  disableWidgetMenu
                  title={'Resumen'} >
                  <Typography component="h1" variant="h6" align='justify' className={classes.summary} >
                    {`Este Proyecto consiste en realizar el análisis de las distintas variables ambientales, que son comunes en un cultivo agrícola 
                     de tipo invernadero, para detectar qué parámetros y comportamientos “constantes o irregulares”, favorecen o perjudican a los mismos, 
                     las cuales se han trabajado mediante las técnicas tradicionales, proponiendo así tecnologías que mejoren la productividad a los modelos 
                     de bajo rendimiento. \n\n `}
                    <br />
                    <br />
                    <br />
                    {`Implementando un sistema de redes, compuesta de varios dispositivos IoT, desplegados en el cultivo, siendo capaces  
                     de adquirir y almacenar datos de las variables presentes, procesar y/o filtrar la información, y finalmente analizarla para obtener datos  
                     de valor, y así, poder entregar una respuesta del comportamiento del cultivo estudiado. \n\n `}
                    <br />
                    <br />
                    <br />
                    {`Se desarrollará en sectores de cultivos agrícolas ubicados a una altura aproximadamente o superior a los 2600 MSNM. \n\n `}
                    <br />
                    <br />
                    <br /> 

                  </Typography>
                  <Grid container
                    direction="column"
                    justify="center"
                    alignItems="stretch"
                    item
                    xs={12} >
                    <img src={Greenhouse} alt="grenhouse" width={'100%'} height={'100%'}   />  
                  </Grid>
                </Card>
              </Grid>

              <Grid item xs={12} md={4} lg={3}>
                <Card
                  disableWidgetMenu
                  title={'Inscripción'} >
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="stretch"
                  >

                    {this.state.dataSummary.map(data => (
                      data.show &&
                      <Grid item xs={12} className={classes.containerSummary} key={data.id} >
                        <Typography component="h1" variant="body1" align='left' className={classes.inscriptionKey} >
                          {data.key}
                        </Typography>
                        <Typography component="h1" variant="body2" align='justify' className={classes.inscriptionValue} >
                          {data.value}
                        </Typography>
                      </Grid>
                    ))}



                  </Grid>
                </Card>
              </Grid>

              <Grid item xs={12}>
                <Card
                  disableWidgetMenu
                  title={'Ubicación - La Calera - Cundinamarca'} >
                  <React.StrictMode>
                    <Maps
                      lat={this.state.latPoss}
                      lng={this.state.lngPoss}
                    />
                  </React.StrictMode>
                </Card>
              </Grid>

            </Grid>
          </Container>
        </Grid>
      </>
    )
  };
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(About); 
