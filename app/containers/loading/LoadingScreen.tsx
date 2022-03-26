import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

import { useSessionContext } from '../../context/SessionContext';

const LoadingScreen = () => {
  const { checkLoggedIn } = useSessionContext();

  useEffect(() => {
    checkLoggedIn();
  }, []);

  return (
    <View>
      <Text>Loadingggg...</Text>
    </View>
  );
};

export default LoadingScreen;
