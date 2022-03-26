import React, { FC } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './login/LoginScreen';

const AuthStack = createNativeStackNavigator();

const AuthNavigation: FC = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
