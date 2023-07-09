import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React, {useState} from 'react';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import {IComment} from '../../types/models';

interface IFeedComment {
  comment: IComment;
  includeDetails: boolean;
}
const Comment = ({comment, includeDetails = false}: IFeedComment) => {
  const [isLiked, setIsLiked] = useState(false);
  const toggleLiked = () => {
    setIsLiked(v => !v);
  };
  return (
    <View style={styles.comment}>
      {includeDetails && (
        <Image source={{uri: comment.user.image}} style={styles.avatar} />
      )}

      <View style={styles.middleColumn}>
        <Text style={styles.commentText}>
          <Text style={styles.bold}>{comment.user.username}</Text>{' '}
          {comment.comment}
        </Text>
        {includeDetails && (
          <View style={styles.footer}>
            <Text style={styles.footerText}>2d</Text>
            <Text style={styles.footerText}>21 likes</Text>
            <Text style={styles.footerText}>Reply</Text>
          </View>
        )}
      </View>

      <View style={styles.icon}>
        <Pressable onPress={toggleLiked}>
          <AntDesign
            name={isLiked ? 'heart' : 'hearto'}
            size={18}
            color={!isLiked ? colors.black : colors.accent}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  comment: {flexDirection: 'row', alignItems: 'center'},
  commentText: {
    color: colors.black,
    fontSize: fonts.size.default,
    lineHeight: 20,
  },
  avatar: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginTop: 5,
    marginRight: 5,
  },
  footer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  footerText: {
    marginHorizontal: 5,
  },
  middleColumn: {flex: 1},
  icon: {marginRight: 5, alignSelf: 'flex-start', marginTop: 5},
  bold: {fontWeight: fonts.weight.bold},
});
