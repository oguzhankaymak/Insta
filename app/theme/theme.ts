import React from 'react';
import { ColorValue, StyleSheet, TextStyle } from 'react-native';
import colors from './colors';

export interface ITheme {
  primary: ColorValue;
  secondary: ColorValue;
  tertiary: ColorValue;
  background: ColorValue;
  dark: ColorValue;
  white: ColorValue;
  textStyles: { loginTitle: TextStyle; bigTitle: TextStyle };
}

const texts = StyleSheet.create({
  loginTitle: {
    fontSize: 25,
    color: colors.main.black,
    fontWeight: 'bold',
  } as TextStyle,

  bigTitle: {
    fontSize: 19,
    color: colors.main.black,
  } as TextStyle,
});

const defaultTheme: ITheme = {
  primary: colors.blue.primary,
  secondary: colors.gray.secondary,
  tertiary: colors.gray.primary,
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
