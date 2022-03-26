import React, { FC } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './auth/AuthNavigation';
import MainNavigation from './main/MainNavigation';
import { useSessionContext } from '../context/SessionContext';

const Stack = createNativeStackNavigator();

const Navigation: FC = () => {
  const { sessionData } = useSessionContext();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {sessionData?.isLoggedIn ? (
          <Stack.Screen name="MainNavigator" component={MainNavigation} />
        ) : (
          <Stack.Screen name="AuthNavigator" component={AuthNavigation} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
