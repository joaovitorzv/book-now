import React from 'react';
import { Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import Home from '../pages/Home';
import Order from '../pages/Order';
import Orders from '../pages/Orders';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const Routes: React.FC = () => (
  <Switch>
    <PrivateRoute path="/order" component={Order} />
    <PrivateRoute path="/orders" component={Orders} />

    <PublicRoute path="/" exact component={Home} />
    <PublicRoute path="/login" component={Login} isRestricted />
    <PublicRoute path="/signup" component={SignUp} isRestricted />

    <PublicRoute component={NotFound} />
  </Switch>
)

export default Routes;