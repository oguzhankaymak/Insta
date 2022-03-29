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
    usernameText: TextStyle;
    placeNameText: TextStyle;
    commentText: TextStyle;
    usernameBoldText: TextStyle;
    dateText: TextStyle;
    likeCountText: TextStyle;
    logout: TextStyle;
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

  usernameText: {
    fontSize: isTablet ? 20 : 10,
    color: colors.main.black,
  },

  placeNameText: {
    fontSize: isTablet ? 20 : 10,
    color: colors.main.black,
  },

  commentText: {
    fontSize: isTablet ? 15 : 11,
    color: colors.gray.tertiary,
  },

  usernameBoldText: {
    fontSize: isTablet ? 20 : 10,
    color: colors.main.black,
    fontWeight: 'bold',
  },

  dateText: {
    fontSize: isTablet ? 14 : 10,
    color: colors.gray.tertiary,
  },

  likeCountText: {
    fontSize: isTablet ? 22 : 12,
    color: colors.main.black,
    fontWeight: '600',
  },

  logout: {
    fontSize: isTablet ? 14 : 10,
    color: colors.red.primary,
    fontWeight: 'bold',
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
