import {
  GET_USER,
  GET_USER_FAILURE,
  GET_USER_SUCCESS,
  MY_PROFILE,
  MY_PROFILE_FAILURE,
  MY_PROFILE_SUCCESS,
} from '../actionConstants';
import { MyProfileModel, UserModel } from './models';

export interface UserState {
  list: UserModel[];
  item: UserModel | MyProfileModel |null;
  loading: boolean;
  error: any;
  isError: boolean;
}

const userState: UserState = {
  list: [],
  item: null,
  loading: false,
  error: null,
  isError: false,
};

const reducer = (state = userState, action: any): UserState => {
  switch (action.type) {
    case MY_PROFILE:
      return {
        ...state,
        loading: true,
      };

    case GET_USER:
      return {
        ...state,
        loading: true,
      };

    case MY_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        isError: true,
        error: action.payload.error,
      };

    case MY_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        isError: false,
        error: null,
        item: action.payload.data,
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isError: false,
        error: null,
        item: action.payload.data,
      };

    case GET_USER_FAILURE:
      return {
        ...state,
        loading: false,
        isError: true,
        error: action.payload.error,
      };

    default:
      return state;
  }
};

export default reducer;
