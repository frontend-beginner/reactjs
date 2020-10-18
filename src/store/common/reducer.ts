import { ErrorResponseModel } from 'src/models/error';
import { ERROR, MENU_COLLAPSED } from '../actionConstants';

export interface CommonState {
  menuCollapsed: boolean;
  menuItemKey?: string | null;
  error: ErrorResponseModel | null;
}

const commonState: CommonState = {
  menuCollapsed: true,
  menuItemKey: null,
  error: null,
};

const reducer = (state = commonState, action: any): CommonState => {
  switch (action.type) {
    case ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case MENU_COLLAPSED:
      return {
        ...state,
        menuCollapsed: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
