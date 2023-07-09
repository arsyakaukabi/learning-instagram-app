import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const InputComment = () => {
  const [newComment, setNewComment] = useState('');

  const onPost = () => {
    console.warn('Posting the comment:', newComment);
    setNewComment('');
  };
  return (
    <View style={styles.root}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg',
        }}
        style={styles.icon}
      />
      <TextInput
        value={newComment}
        onChangeText={setNewComment}
        placeholder="Write your comment ..."
        style={styles.input}
        multiline
      />
      <Text onPress={onPost} style={styles.button}>
        POST
      </Text>
    </View>
  );
};

export default InputComment;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignSelf: 'center',
    padding: 5,
    borderTopWidth: 1,
    borderColor: colors.lightgrey,
  },
  icon: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 20,
    alignSelf: 'center',
  },
  input: {
    flex: 1,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 5,
    alignSelf: 'center',
    paddingHorizontal: 10,
    marginLeft: 5,
    paddingRight: 50,
  },
  button: {
    position: 'absolute',
    alignSelf: 'center',
    right: 20,
    fontSize: fonts.size.s,
    fontWeight: fonts.weight.full,
    color: colors.primary,
  },
});
