import {Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import colors from '../../theme/colors';
import Comment from '../Comment';
import {useState} from 'react';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import {Ipost} from '../../types/models';
import DoublePressable from '../DoublePressable';

interface IFeedPost {
  post: Ipost;
}

const FeedPost = ({post}: IFeedPost) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const toggleDescriptionExpanded = () => {
    setIsDescriptionExpanded(v => !v);
  };
  const toggleLiked = () => {
    setIsLiked(v => !v);
  };

  return (
    <View style={styles.post}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={{uri: post.user.image}} style={styles.userAvatar} />
        <Text style={styles.userName}>{post.user.username}</Text>
        <Entypo
          name="dots-three-horizontal"
          size={24}
          style={styles.threeDots}
        />
      </View>

      {/* Content */}
      <DoublePressable onDoublePress={toggleLiked}>
        <Image source={{uri: post.image}} style={styles.image} />
      </DoublePressable>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <Pressable onPress={toggleLiked}>
            <AntDesign
              name={isLiked ? 'heart' : 'hearto'}
              size={24}
              style={styles.icon}
              color={!isLiked ? colors.black : colors.accent}
            />
          </Pressable>
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="bookmark"
            size={24}
            style={{marginLeft: 'auto'}}
            color={colors.black}
          />
        </View>
        {/* Likes */}
        <Text style={styles.text}>
          Liked by <Text style={styles.bold}>kkn.jaten2023</Text> and{' '}
          <Text style={styles.bold}>{post.nofLikes} others</Text>
        </Text>
        {/* Post Descriptions */}
        <Text style={styles.text} numberOfLines={isDescriptionExpanded ? 0 : 2}>
          <Text style={styles.bold}>{post.user.username}</Text>{' '}
          <Text onPress={toggleDescriptionExpanded}>{post.description}</Text>
        </Text>
        <Text onPress={toggleDescriptionExpanded}>
          {isDescriptionExpanded ? 'less' : 'more'}
        </Text>
        {/* Comments */}
        <Text>View all {post.nofComments} comments</Text>
        {post.comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}

        {/* Posted date */}
        <Text>{post.createdAt}</Text>
      </View>
    </View>
  );
};

export default FeedPost;
