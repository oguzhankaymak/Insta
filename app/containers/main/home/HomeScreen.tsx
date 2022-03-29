import React, { useEffect, useState } from 'react';
import { View, FlatList, TextInput, ActivityIndicator } from 'react-native';
import { getPosts } from '../../../actions/HomeAction';
import { ResultEnum } from '../../../actions/Status';
import GridView from '../../../components/gridView/GridView';
import Post, { IContent, IPost } from '../../../components/post/Post';
import { useTheme } from '../../../theme/theme';

import styles from './styles/HomeScreen.style';

const HomeScreen = () => {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<IPost[]>();

  const [paginationPosts, setPaginationPosts] = useState<IPost[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMoreLoading, setIsMoreLoading] = useState(false);

  const [searchText, setSearchText] = useState('');
  const [searchData, setSearchData] = useState<IContent[]>();

  const totalPage = 2;
  const pageSize = 3;

  useEffect(() => {
    getData();
  }, [currentPage]);

  useEffect(() => {
    if (searchText.length > 1) {
      filterData();
    }
  }, [posts, searchText]);

  const filterData = () => {
    if (posts) {
      let myData: IContent[] = [];
      posts.forEach(element => {
        if (element.username.toLowerCase().includes(searchText.toLowerCase())) {
          myData = [...myData, ...element.contents];
        }
      });
      setSearchData(myData);
    }
  };

  const getData = async () => {
    if (currentPage === 1) {
      setLoading(true);
      const response = await getPosts();
      if (response.result === ResultEnum.SUCCESS && response.data) {
        setPosts(response.data);
        setPaginationPosts(response.data.slice(0, pageSize));
        setLoading(false);
      }
    } else {
      setIsMoreLoading(false);
      const newData = posts?.slice(
        paginationPosts?.length,
        paginationPosts?.length + pageSize,
      );
      newData && setPaginationPosts([...paginationPosts, ...newData]);
    }
  };

  const loadMoreData = () => {
    if (currentPage < totalPage) {
      setIsMoreLoading(true);
      setCurrentPage(currentPage + 1);
    }
  };

  const renderFooter = () => {
    if (isMoreLoading) {
      return (
        <View style={styles.footerLoading}>
          <ActivityIndicator size="small" color="#000" />
        </View>
      );
    }
    return <View />;
  };

  if (loading) {
    return (
      <View style={[styles.loading, { backgroundColor: theme.background }]}>
        <ActivityIndicator size="large" color={theme.dark} />
      </View>
    );
  }

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
      {searchText?.length > 1 ? (
        <FlatList
          key="search"
          keyExtractor={(item, index) => String(index)}
          numColumns={2}
          data={searchData}
          renderItem={({ item }) => <GridView data={item} />}
        />
      ) : (
        <FlatList
          key="posts"
          keyExtractor={(item, index) => String(index)}
          data={paginationPosts}
          onEndReachedThreshold={0.1}
          onEndReached={loadMoreData}
          ListFooterComponent={renderFooter}
          renderItem={({ item }) => <Post postData={item} />}
        />
      )}
    </View>
  );
};

export default HomeScreen;
