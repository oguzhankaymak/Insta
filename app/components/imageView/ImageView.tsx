import React, { FC, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles/ImageView.style';

import FastImage from 'react-native-fast-image';
import { useTheme } from '../../theme/theme';

interface IImageView {
  source: string;
  isGridView?: boolean;
  isProfile?: boolean;
}

const ImageView: FC<IImageView> = ({
  source,
  isGridView = false,
  isProfile = false,
}) => {
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={styles.container}>
      <FastImage
        style={
          isProfile
            ? styles.profileImage
            : isGridView
            ? styles.gridImage
            : styles.image
        }
        source={{ uri: source }}
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => setIsLoading(false)}
      />
      {isLoading && (
        <View style={[styles.loading, { backgroundColor: theme.background }]}>
          <ActivityIndicator size="small" color={theme.dark} />
        </View>
      )}
    </View>
  );
};

export default ImageView;
