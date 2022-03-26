import { SessionActions } from './constants';
import { ISessionAction, ISessionData } from './types';

const sessionReducers = (state: ISessionData, action: ISessionAction) => {
  switch (action.type) {
    case SessionActions.LOGIN: {
      return {
        ...state,
        isLoggedIn: true,
      };
    }
    case SessionActions.LOGOUT: {
      return {
        ...state,
        isLoggedIn: false,
      };
    }
    case SessionActions.SHOW_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SessionActions.HIDE_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    default:
      return state;
  }
};

export default sessionReducers;
