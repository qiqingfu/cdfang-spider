import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PastYear from './containers/PastYear';
import CurrentYear from './containers/CurrentYear';
import Home from './containers/Home';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/2021" component={CurrentYear} exact />
    <Route path="/2020" component={PastYear} exact />
    <Route path="/2019" component={PastYear} exact />
    <Route path="/2018" component={PastYear} exact />
    <Route path="/2017" component={PastYear} exact />
  </Switch>
);

export default Routes;
