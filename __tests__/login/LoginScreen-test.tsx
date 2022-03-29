import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';

import LoginScreen from '../../app/containers/auth/login/LoginScreen';
import { SessionProvider } from '../../app/context/SessionContext';

jest.mock('react-native-keyboard-aware-scroll-view', () => {
  const KeyboardAwareScrollView = ({ children }: any) => children;
  return { KeyboardAwareScrollView };
});

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('react-native-keychain', () => {
  return {
    setGenericPassword: jest.fn().mockResolvedValue({}),
    getGenericPassword: jest.fn().mockResolvedValue({}),
    resetGenericPassword: jest.fn().mockResolvedValue(true),
  };
});

test('The button should be disabled if any input is empty', () => {
  const { getByText, toJSON, getByPlaceholderText } = render(
    <SessionProvider>
      <LoginScreen />
    </SessionProvider>,
  );

  const button = getByText('Login');
  expect(button).toBeDisabled();

  const usernameInput = getByPlaceholderText('Phone, username or e-mail');
  fireEvent.changeText(usernameInput, 'oguzhankaymakk');

  expect(button).toBeDisabled();
  expect(toJSON()).toMatchSnapshot();
});

test('The button should be clickable if username and password inputs is not empty', () => {
  const { getByText, toJSON, getByPlaceholderText } = render(
    <SessionProvider>
      <LoginScreen />
    </SessionProvider>,
  );

  const button = getByText('Login');

  const usernameInput = getByPlaceholderText('Phone, username or e-mail');
  fireEvent.changeText(usernameInput, 'oguzhankaymakk');

  const passwordInput = getByPlaceholderText('Password');
  fireEvent.changeText(passwordInput, '123');

  expect(button).not.toBeDisabled();
  expect(toJSON()).toMatchSnapshot();
});
