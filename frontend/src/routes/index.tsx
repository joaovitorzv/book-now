import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Home from '../pages/Home';
import Orders from '../pages/Orders';
import NotFound from '../pages/NotFound';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/orders" component={Orders} isPrivate />

    <Route component={NotFound} />
  </Switch>
)

export default Routes;