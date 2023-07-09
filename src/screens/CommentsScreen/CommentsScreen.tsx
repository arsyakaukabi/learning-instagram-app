import {View, Text, FlatList} from 'react-native';
import React from 'react';
import comments from '../../assets/Data/comments.json';
import Comment from '../../components/Comment';
import InputComment from './InputComment';

const CommentsScreen = () => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={comments}
        renderItem={({item}) => <Comment comment={item} includeDetails />}
        style={{padding: 10}}
      />
      <InputComment />
    </View>
  );
};

export default CommentsScreen;
