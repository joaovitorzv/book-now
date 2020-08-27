import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Home from '../pages/Home';
import Order from '../pages/Order';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/order" component={Order} />

    <Route path="/login" component={Login} />
    <Route path="/signup" component={SignUp} />

    <Route component={NotFound} />
  </Switch>
)

export default Routes;