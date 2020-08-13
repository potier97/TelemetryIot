import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '../../../../components/card'
import BigTitle from '../../../../components/bigTittle'
import CssBaseline from '@material-ui/core/CssBaseline';
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



class Metrics extends Component {

  // constructor(props){
  //   super(props);
  //   this.state={

  //   }
  // }



  render() {
    const { classes } = this.props;
    return (

      <Grid className={classes.root}>
        <CssBaseline />

        <BigTitle title={'Métricas'} />

        <Container maxWidth={false} className={classes.container}>
          <Grid container spacing={3}>

            {/* Fila Uno
          Fila Uno
          Fila Uno
          Fila Uno
          Fila Uno
          Fila Uno
          Fila Uno */}

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

            {/* Fila Dos
          Fila Dos
          Fila Dos
          Fila Dos
          Fila Dos
          Fila Dos
          Fila Dos */}


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


            {/* Fila Tres
          Fila Tres
          Fila Tres
          Fila Tres
          Fila Tres
          Fila Tres
          Fila Tres */}


            <Grid item xs={12}>
              <Card
                disableWidgetMenu
                title={'Métrica 7'}
              >

              </Card>
            </Grid>

          </Grid>
        </Container>
      </Grid>
    )
  };
}

Metrics.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Metrics); 
