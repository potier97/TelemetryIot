import React, { Component } from 'react';
import {
    Route,
    Redirect
} from 'react-router-dom';

//Estilos
import { withStyles } from '@material-ui/core/styles';
import useStyles from './style.js';


//Context
import { AuthContext } from '../../context/auth'


class GuardRoute extends Component {
    render() {
        const { type, ...rest } = this.props;
        const { isLoggedIn } = this.context;


        if (!isLoggedIn && type === 'private') {
            return (
                <>
                    <Redirect to='/' />
                </>)
        } else if (isLoggedIn && type === 'public') {
            return (
                <>
                    <Redirect to='/dashboard/metricas' />
                </>
            )
        }

        return (<>  <Route {...rest} />  </>)
    }

};


GuardRoute.contextType = AuthContext;


export default withStyles(useStyles)(GuardRoute)