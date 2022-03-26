/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import Button from '../../../components/button/Button';
import { useTheme } from '../../../theme/theme';

import styles from './styles/LoginScreen.style';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSessionContext } from '../../../context/SessionContext';

const LoginScreen = () => {
  const theme = useTheme();
  const { login } = useSessionContext();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAwareScrollView
      style={[styles.scrollView, { backgroundColor: theme.background }]}
      enableOnAndroid={true}
      bounces={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={theme.textStyles.loginTitle}>InstaClone</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.formItem}>
            <View
              style={[
                styles.inputView,
                {
                  backgroundColor: theme.secondary,
                  borderColor: theme.tertiary,
                },
              ]}>
              <TextInput
                style={[styles.input, theme.textStyles.largeInput]}
                placeholder="Phone, username or e-mail"
                autoCapitalize="none"
                value={username}
                onChangeText={setUsername}
              />
            </View>
          </View>
          <View style={styles.formItem}>
            <View
              style={[
                styles.inputView,
                {
                  backgroundColor: theme.secondary,
                  borderColor: theme.tertiary,
                },
              ]}>
              <TextInput
                style={[styles.input, theme.textStyles.largeInput]}
                placeholder="Enter password"
                secureTextEntry={true}
                autoComplete="password"
                value={password}
                onChangeText={setPassword}
              />
            </View>
          </View>
          <View
            style={[
              styles.footer,
              { backgroundColor: theme.primary },
              (username.length === 0 || password.length === 0) && {
                opacity: 0.4,
              },
            ]}>
            <Button
              text={'Login'}
              onPress={() => login(username, password)}
              disabled={username.length === 0 || password.length === 0}
            />
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
