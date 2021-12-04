import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user ,isLoading} = useAuth();
    if(isLoading) {
      return  <Spinner className="m-8" animation="border" variant="success" />
    }
    return (
        <Route
        {...rest}
        // if we have user then will go to placeorder place 
        render={({ location }) =>
          user.uid ? (
            children
          ) : (
            // if user is not logged in it will go to login  page first
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      >
        </Route>
    );
};

export default PrivateRoute;