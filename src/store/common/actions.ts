import { ErrorResponseModel } from 'src/models/error';
import { ERROR, MENU_COLLAPSED } from '../actionConstants';

export interface ErrorAction {
  type: typeof ERROR;
  payload: ErrorResponseModel;
}

export interface MenuCollapsedAction {
  type: typeof MENU_COLLAPSED;
  payload: boolean;
}

const errorAction = (error: ErrorResponseModel): ErrorAction => ({
  type: ERROR,
  payload: error,
});

const menuCollapsedAction = (trigger: boolean) => ({
  type: MENU_COLLAPSED,
  payload: trigger,
});

export default { errorAction, menuCollapsedAction };
