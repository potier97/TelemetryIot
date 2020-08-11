import React, { Component } from 'react';
import {
  BrowserRouter  as Router,
  // eslint-disable-next-line 
  HashRouter,
  Switch,
  Route,
  // eslint-disable-next-line
  Redirect 
} from 'react-router-dom';
// eslint-disable-next-line
import NoFound from "../pages/noFound";
// eslint-disable-next-line
import Maintenance from '../pages/maintenance';
import Login  from '../pages/login';
import Dashboard  from '../pages/dashboard';
//import { useFirebaseApp } from 'reactfire'

class Routes extends Component {
  //const firebase = useFirebaseApp();
  //console.log(firebase);
  render() {
    return (
      <> 
        <Router   //HashRouter  basename={process.env.PUBLIC_URL + '/'}
        >
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
} export default Routes; 