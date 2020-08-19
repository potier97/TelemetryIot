import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Card from '../../../../components/card';
import BigTitle from '../../../../components/bigTittle';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import CssBaseline from '@material-ui/core/CssBaseline';

//COMPONENTES DE LA TABLA
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import CreateIcon from '@material-ui/icons/Create';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

//CONTEXTO
import { PlantsContext } from '../../../../context/plant'

//COMPONENTES
import Modal from '../../../../components/dialog';
import { withSnackbar } from 'notistack';
import Spinner from '../../../../components/spinner';

//API
import { createPlant, deletePlant, updatePlant } from '../../../../firebase/api'

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



class Plants extends Component {

  constructor(props) {
    super(props);
    this.state = {

      //Modal
      stateModal: false,
      stateModalDelete: false,
      stateModalSpinner: false,


      //Validacion de Actualización
      isUpdating: false,

      //Old Name Update
      oldPlantName: '',

      //ID del item a Actualizar
      idPlant: '',

      //Nombre del item que desean eliminar
      itemDelete: '',

      //Nombre de la planta
      plantName: '',
      plantNameError: false,
      plantNameErrorMessage: '',
      //Temperatura Maxima
      tempMax: 0,
      tempMaxError: false,
      tempMaxErrorMessage: '',
      //Temperatura Minima
      tempMin: 0,
      tempMinError: false,
      tempMinErrorMessage: '',
      //Humedad Máxima
      humMax: 0,
      humMaxError: false,
      humMaxErrorMessage: '',
      //Humedad Mínima
      humMin: 0,
      humMinError: false,
      humMinErrorMessage: '',
      //Luz Máxima
      lightMax: 0,
      lightMaxError: false,
      lightMaxErrorMessage: '',
      //Luz Minima
      lightMin: 0,
      lightMinError: false,
      lightMinErrorMessage: '',

    };
    this.handleModal = this.handleModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.createPlants = this.createPlants.bind(this);
    this.validatePlants = this.validatePlants.bind(this);
    this.deletePlants = this.deletePlants.bind(this);
    this.cancelPlantsDelete = this.cancelPlantsDelete.bind(this);
    this.createPlantsDelete = this.createPlantsDelete.bind(this);


    this.updatePlants = this.updatePlants.bind(this);
    this.cancelPlants = this.cancelPlants.bind(this);

    this.handleSpinner = this.handleSpinner.bind(this);

  };

