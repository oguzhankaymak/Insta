import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../../../theme/theme';
import { MoreHorizontal } from '../../icons';

import styles from './styles/PostHeader.style';
import ImageView from '../../imageView/ImageView';

interface IPostHeader {
  profileImg: string;
  username: string;
  place?: string;
}

const PostHeader: FC<IPostHeader> = ({ profileImg, username, place }) => {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <ImageView source={profileImg} isProfile />
        <View>
          <Text style={[styles.username, theme.textStyles.usernameText]}>
            {username}
          </Text>
          {place && (
            <Text style={[styles.placeName, theme.textStyles.placeNameText]}>
              {place}
            </Text>
          )}
        </View>
      </View>
      <TouchableOpacity>
        <MoreHorizontal
          width={styles.iconMore.width}
          height={styles.iconMore.height}
          color={theme.dark}
        />
      </TouchableOpacity>
    </View>
  );
};

export default PostHeader;
