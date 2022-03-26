import React from 'react';
import { ColorValue, StyleSheet, TextStyle } from 'react-native';
import { isTablet } from '../utils/Metrics';
import colors from './colors';

export interface ITheme {
  primary: ColorValue;
  secondary: ColorValue;
  tertiary: ColorValue;
  background: ColorValue;
  dark: ColorValue;
  white: ColorValue;
  textStyles: {
    loginTitle: TextStyle;
    bigTitle: TextStyle;
    largeInput: TextStyle;
    buttonText: TextStyle;
  };
}

const texts = StyleSheet.create({
  loginTitle: {
    fontSize: isTablet ? 35 : 25,
    color: colors.main.black,
    fontWeight: 'bold',
  } as TextStyle,

  bigTitle: {
    fontSize: 19,
    color: colors.main.black,
  } as TextStyle,

  largeInput: {
    fontSize: isTablet ? 24 : 13,
    color: colors.main.black,
  } as TextStyle,

  buttonText: {
    fontSize: isTablet ? 24 : 13,
    color: colors.main.white,
  },
});

const defaultTheme: ITheme = {
  primary: colors.blue.primary,
  secondary: colors.gray.primary,
  tertiary: colors.gray.secondary,
  background: colors.main.white,
  dark: colors.main.black,
  white: colors.main.white,
  textStyles: texts,
};

const ThemeContext = React.createContext(defaultTheme);

export function useTheme() {
  const theme = React.useContext(ThemeContext);
  return theme;
}
