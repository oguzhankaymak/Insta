import React, { useEffect } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';

import { useSessionContext } from '../../context/SessionContext';
import { useTheme } from '../../theme/theme';
import styles from './styles/LoadingScreen.style';

const LoadingScreen = () => {
  const theme = useTheme();
  const { checkLoggedIn } = useSessionContext();

  useEffect(() => {
    checkLoggedIn();
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <ActivityIndicator size={'large'} color={theme.dark} />
      <Text style={[styles.text, theme.textStyles.bigTitle]}>Loading...</Text>
    </View>
  );
};

export default LoadingScreen;
