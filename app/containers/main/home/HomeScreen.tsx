import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { getPosts } from '../../../actions/HomeAction';
import { SUCCESS } from '../../../actions/Status';
import Post, { IPost } from '../../../components/post/Post';
import { useTheme } from '../../../theme/theme';

import styles from './styles/HomeScreen.style';

const HomeScreen = () => {
  const theme = useTheme();
  const [posts, setPosts] = useState<IPost[]>();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await getPosts();
    if (response.result === SUCCESS) {
      setPosts(response.data);
    }
  };

  return (
    <FlatList
      style={[styles.container, { backgroundColor: theme.background }]}
      data={posts}
      renderItem={({ item }) => <Post postData={item} />}
    />
  );
};

export default HomeScreen;