  handleModal() {
    this.setState({
      stateModal: !this.state.stateModal
    })
  };

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
    //this.setState({ [e.target.name] : e.target.value });
  };

  async createPlants() {
    //this.handleSpinner();

    let validation = await this.validatePlants();
    let that = this;


    try {
      if (!validation) {
        if (this.state.isUpdating) {
          let newPlant = await{
            namePlants: this.state.plantName,
            tempMax: this.state.tempMax,
            tempMin: this.state.tempMin,
            humMax: this.state.humMax,
            humMin: this.state.humMin,
            lightMax: this.state.lightMax,
            lightMin: this.state.lightMin,
          }
          await updatePlant(newPlant, this.state.idPlant);
          that.setState({ idPlant: '' });
          await this.props.enqueueSnackbar('Se ha Actualizado un Item.', {
            variant: 'info',
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right',
            },
          });
        } else {
          let newPlant = await{
            namePlants: this.state.plantName,
            tempMax: this.state.tempMax,
            tempMin: this.state.tempMin,
            humMax: this.state.humMax,
            humMin: this.state.humMin,
            lightMax: this.state.lightMax,
            lightMin: this.state.lightMin,
          }
          await createPlant(newPlant);
          await this.props.enqueueSnackbar('Se ha Agregado un Nuevo Item.', {
            variant: 'success',
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right',
            },
          });
        }
        this.cancelPlants();
      } 
    } catch (error) {
      //this.setState({ error });
      console.log('New error: ', error);
      this.props.enqueueSnackbar('Error, operación sin éxito.', {
        variant: 'error',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
      });
    }  
  };

  async validatePlants() {
    this.handleSpinner();
    let isError = false;
    let onlyNumbers = /^-?\d*\.{0,1}\d+$/;  //Números positivos y negativos
    ///^[0-9]*$/;
    let noNumbers = /^([^0-9]*)$/;

    let uniqueName;
    if(this.state.isUpdating){
      uniqueName = await this.context.plants.some(item => {
          if(item.namePlants.toLowerCase() === this.state.plantName.toLowerCase() && this.state.oldPlantName.toLowerCase() !== this.state.plantName.toLowerCase() ){
            return true
          }
          return false
        });
    }else{
      uniqueName = await this.context.plants.some(item => item.namePlants.toLowerCase() === this.state.plantName.toLowerCase());
    }
    

    //Nombre de la planta
    if (noNumbers.test(this.state.plantName) && this.state.plantName.length > 0 && !uniqueName) {
      this.setState({
        plantNameError: false,
        plantNameErrorMessage: '',
        plantName: this.state.plantName[0].toUpperCase() + this.state.plantName.substring(1)
      });
    } else {
      if (this.state.plantName.length === 0) {
        this.setState({
          plantNameError: true,
          plantNameErrorMessage: 'Ingrese Nombre de la planta',
        });
      } else if (uniqueName) {
        this.setState({
          plantNameError: true,
          plantNameErrorMessage: 'Este Item ya existe',
        });
      } else {
        this.setState({
          plantNameError: true,
          plantNameErrorMessage: 'No Ingrese Números',
        });
      }
      isError = true;
    }
    //Temperatura Máxima de la planta
    if (onlyNumbers.test(this.state.tempMax) && this.state.tempMax.length > 0 && Number(this.state.tempMax) > Number(this.state.tempMin) && Number(this.state.tempMax) <= 100) {
      this.setState({
        tempMaxError: false,
        tempMaxErrorMessage: '',
      });
    } else {
      if (this.state.tempMax.length === 0) {
        this.setState({
          tempMaxError: true,
          tempMaxErrorMessage: 'Ingrese Temperatura Máxima',
        });
      } else if (!onlyNumbers.test(this.state.tempMax)) {
        this.setState({
          tempMaxError: true,
          tempMaxErrorMessage: 'Ingrese Solo Números',
        });
      } else if (Number(this.state.tempMax) < Number(this.state.tempMin)) {
        this.setState({
          tempMaxError: true,
          tempMaxErrorMessage: 'Temperatura Máxima debe ser mayor que Temperatura Mínima',
        });
      } else {
        this.setState({
          tempMaxError: true,
          tempMaxErrorMessage: 'Temperatura Máxima debe ser menor o igual a 100 °c',
        });
      }
      isError = true;
    }
    //Temperatura Minima de la planta
    if (onlyNumbers.test(this.state.tempMin) && this.state.tempMin.length > 0 && Number(this.state.tempMax) > Number(this.state.tempMin) && Number(this.state.tempMin) >= 0) {
      this.setState({
        tempMinError: false,
        tempMinErrorMessage: '',
      });
    } else {
      if (this.state.tempMin.length === 0) {
        this.setState({
          tempMinError: true,
          tempMinErrorMessage: 'Ingrese Temperatura Mínima',
        });
      } else if (!onlyNumbers.test(this.state.tempMin)) {
        this.setState({
          tempMinError: true,
          tempMinErrorMessage: 'Ingrese Solo Números',
        });
      } else if (Number(this.state.tempMax) < Number(this.state.tempMin)) {
        this.setState({
          tempMinError: true,
          tempMinErrorMessage: 'Temperatura Mínima debe ser menor que Temperatura Máxima',
        });
      } else {
        this.setState({
          tempMinError: true,
          tempMinErrorMessage: 'Temperatura Mínima debe ser mayor o igual a 0 °c',
        });
      }
      isError = true;
    }
    //Humedad Máxima de la planta
    if (onlyNumbers.test(this.state.humMax) && this.state.humMax.length > 0 && Number(this.state.humMax) > Number(this.state.humMin) && Number(this.state.humMax) <= 100) {
      this.setState({
        humMaxError: false,
        humMaxErrorMessage: '',
      });
    } else {
      if (this.state.humMax.length === 0) {
        this.setState({
          humMaxError: true,
          humMaxErrorMessage: 'Ingrese Humedad Máxima',
        });
      } else if (!onlyNumbers.test(this.state.humMax)) {
        this.setState({
          humMaxError: true,
          humMaxErrorMessage: 'Ingrese Solo Números',
        });
      } else if (Number(this.state.humMax) < Number(this.state.humMin)) {
        this.setState({
          humMaxError: true,
          humMaxErrorMessage: 'Humedad Máxima debe ser mayor que Humedad Mínima',
        });
      } else {
        this.setState({
          humMaxError: true,
          humMaxErrorMessage: 'Humedad Máxima debe ser menor o igual a 100 %',
        });
      }

      isError = true;
    }
    //Humedad Mínima de la planta
    if (onlyNumbers.test(this.state.humMin) && this.state.humMin.length > 0 && Number(this.state.humMax) > Number(this.state.humMin) && Number(this.state.humMin) >= 0) {
      this.setState({
        humMinError: false,
        humMinErrorMessage: '',
      });
    } else {
      if (this.state.humMin.length === 0) {
        this.setState({
          humMinError: true,
          humMinErrorMessage: 'Ingrese Humedad Mínima',
        });
      } else if (!onlyNumbers.test(this.state.humMin)) {
        this.setState({
          humMinError: true,
          humMinErrorMessage: 'Ingrese Solo Números',
        });
      } else if (Number(this.state.humMax) <  Number(this.state.humMin)) {
        this.setState({
          humMinError: true,
          humMinErrorMessage: 'Humedad Mínima debe ser menor que Humedad Máxima',
        });
      } else {
        this.setState({
          humMinError: true,
          humMinErrorMessage: 'Humedad Mínima debe ser mayor o igual a 0 %',
        });
      }
      isError = true;
    }
    //Luz Máxima de la planta
    if (onlyNumbers.test(this.state.lightMax) && this.state.lightMax.length > 0 && Number(this.state.lightMax) > Number(this.state.lightMin) && Number(this.state.lightMax) <= 65535) {
      this.setState({
        lightMaxError: false,
        lightMaxErrorMessage: '',
      });
    } else {
      if (this.state.lightMax.length === 0) {
        this.setState({
          lightMaxError: true,
          lightMaxErrorMessage: 'Ingrese Luz Máxima',
        });
      } else if (!onlyNumbers.test(this.state.lightMax)) {
        this.setState({
          lightMaxError: true,
          lightMaxErrorMessage: 'Ingrese Solo Números',
        });
      } else if (Number(this.state.lightMax) < Number(this.state.lightMin)) {
        this.setState({
          lightMaxError: true,
          lightMaxErrorMessage: 'Luz Máxima debe ser mayor que Luz Mínima',
        });
      } else {
        this.setState({
          lightMaxError: true,
          lightMaxErrorMessage: 'Luz Máxima debe ser menor o igual a 65535 Lux',
        });
      }
      isError = true;
    }
    //Luz Mínima de la planta
    if (onlyNumbers.test(this.state.lightMin) && this.state.lightMin.length > 0 && Number(this.state.lightMax) > Number(this.state.lightMin) && Number(this.state.lightMin) >= 0) {
      this.setState({
        lightMinError: false,
        lightMinErrorMessage: '',
      });
    } else {
      if (this.state.lightMin.length === 0) {
        this.setState({
          lightMinError: true,
          lightMinErrorMessage: 'Ingrese Luz Mínima',
        });
      } else if (!onlyNumbers.test(this.state.lightMin)) {
        this.setState({
          lightMinError: true,
          lightMinErrorMessage: 'Ingrese Solo Números',
        });
      } else if (Number(this.state.lightMax) < Number(this.state.lightMin)) {
        this.setState({
          lightMinError: true,
          lightMinErrorMessage: 'Luz Mínima debe ser menor que Luz Máxima',
        });
      } else {
        this.setState({
          lightMinError: true,
          lightMinErrorMessage: 'Luz Mínima debe ser mayor a 0 Lux',
        });
      }
      isError = true;
    }
    this.handleSpinner();
    //Retornamos la validacion
    return isError
  };

  deletePlants(deleteData) {
    let data = deleteData;
    let item = data.namePlants.toUpperCase()
    this.setState({
      itemDelete: item,
      idPlant: data.id,
      stateModalDelete: true,
    })
  };

  cancelPlantsDelete() {
    this.setState({
      itemDelete: '',
      idPlant: '',
      stateModalDelete: false,
    })
  };

  async createPlantsDelete() {
    this.handleSpinner();
    try {
      await deletePlant(this.state.idPlant)
      this.props.enqueueSnackbar('Se ha Eliminado un Item.', {
        variant: 'warning',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
      });
      this.cancelPlantsDelete();
    } catch (error) {
      //this.setState({ error });
      console.log('New error: ', error);
      this.props.enqueueSnackbar('Error, operación sin éxito.', {
        variant: 'error',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
      });
    }
    this.handleSpinner();
  };

  updatePlants(updateData) {
    let data = updateData;
    this.setState({
      oldPlantName: data.namePlants,
      plantName: data.namePlants,
      tempMax: data.tempMax,
      tempMin: data.tempMin,
      humMax: data.humMax,
      humMin: data.humMin,
      lightMax: data.lightMax,
      lightMin: data.lightMin,
      idPlant: data.id
    })
    this.handleModal();
  };

  cancelPlants() {
    this.setState({
      oldPlantName: '',
      //Nombre de la planta
      plantName: '',
      plantNameError: false,
      plantNameErrorMessage: '',
      //Temperatura Maxima
      tempMax: 0,
      tempMaxError: false,
      tempMaxErrorMessage: '',
      //Temperatura Minima
      tempMin: 0,
      tempMinError: false,
      tempMinErrorMessage: '',
      //Humedad Máxima
      humMax: 0,
      humMaxError: false,
      humMaxErrorMessage: '',
      //Humedad Mínima
      humMin: 0,
      humMinError: false,
      humMinErrorMessage: '',
      //Luz Máxima
      lightMax: 0,
      lightMaxError: false,
      lightMaxErrorMessage: '',
      //Luz Minima
      lightMin: 0,
      lightMinError: false,
      lightMinErrorMessage: '',
    });
    this.handleModal();
  };

  handleSpinner() {
    this.setState({
      stateModalSpinner: !this.state.stateModalSpinner
    })
  }


  render() {
    const { classes } = this.props;
    const { plants } = this.context
    //console.log(plants)
    return (

      <Grid className={classes.root}>
        <CssBaseline />

        <BigTitle title={'Frutas, Verduraz y Cereales'} />

        <Container maxWidth={false} className={classes.container}>
          <Grid container spacing={3}>
            {/* 
           Tabla Base de datos
           Tabla Base de datos
           Tabla Base de datos 
           Tabla Base de datos
           Tabla Base de datos */}



            <Grid item xs={12}  >
              <Card
                disableWidgetMenu
                title={'Tabla'}
              >
                {/* <Tables 
                  //data={plants}
                  //
                /> */}
                <>
                  <TableContainer className={classes.rootTable}  >
                    <Table className={classes.table}  >
                      <TableHead>
                        <TableRow >
                          <TableCell >
                            <Typography component="h1" variant="h6" className={classes.title}>
                              Alimentos
                                </Typography>
                          </TableCell>
                          <TableCell align="right" >
                            <Typography component="h1" variant="body2" className={classes.title}>
                              Tem Máx &deg;c
                                </Typography>
                          </TableCell>
                          <TableCell align="right" className={classes.title}>
                            <Typography component="h1" variant="body2" className={classes.title}>
                              Tem Mín &deg;c
                                </Typography>
                          </TableCell>
                          <TableCell align="right" className={classes.title}>
                            <Typography component="h1" variant="body2" className={classes.title}>
                              Hum Máx %
                                </Typography>
                          </TableCell>
                          <TableCell align="right" className={classes.title}>
                            <Typography component="h1" variant="body2" className={classes.title}>
                              Hum Mín %
                                </Typography>
                          </TableCell>
                          <TableCell align="right" className={classes.title}>
                            <Typography component="h1" variant="body2" className={classes.title}>
                              Luz Máx Lux
                                </Typography>
                          </TableCell>
                          <TableCell align="right" className={classes.title} >
                            <Typography component="h1" variant="body2" className={classes.title}>
                              Luz Mín Lux
                                </Typography>
                          </TableCell>

                          <TableCell padding={'checkbox'} />
                          <TableCell padding={'checkbox'} />
                        </TableRow>
                      </TableHead>


                      <TableBody>
                        {plants.map((row, index) => (
                          <StyledTableRow key={index.toString()}>
                            <TableCell component="th" scope="row" className={classes.text}>{row.namePlants}</TableCell>
                            <TableCell align="right" className={classes.text}>{row.tempMax}</TableCell>
                            <TableCell align="right" className={classes.text}>{row.tempMin}</TableCell>
                            <TableCell align="right" className={classes.text}>{row.humMax}</TableCell>
                            <TableCell align="right" className={classes.text}>{row.humMin}</TableCell>
                            <TableCell align="right" className={classes.text}>{row.lightMax}</TableCell>
                            <TableCell align="right" className={classes.text}>{row.lightMin}</TableCell>
                            <TableCell align="center" className={classes.text}>
                              <IconButton
                                aria-label="expand row"
                                size="small"
                                className={classes.icon}
                                onClick={() => this.deletePlants(row)}>
                                <DeleteOutlineIcon />
                              </IconButton>
                            </TableCell>
                            <TableCell align="center" className={classes.text}>
                              <IconButton
                                aria-label="expand row"
                                size="small"
                                className={classes.icon}
                                onClick={() => { this.setState({ isUpdating: true }); this.updatePlants(row); }}>
                                <CreateIcon />
                              </IconButton>
                            </TableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </>
              </Card>
            </Grid>
          </Grid>


          <Spinner
            open={this.state.stateModalSpinner}
            title={'!Validando!'}
          />

          <Modal
            open={this.state.stateModalDelete}
            title={'¡Advertencia!'}
            handleClose={this.cancelPlantsDelete}
            handleConfirm={this.createPlantsDelete}
          >
            <Grid item xs={12} component={'span'} >

              <Typography component="h1" variant="h5" align={'center'} className={classes.title}>
                {'¿Desea eliminar el item: ' + this.state.itemDelete + ' de esta base de Datos?'}
              </Typography>
            </Grid>

          </Modal>


          {/* Modal
           Modal
           Modal
           Modal
           Modal
           Modal
           Modal
           Modal
           Modal
           Modal
           Modal */}

          <Modal
            open={this.state.stateModal}
            title={'Añadir Registro'}
            handleClose={this.cancelPlants}
            handleConfirm={this.createPlants}
          >
            <Grid item xs={12} component={'span'} >
              <TextField
                fullWidth
                margin="normal"
                //id="standard-controlled"
                label="Nombre Planta"
                name={'plantName'}
                value={this.state.plantName}
                onChange={this.handleChange}
                error={this.state.plantNameError}
                helperText={this.state.plantNameErrorMessage}
                InputProps={{ className: classes.multilineColor }}
                InputLabelProps={{
                  classes: {
                    root: classes.labelRoot,
                    focused: classes.labelFocused,
                  }
                }}
              />
              <TextField
                fullWidth
                margin="normal"
                //id="standard-controlled"
                label="Temperatura Máxima"
                name={'tempMax'}
                value={this.state.tempMax}
                onChange={this.handleChange}
                error={this.state.tempMaxError}
                helperText={this.state.tempMaxErrorMessage}
                InputProps={{ className: classes.multilineColor }}
                InputLabelProps={{
                  classes: {
                    root: classes.labelRoot,
                    focused: classes.labelFocused,
                  }
                }}
              />
              <TextField
                fullWidth
                margin="normal"
                //id="standard-controlled"
                label="Temperatura Mínima"
                name={'tempMin'}
                value={this.state.tempMin}
                onChange={this.handleChange}
                error={this.state.tempMinError}
                helperText={this.state.tempMinErrorMessage}
                InputProps={{ className: classes.multilineColor }}
                InputLabelProps={{
                  classes: {
                    root: classes.labelRoot,
                    focused: classes.labelFocused,
                  }
                }}
              />
              <TextField
                fullWidth
                margin="normal"
                //id="standard-controlled"
                label="Humedad Máxima"
                name={'humMax'}
                value={this.state.humMax}
                onChange={this.handleChange}
                error={this.state.humMaxError}
                helperText={this.state.humMaxErrorMessage}
                InputProps={{ className: classes.multilineColor }}
                InputLabelProps={{
                  classes: {
                    root: classes.labelRoot,
                    focused: classes.labelFocused,
                  }
                }}
              />
              <TextField
                fullWidth
                margin="normal"
                //id="standard-controlled"
                label="Humedad Mínima"
                name={'humMin'}
                value={this.state.humMin}
                onChange={this.handleChange}
                error={this.state.humMinError}
                helperText={this.state.humMinErrorMessage}
                InputProps={{ className: classes.multilineColor }}
                InputLabelProps={{
                  classes: {
                    root: classes.labelRoot,
                    focused: classes.labelFocused,
                  }
                }}
              />
              <TextField
                fullWidth
                margin="normal"
                //id="standard-controlled"
                label="Luz Máxima"
                name={'lightMax'}
                value={this.state.lightMax}
                onChange={this.handleChange}
                error={this.state.lightMaxError}
                helperText={this.state.lightMaxErrorMessage}
                InputProps={{ className: classes.multilineColor }}
                InputLabelProps={{
                  classes: {
                    root: classes.labelRoot,
                    focused: classes.labelFocused,
                  }
                }}
              />
              <TextField
                fullWidth
                margin="normal"
                //id="standard-controlled"
                label="Luz Mínima"
                name={'lightMin'}
                value={this.state.lightMin}
                onChange={this.handleChange}
                error={this.state.lightMinError}
                helperText={this.state.lightMinErrorMessage}
                InputProps={{ className: classes.multilineColor }}
                InputLabelProps={{
                  classes: {
                    root: classes.labelRoot,
                    focused: classes.labelFocused,
                  }
                }}
              />
            </Grid>
          </Modal>


          {/* FAB para activar el modal
          FAB para activar el modal
          FAB para activar el modal
          FAB para activar el modal */}


          <Fab
            aria-label="add"
            className={classes.fab}
            onClick={() => { this.setState({ isUpdating: false }); this.handleModal(); }}>
            <AddIcon />
          </Fab>

        </Container>
      </Grid>
    )
  };
}

Plants.contextType = PlantsContext;

Plants.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withSnackbar(withStyles(useStyles)(Plants));
















