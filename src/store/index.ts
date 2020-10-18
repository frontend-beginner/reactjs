import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  connectRouter,
  routerMiddleware,
  RouterState,
} from 'connected-react-router';
import { createBrowserHistory, History } from 'history';

// Reducer
import userReducer, { UserState } from './user/reducer';
import authReducer, { AuthState } from './auth/reducer';
import spotifyReducer, { SpotifyState } from './spotify/reducer';
import commonReducer, { CommonState } from './common/reducer';

// Middleware
import localStorageMiddleware from './@middleware/localStorage';
import userMiddleware from './@middleware/user';

export const history = createBrowserHistory();

export interface RootState {
  router: RouterState;
  auth: AuthState;
  user: UserState;
  spotify: SpotifyState;
  common: CommonState;
}

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    user: userReducer,
    spotify: spotifyReducer,
    common: commonReducer,
  });

const configureStore = (preloadedState?: any) => {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history),
        localStorageMiddleware,
        userMiddleware,
        thunk
      )
    )
  );

  return store;
};

export default configureStore;
