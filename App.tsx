import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import colors from './src/theme/colors';
import fonts from './src/theme/fonts';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const App = () => {
  return (
    <View style={styles.post}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{uri: 'https://picsum.photos/200'}}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>arsyakaukabi</Text>
        <Entypo
          name="dots-three-horizontal"
          size={24}
          style={styles.threeDots}
        />
      </View>

      {/* Content */}
      <Image source={{uri: 'https://picsum.photos/500'}} style={styles.image} />

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign
            name={'heart'}
            size={24}
            style={styles.icon}
            color={colors.black}
          />
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
          <Text style={styles.bold}>66 others</Text>
        </Text>
        {/* Post Descriptions */}
        <Text style={styles.text}>
          <Text style={styles.bold}>arsyakaukabi</Text> Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Labore enim aspernatur architecto
          laudantium, deleniti omnis delectus culpa aperiam modi minima
          voluptatibus ullam est libero dolorum rerum doloremque nulla beatae
          placeat.
        </Text>

        {/* Comments */}
        <Text>View all 16 comments</Text>
        <View style={styles.comment}>
          <Text style={styles.commentText}>
            <Text style={styles.bold}>kkn.jaten2023</Text> Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Nam, iure.
          </Text>
          <AntDesign
            name="hearto"
            style={styles.icon}
            color={colors.black}
            size={16}
          />
        </View>
        {/* Posted date */}
        <Text>19 December, 2023</Text>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  post: {},

  image: {
    width: '100%',
    aspectRatio: 1,
  },

  header: {flexDirection: 'row', padding: 10, alignItems: 'center'},

  userAvatar: {width: 50, aspectRatio: 1, borderRadius: 25, marginRight: 10},

  userName: {
    fontWeight: fonts.weight.bold,
    color: colors.black,
    fontSize: fonts.size.default,
  },

  threeDots: {marginLeft: 'auto'},

  footer: {padding: 10},

  iconContainer: {flexDirection: 'row', alignItems: 'center', marginBottom: 5},

  icon: {marginHorizontal: 5},

  text: {color: colors.black, fontSize: fonts.size.default, lineHeight: 20},

  bold: {fontWeight: fonts.weight.bold},

  comment: {flexDirection: 'row', alignItems: 'center'},

  commentText: {
    color: colors.black,
    flex: 1,
    fontSize: fonts.size.default,
    lineHeight: 20,
  },
});
