/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Button from '../../../components/button/Button';
import { useTheme } from '../../../theme/theme';

import styles from './styles/LoginScreen.style';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSessionContext } from '../../../context/SessionContext';
import { Facebook } from '../../../components/icons';

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
          <Text style={theme.textStyles.loginTitle}>Insta</Text>
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
                placeholder="Password"
                secureTextEntry={true}
                autoComplete="password"
                value={password}
                onChangeText={setPassword}
              />
            </View>
          </View>
          <View style={styles.forgotText}>
            <TouchableOpacity>
              <Text style={theme.textStyles.forgotText}>Forgot password?</Text>
            </TouchableOpacity>
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
          <View style={styles.braceView}>
            <View style={[styles.line, { backgroundColor: theme.tertiary }]} />
            <Text
              style={[{ paddingHorizontal: 20 }, theme.textStyles.braceText]}>
              OR
            </Text>
            <View style={[styles.line, { backgroundColor: theme.tertiary }]} />
          </View>
          <View style={styles.facebookButtonView}>
            <TouchableOpacity style={styles.facebookButton}>
              <Facebook
                width={styles.facebookIcon.width}
                height={styles.facebookIcon.height}
              />
              <Text
                style={[
                  styles.facebookText,
                  theme.textStyles.alternativeLoginText,
                ]}>
                Log in with Facebook
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
