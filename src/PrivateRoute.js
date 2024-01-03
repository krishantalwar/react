// privateRoute.js
import React from 'react';
// import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
// import { Route } from 'react-router-dom';
import { useAuth } from './features/auth/authQueries';

const PrivateRoute = ({ component: Component, roles, ...rest }) => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    // Redirect if user is not authenticated
    // return <Redirect to="/login" />;
  }

//   if (roles && !roles.includes(user.role)) {
//     // Redirect if user does not have the required role
//     return <Redirect to="/" />;
//   }

  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export default PrivateRoute;
