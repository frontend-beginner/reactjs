import { Middleware } from 'redux';
import { RootState } from '..';
import { GET_USER, MY_PROFILE } from '../actionConstants';
import userActions from '../user/actions';
import {CommonActions} from '../actions'
import { MyProfileModel, UserModel } from '../user/models';

const userMiddleware: Middleware<RootState> = ({ dispatch, getState }) => (next) => (
  action
) => {
  const {spotify: {s}} = getState();
  console.log(s)
  if (action.type === GET_USER) {
    s.getUser(action.payload.userId)
      .then((res: UserModel) => {
        dispatch(userActions.getUserSuccessAction(res));
      })
      .catch((error: any) => {
        const e = JSON.parse(error.responseText);
        dispatch(CommonActions.errorAction(e.error));
        dispatch(userActions.getUserFailureAction(e.error));
      });
  }

  if (action.type === MY_PROFILE) {
    s.getMe()
      .then((res: MyProfileModel) => {
        dispatch(userActions.getMeSuccessAction(res));
      })
      .catch((error: any) => {
        const e = JSON.parse(error.responseText);
        dispatch(CommonActions.errorAction(e.error));
        dispatch(userActions.getMeFailureAction(e.error));
      });
  }

  next(action);
};

export default userMiddleware;
