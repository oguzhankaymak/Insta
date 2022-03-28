import React, { FC } from 'react';
import { View } from 'react-native';
import { IContent, TypeEnum } from '../post/Post';
import styles from './styles/GridView.style';

import ImageView from '../imageView/ImageView';
import VideoPlayer from '../videoPlayer/VideoPlayer';

interface IGridView {
  data: IContent;
}

const GridView: FC<IGridView> = ({ data }) => {
  return (
    <View style={styles.container}>
      {data.type === TypeEnum.image ? (
        <ImageView source={data.source} isGridView />
      ) : (
        <VideoPlayer source={data.source} isGridView />
      )}
    </View>
  );
};

export default GridView;
