import { Middleware } from 'redux';
import { push } from 'connected-react-router';
import SpotifyWebApi from 'spotify-web-api-js';

import { RootState } from '../index';
import { ACCESS_TOKEN, ERROR, MENU_COLLAPSED } from '../actionConstants';
import { SpotifyActions, AuthActions } from '../actions';

const spotify = new SpotifyWebApi();

const localStorageMiddleware: Middleware<RootState> = ({ dispatch, getState }) => (
  next
) => (action) => {
  if (action.type === ACCESS_TOKEN) {
    dispatch(SpotifyActions.setSpotify(spotify));

    const s = JSON.stringify(spotify);
    const accessToken = action.payload.accessToken;
    spotify.setAccessToken(accessToken);
    window.localStorage.setItem('access_token', accessToken);
    window.localStorage.setItem('spotify', s);
  }

  if (action.type === ERROR) {
    dispatch(push('/login'));
    dispatch(AuthActions.removeTokenAction());
    window.localStorage.removeItem('access_token');
    window.localStorage.removeItem('spotify');
  }

  if (action.type === MENU_COLLAPSED) {
    window.localStorage.setItem('menu_collapsed', action.payload);
  }

  next(action);
};

export default localStorageMiddleware;
