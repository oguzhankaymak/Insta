import React, { FC, useState, useRef } from 'react';
import { FlatList, View } from 'react-native';
import { useTheme } from '../../../theme/theme';
import { IContent, TypeEnum } from '../Post';

import styles from './styles/PostContent.style';
import FastImage from 'react-native-fast-image';

export interface IPostContent {
  content: IContent[];
}

const PostContent: FC<IPostContent> = ({ content }) => {
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);

  const onViewRef = useRef((viewableItems: any) => {
    setActiveIndex(viewableItems?.viewableItems[0]?.index);
  });

  if (content.length === 1) {
    return content[0].type === TypeEnum.image ? (
      <FastImage source={{ uri: content[0].source }} style={styles.postImage} />
    ) : (
      <FastImage source={{ uri: content[0].source }} style={styles.postImage} />
    );
  }
  return (
    <>
      <FlatList
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        horizontal
        data={content}
        disableIntervalMomentum={true}
        onViewableItemsChanged={onViewRef.current}
        renderItem={({ item }) => (
          <FastImage source={{ uri: item.source }} style={styles.postImage} />
        )}
      />
      <View style={styles.scrollBar}>
        {content.map((item: any, index: number) => (
          <View
            style={[
              styles.round,
              {
                backgroundColor:
                  activeIndex === index ? theme.primary : theme.tertiary,
              },
            ]}
            key={index}
          />
        ))}
      </View>
    </>
  );
};

export default PostContent;
