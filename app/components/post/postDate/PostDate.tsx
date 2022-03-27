import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '../../../theme/theme';

import styles from './styles/PostDate.style';

interface IPostDate {
  date: string;
}

const PostDate: FC<IPostDate> = ({ date }) => {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <Text style={theme.textStyles.dateText}>{date}</Text>
    </View>
  );
};
export default PostDate;
