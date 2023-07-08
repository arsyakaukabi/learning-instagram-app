import {View, Text, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import {IComment} from '../../types/models';

interface IFeedComment {
  comment: IComment;
}
const Comment = ({comment}: IFeedComment) => {
  return (
    <View style={styles.comment}>
      <Text style={styles.commentText}>
        <Text style={styles.bold}>{comment.user.username}</Text>{' '}
        {comment.comment}
      </Text>
      <AntDesign
        name="hearto"
        style={styles.icon}
        color={colors.black}
        size={18}
      />
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  icon: {marginHorizontal: 5},

  bold: {fontWeight: fonts.weight.bold},

  comment: {flexDirection: 'row', alignItems: 'center'},

  commentText: {
    color: colors.black,
    flex: 1,
    fontSize: fonts.size.default,
    lineHeight: 20,
  },
});
