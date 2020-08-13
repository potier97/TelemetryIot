import React from 'react';
import {
  Switch,
  Redirect
} from 'react-router-dom';
import RouteWithLayout from '../components/routeWithLayout';
import Main  from '../layouts';  
import Metrics  from '../views/metrics';
import About  from '../views/about'; 
 
function Routes(){
  //console.log('rende')
  return (
    <Switch>
      <RouteWithLayout
        component={Metrics}
        exact
        layout={Main}
        path="/dashboard/metrics"
      />
      <RouteWithLayout
        component={About}
        exact
        layout={Main}
        path="/dashboard/acerca"
      />
      <Redirect to={{ pathname: "/dashboard/metrics" }} />
    </Switch>
  );
};

export default Routes;