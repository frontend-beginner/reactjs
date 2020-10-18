import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';

/**
 * A Route that only display the component if user is NOT logged in
 */

interface RestrictedRouteProps {
  component: React.FC<any>;
  path: string;
  [key: string]: any;
}

const RestrictedRoute: React.FC<RestrictedRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.accessToken);

  return (
    <Route
      {...rest}
      render={(props) => {
        console.log(
          '[RestrictedRoute] Redering ' +
            props.location.pathname +
            ', isLoggedIn = ',
          !!isLoggedIn
        );
        return isLoggedIn ? (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        ) : (
          <Component {...props} />
        );
      }}
    />
  );
};

export default React.memo(RestrictedRoute);
