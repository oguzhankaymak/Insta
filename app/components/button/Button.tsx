import React, { FC } from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../../theme/theme';

import styles from './styles/Button.style';

type ButtonProps = {
  text: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
};

const Button: FC<ButtonProps> = ({
  text,
  onPress,
  loading = false,
  disabled = false,
}) => {
  const theme = useTheme();
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      disabled={loading || disabled}>
      {loading ? (
        <ActivityIndicator size={'small'} color={theme.white} />
      ) : (
        <Text style={theme.textStyles.buttonText}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
