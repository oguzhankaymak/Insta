import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../../../theme/theme';

import styles from './styles/PostComment.style';

interface IPostComment {
  count: number;
}

const PostComments: FC<IPostComment> = ({ count }) => {
  const theme = useTheme();
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={theme.textStyles.commentText}>
        {count} yorumun tümünü gör
      </Text>
    </TouchableOpacity>
  );
};

export default PostComments;
