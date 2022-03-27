import React, { FC } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useTheme } from '../../../theme/theme';
import { Bookmark, Heart, MessageCircle, Send } from '../../icons';

import styles from './styles/PostActions.style';

const PostActions: FC = () => {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <TouchableOpacity style={styles.button}>
          <Heart
            width={styles.icon.width}
            height={styles.icon.height}
            color={theme.dark}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <MessageCircle
            width={styles.icon.width}
            height={styles.icon.height}
            color={theme.dark}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Send
            width={styles.icon.width}
            height={styles.icon.height}
            color={theme.dark}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Bookmark
          width={styles.icon.width}
          height={styles.icon.height}
          color={theme.dark}
        />
      </TouchableOpacity>
    </View>
  );
};

export default PostActions;
