import React, { FC } from 'react';
import { AppRegistry, SafeAreaView } from 'react-native';
import { name as appName } from './app.json';
import Navigation from './app/containers/Navigation';
import { SessionProvider } from './app/context/SessionContext';

const Root: FC = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
    <SessionProvider>
      <Navigation />
    </SessionProvider>
  </SafeAreaView>
);

AppRegistry.registerComponent(appName, () => Root);
