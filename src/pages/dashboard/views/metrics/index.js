import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '../../../../components/card'
import BigTitle from '../../../../components/bigTittle'
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import useStyles from './style.js'


function Metrics(props) {

  const { classes } = props;



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
  );
}

Metrics.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Metrics); 
