import React, { useEffect, useState } from 'react';
import { View, FlatList, TextInput } from 'react-native';
import { getPosts } from '../../../actions/HomeAction';
import { SUCCESS } from '../../../actions/Status';
import Post, { IPost } from '../../../components/post/Post';
import { useTheme } from '../../../theme/theme';

import styles from './styles/HomeScreen.style';

const HomeScreen = () => {
  const theme = useTheme();
  const [searchText, setSearchText] = useState('');
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
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.searchView}>
        <View
          style={[
            styles.inputView,
            {
              backgroundColor: theme.secondary,
              borderColor: theme.tertiary,
            },
          ]}>
          <TextInput
            style={[theme.textStyles.largeInput]}
            placeholder="Search"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
      </View>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post postData={item} />}
      />
    </View>
  );
};

export default HomeScreen;
