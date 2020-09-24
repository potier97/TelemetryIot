import React from 'react';
import {
  Switch,
  Redirect
} from 'react-router-dom';
import RouteWithLayout from '../components/routeWithLayout';
import Main  from '../layouts';  
import Metrics  from '../views/metrics';
import About  from '../views/about'; 
import Recomendation  from '../views/recomendation';
import Plants  from '../views/plants'; 

 
function Routes(){ 
  //console.log('algo')
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
        path="/dashboard/about"
      />
      <RouteWithLayout
        component={Recomendation}
        exact
        layout={Main}
        path="/dashboard/recomendation"
      />
      <RouteWithLayout
        component={Plants}
        exact
        layout={Main}
        path="/dashboard/plants"
      />
      <Redirect to={{ pathname: "/dashboard/metrics" }} />
    </Switch>
  );
};

export default Routes;