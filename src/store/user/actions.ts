import {
  MY_PROFILE,
  GET_USER,
  GET_USER_FAILURE,
  GET_USER_SUCCESS,
  MY_PROFILE_FAILURE,
  MY_PROFILE_SUCCESS,
} from '../actionConstants';
import { UserModel, MyProfileModel } from './models';
import { IFailureAction, ISuccessAction } from '../actions';

export interface IGetMeAction {
  type: typeof MY_PROFILE;
}

export interface IGetUserAction {
  type: typeof GET_USER;
  payload: {
    userId: string;
  }
}

const getMeAction = (): IGetMeAction => ({
  type: MY_PROFILE,
});

const getUserAction = (userId: string): IGetUserAction => ({
  type: GET_USER,
  payload: {
    userId
  }
});

const getUserSuccessAction = (
  user: UserModel
): ISuccessAction<typeof GET_USER_SUCCESS, UserModel> => ({
  type: GET_USER_SUCCESS,
  payload: {
    data: user,
  },
});

const getUserFailureAction = (
  error: any
): IFailureAction<typeof GET_USER_FAILURE> => ({
  type: GET_USER_FAILURE,
  payload: {
    error,
  },
});

const getMeSuccessAction = (
  me: MyProfileModel
): ISuccessAction<typeof MY_PROFILE_SUCCESS, MyProfileModel> => ({
  type: MY_PROFILE_SUCCESS,
  payload: {
    data: me,
  },
});

const getMeFailureAction = (
  error: any
): IFailureAction<typeof MY_PROFILE_FAILURE> => ({
  type: MY_PROFILE_FAILURE,
  payload: {
    error,
  },
});

export default {
  getMeAction,
  getUserAction,
  getUserSuccessAction,
  getUserFailureAction,
  getMeSuccessAction,
  getMeFailureAction,
};
