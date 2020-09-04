import React from 'react';
import { Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import Home from '../pages/Home';
import Order from '../pages/Order';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const Routes: React.FC = () => (
  <Switch>
    <PublicRoute path="/" exact component={Home} />
    <PrivateRoute path="/order" component={Order} />

    <PublicRoute path="/login" component={Login} isRestricted />
    <PublicRoute path="/signup" component={SignUp} isRestricted />

    <PublicRoute component={NotFound} />
  </Switch>
)

export default Routes;