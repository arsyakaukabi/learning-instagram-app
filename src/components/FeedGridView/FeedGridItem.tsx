import {View, Image, Dimensions} from 'react-native';
import React from 'react';
import {Ipost} from '../../types/models';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../theme/colors';

const FeedGridItem = ({post}: {post: Ipost}) => {
  const width = Dimensions.get('window').width / 3;
  return (
    <View style={{flex: 1, aspectRatio: 1, padding: 1, maxWidth: width}}>
      <Image source={{uri: post.image || post.images[0]}} style={{flex: 1}} />
      {post.images && (
        <MaterialIcons
          name="collections"
          size={16}
          color={colors.white}
          style={{position: 'absolute', top: 5, right: 5}}
        />
      )}
    </View>
  );
};

export default FeedGridItem;
