import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '../../../theme/theme';

import styles from './styles/PostLikes.style';

interface IPostLikes {
  count: number;
}

const PostLikes: FC<IPostLikes> = ({ count }) => {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <Text style={theme.textStyles.likeCountText}>{count} beğenme</Text>
    </View>
  );
};

export default PostLikes;
