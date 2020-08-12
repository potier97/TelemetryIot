import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Switch,
  Route,
  // eslint-disable-next-line
  Redirect
} from 'react-router-dom'; 
import NoFound from "../pages/noFound"; 
import Maintenance from '../pages/maintenance';
import Login from '../pages/login';
import Dashboard from '../pages/dashboard';
import { useFirebaseApp } from 'reactfire';

// class Routes extends Component {
  
  // render() {
    function Routes(){
    const firebase = useFirebaseApp();
    console.log(firebase);
    console.log(process.env.REACT_APP_PROJECT_ID);
    return (
      <>
        <Router   >
          <Switch>
            {/* <Redirect exact from="/TelemetryIot"  to="/TelemetryIot/login" /> */}

            {/* <Route exact path='/TelemetryIot/dashboard' component={Dashboard} /> */}
            <Route path="/TelemetryIot/dashboard" render={(props) => <Dashboard {...props} />} />
            <Route exact path='/TelemetryIot/login' component={Login} />
            <Route exact path='/' component={Maintenance} />
            <Route component={NoFound} />
          </Switch>
        </Router>
      </>
    )
  }
 export default Routes; 