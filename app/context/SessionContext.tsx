import React, { createContext, useReducer, useContext, FC } from 'react';
import { SessionActions } from './session/constants';
import { sessionInitialData } from './session/initialState';
import sessionReducers from './session/reducer';
import { ISessionContext } from './session/types';

const sessionContextDefaultValues: ISessionContext = {
  sessionData: { isLoggedIn: false, isLoading: false },
  login: () => {},
  logout: () => {},
};

const SessionContext = createContext<ISessionContext>(
  sessionContextDefaultValues,
);

const SessionProvider: FC = ({ children }) => {
  const [sessionData, sessionDispatch] = useReducer(
    sessionReducers,
    sessionInitialData,
  );

  const login = () => {
    sessionDispatch({ type: SessionActions.LOGIN });
  };

  const logout = () => {
    sessionDispatch({ type: SessionActions.LOGOUT });
  };

  return (
    <SessionContext.Provider
      value={{
        sessionData,
        login,
        logout,
      }}>
      {children}
    </SessionContext.Provider>
  );
};

const useSessionContext = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error('Context is required');
  }
  return context;
};

export { SessionProvider, useSessionContext };
