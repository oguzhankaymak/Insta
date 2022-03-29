import React, { FC, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles/VideoPlayer.style';

import Video from 'react-native-video';
import { useTheme } from '../../theme/theme';

interface IVideoPlayer {
  source: string;
  isGridView?: boolean;
}

const VideoPlayer: FC<IVideoPlayer> = ({ source, isGridView = false }) => {
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(false);

  const onLoadStart = () => {
    setIsLoading(true);
  };

  const onLoad = () => {
    setIsLoading(false);
  };
  return (
    <View style={[styles.container, { backgroundColor: theme.dark }]}>
      <Video
        source={{ uri: source }}
        style={isGridView ? styles.gridVieo : styles.video}
        controls={false}
        volume={0}
        repeat
        onLoadStart={onLoadStart}
        onLoad={onLoad}
      />
      {isLoading && (
        <ActivityIndicator
          size="small"
          color={theme.white}
          style={styles.activityIndicator}
        />
      )}
    </View>
  );
};

export default VideoPlayer;
