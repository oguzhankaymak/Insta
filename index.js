import React, { FC } from 'react';
import { AppRegistry, SafeAreaView } from 'react-native';
import { name as appName } from './app.json';
import Navigation from './app/containers/Navigation';

const Root: FC = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
    <Navigation />
  </SafeAreaView>
);

AppRegistry.registerComponent(appName, () => Root);
