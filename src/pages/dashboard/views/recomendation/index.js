import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '../../../../components/card'
import BigTitle from '../../../../components/bigTittle'
import CssBaseline from '@material-ui/core/CssBaseline';

//CONTEXTO
import { WeatherContext } from '../../../../context/weather'

//GRÁFICO
//import SimpleDoughnut from '../../../../components/simpleDoughnut';
//import '../node_modules/react-vis/dist/style.css';
//import { XYPlot, VerticalBarSeries } from 'react-vis';


//IMAGENES
// import Temperature from '../../../../images/temperature.svg';
// import Gout from '../../../../images/gout.svg';
// import Sun from '../../../../images/sun.svg';

//ESTILOS
import { withStyles } from '@material-ui/core/styles';
import useStyles from './style.js'

// {/* <SimpleDoughnut
//                   labelData={["Jan", "Feb", "Mar", "Apr", "May"]}
//                   firstLabel={'First dataset'}
//                   xLabel={'Nombre  x'}
//                   dataOne={[53, 15, 25, 65, 45]}
// /> */}


class Recomendation extends Component {

  constructor(props) {
    super(props);
    this.state = {

      dato: 0,
      data: [
        { x: 0, y: 8 },
        { x: 1, y: 5 },
        { x: 2, y: 4 },
        { x: 3, y: 9 },
        { x: 4, y: 1 },
        { x: 5, y: 7 },
        { x: 6, y: 6 },
        { x: 7, y: 3 },
        { x: 8, y: 2 },
        { x: 9, y: 0 }
      ],
    }
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(e) {
    // eslint-disable-next-line
    let data = e;
  }



  render() {
    const { classes } = this.props;
    //const { weather  } = this.context;
    //console.log(weather)
    return (
      <Grid className={classes.root}>
        <CssBaseline />
        <BigTitle title={'Recomendación'} />
        <Container maxWidth={false} className={classes.container}>
          <Grid container spacing={3}>



            <Grid item xs={12} md={7}>
              <Card
                disableWidgetMenu
                title={'Mapa de Calor'}
              >
               <Grid  style={{
                 height: 500
               }} 
               
               />


              </Card>
            </Grid>

            <Grid item xs={12} md={5}>
              <Card
                disableWidgetMenu
                title={'Tabla'}
              >
                
              </Card>
            </Grid>

         

            {/*  SEGUNDA FILA
            SEGUNDA FILA
            SEGUNDA FILA
            SEGUNDA FILA
            SEGUNDA FILA
            SEGUNDA FILA */}


            {/* <Grid item xs={12} >
              <Card
                disableWidgetMenu
                title={'Recomendación'}
              >

              </Card>
            </Grid> */}

           
          </Grid>
        </Container>
      </Grid>
    )
  };
}


Recomendation.contextType = WeatherContext;

Recomendation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Recomendation); 
