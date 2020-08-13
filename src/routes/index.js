import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Redirect
} from 'react-router-dom';
import NoFound from "../pages/noFound";
import Homepage from "../pages/homepage";
//import Maintenance from '../pages/maintenance';
import Login from '../pages/login';
import Dashboard from '../pages/dashboard';
import GuardRoute from '../components/guardRoute';
import Root from '../components/root';
import { AuthContexProvider } from '../context/auth';




function Routes() {
  return (
    <>
      <AuthContexProvider>
        <Root>
          <Router   >
            <Switch>
              {/* <Route type='private' path="/dashboard" render={(props) => <Dashboard {...props} />} /> */}
              <GuardRoute type='private' path="/dashboard" render={(props) => <Dashboard {...props} />} />
              {/* <GuardRoute type='private' path="/dashboard" component={Dashboard} /> */}
              <GuardRoute type='public' exact path='/login' component={Login} />
              <GuardRoute type='public' exact path='/' component={Homepage} />
              <Route type='public' component={NoFound} />
            </Switch>
          </Router>
        </Root>
      </AuthContexProvider>
    </>
  )
}; export default Routes; 