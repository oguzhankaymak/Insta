import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../../theme/theme';

import styles from './styles/PostDescription.style';

interface IPostDescription {
  username: string;
  description: string;
}

const PostDescription: FC<IPostDescription> = ({ username, description }) => {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <Text style={theme.textStyles.placeNameText}>
        <Text style={theme.textStyles.usernameBoldText}>{username}</Text>
        {' ' + description}
      </Text>
    </View>
  );
};

export default PostDescription;
