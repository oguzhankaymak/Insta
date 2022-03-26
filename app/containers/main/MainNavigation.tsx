import React, { FC } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './home/HomeScreen';

const MainStack = createNativeStackNavigator();

const MainNavigation: FC = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="HomeScreen" component={HomeScreen} />
    </MainStack.Navigator>
  );
};

export default MainNavigation;
