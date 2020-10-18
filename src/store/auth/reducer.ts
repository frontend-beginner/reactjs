import { ACCESS_TOKEN, REMOVE_TOKEN } from '../actionConstants';

export interface AuthState {
  accessToken: any;
}

const authState: AuthState = {
  accessToken: null,
};

const reducer = (state = authState, action: any): AuthState => {
  switch (action.type) {
    case ACCESS_TOKEN:
      return {
        accessToken: action.payload.accessToken,
      };
    case REMOVE_TOKEN:
      return {
        accessToken: null,
      };
    default:
      return state;
  }
};

export default reducer;
