import React from 'react';
import { ColorValue, StyleSheet, TextStyle } from 'react-native';
import colors from './colors';

export interface ITheme {
  primary: ColorValue;
  secondary: ColorValue;
  background: ColorValue;
  dark: ColorValue;
  textStyles: { bigTitle: TextStyle };
}

const texts = StyleSheet.create({
  bigTitle: {
    fontSize: 19,
    color: colors.main.black,
  } as TextStyle,
});

const defaultTheme: ITheme = {
  primary: colors.blue.primary,
  secondary: colors.gray.primary,
  background: colors.main.white,
  dark: colors.main.black,
  textStyles: texts,
};

const ThemeContext = React.createContext(defaultTheme);

export function useTheme() {
  const theme = React.useContext(ThemeContext);
  return theme;
}
