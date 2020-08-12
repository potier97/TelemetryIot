import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '../../../../components/card';
import Maps from '../../../../components/maps';
import Typography from '@material-ui/core/Typography';
import BigTitle from '../../../../components/bigTittle'
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import useStyles from './style.js';


function About(props) {


  const { classes } = props;

  let dataSummary = [
    {
      id: '0',
      key: 'Dato1',
      value: 'Valor1'
    },
    {
      id: '1',
      key: 'Dato2',
      value: 'Valor2'
    },
    {
      id: '2',
      key: 'Dato3',
      value: 'Valor3'
    },
    {
      id: '3',
      key: 'Dato4',
      value: 'Valor4'
    },
    {
      id: '4',
      key: 'Dato5',
      value: 'Valor5'
    },
    {
      id: '5',
      key: 'Dato6',
      value: 'Valor6'
    },

  ]


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
                <Typography component="h1" variant="body1" align='justify' className={classes.summary} >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                  "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
                </Typography>
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

                  {dataSummary.map(data => (
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
                title={'Ubicación'} >
                <Maps />
              </Card>
            </Grid>

          </Grid>
        </Container>
      </Grid>
    </>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(About); 
