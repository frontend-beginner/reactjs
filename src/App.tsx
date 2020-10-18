import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import { push } from 'connected-react-router';
import 'antd/dist/antd.less';
import './App.less';

import { getTokenFromResponse } from './utils/spotify';
import { RootState } from './store';
import { AuthActions } from './store/actions';
import RestrictedRoute from './components/Routes/NotLoggedinRoute';
import Login from './layouts/Login';
import Default from './layouts/Default';

function App() {
  const dispatch = useDispatch();
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);

  const { accessTokenAction } = AuthActions;

  const _accessToken = window.localStorage.getItem('access_token');
  // const _spotify = window.localStorage.getItem('spotify');

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = '';

    const _token = hash.access_token;

    if (_token) {
      dispatch(accessTokenAction(_token));
      console.log('1');
    }

    if (_accessToken && !accessToken) {
      dispatch(accessTokenAction(_accessToken));
      console.log(3);
    }

    !_accessToken && dispatch(push('/login'));
  }, [dispatch, accessTokenAction, _accessToken, accessToken]);

  return (
    <>
      {_accessToken ? (
        <Default />
      ) : (
        <Switch>
          <RestrictedRoute component={Login} path='/login' />
        </Switch>
      )}
    </>
  );
}

export default React.memo(App);
