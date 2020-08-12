import React, { Component } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
//COMPONENTES
import AppbarIot from '../../components/appbar';
import Product from '../../components/product';
import Values from '../../components/values';
import Footer from '../../components/footer';
//ESTILOS
import { withStyles } from '@material-ui/core/styles';
import useStyles from './style.js';


class Homepage extends Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <>
                <CssBaseline />
                <AppbarIot />
                <Product />
                <Values />
                <Footer />
            </>
        )
    }
}; export default withStyles(useStyles)(Homepage);