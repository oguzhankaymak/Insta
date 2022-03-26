import { SessionActions } from './constants';

export interface ISessionAction {
  type: SessionActions;
}

export interface ISessionData {
  isLoggedIn: boolean;
  isLoading: boolean;
}

export interface ISessionContext {
  sessionData: ISessionData;
  login: (username: string, password: string) => void;
  logout: () => void;
}
