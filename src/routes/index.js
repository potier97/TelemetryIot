import React from 'react';
import {
  BrowserRouter as Router, 
  Switch,
  Route,
  // eslint-disable-next-line
  Redirect
} from 'react-router-dom'; 
// eslint-disable-next-line
import NoFound from "../pages/noFound"; 
import Maintenance from '../pages/maintenance';
import Login from '../pages/login';
import Dashboard from '../pages/dashboard';



   
    function Routes(){
    return (
      <>
        <Router   >
          <Switch>
            {/* <Redirect exact from="/TelemetryIot"  to="/TelemetryIot/login" /> */}
            {/* <Route exact path='/TelemetryIot/dashboard' component={Dashboard} /> */}
            <Route path="/dashboard" render={(props) => <Dashboard {...props} />} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/' component={Maintenance} />
            {/* <Route component={NoFound} /> */}
            <Redirect to="/login" />
          </Switch>
        </Router>
      </>
    )
}; export default Routes; 