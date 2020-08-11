import React from 'react';
import {
  Switch,
  Redirect
} from 'react-router-dom';
import RouteWithLayout from './components/routeWithLayout';
import Main  from './layouts';  
import Metrics  from './views/metrics';
import About  from './views/about'; 
 
const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout
        component={Metrics}
        exact
        layout={Main}
        path="/TelemetryIot/dashboard/metrics"
      />
      <RouteWithLayout
        component={About}
        exact
        layout={Main}
        path="/TelemetryIot/dashboard/acerca"
      />
      <Redirect to={{ pathname: "/TelemetryIot/dashboard/metrics" }} />
    </Switch>
  );
};

export default Routes;