import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';

interface PrivateRouteProps {
  component: React.FC<any>;
  path: string;
  [key: string]: any;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.accessToken);

  return (
    <Route
      {...rest}
      render={(props) => {
        console.log(
          '[PrivateRoute] Entering ' +
            props.location.pathname +
            ', isLoggedIn: ' +
            !!isLoggedIn
        );
        return isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        );
      }}
    />
  );
};

export default React.memo(PrivateRoute);
