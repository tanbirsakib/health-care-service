import React from 'react';
import { Redirect, Route } from 'react-router';
import useFirebase from '../../hooks/useFirebase';

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useFirebase();
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