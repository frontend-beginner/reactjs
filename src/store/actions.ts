import AuthActions from './auth/actions';
import UserActions from './user/actions';
import SpotifyActions from './spotify/actions';
import CommonActions from './common/actions';

interface ILoadingAction {
  type: 'LOADING';
}

export interface ISuccessAction<T = string, M = any> {
  type: T;
  payload: {
    data: M;
  }
}

export interface IFailureAction<T =string, E = any> {
  type: T;
  payload: {
    error: E;
  }
}

const loadingAction = (): ILoadingAction => ({
  type: 'LOADING',
});

export { AuthActions, UserActions, SpotifyActions, CommonActions, loadingAction};
