import {View, Text, StyleSheet, Pressable} from 'react-native';
import React, {useState} from 'react';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../theme/colors';

interface IVideoPlayer {
  uri: string;
  paused: boolean;
}

const VideoPlayer = ({uri, paused}: IVideoPlayer) => {
  const [isMuted, setMuted] = useState(false);
  const toggleMuted = () => {
    setMuted(v => !v);
  };
  return (
    <View>
      <Video
        source={{uri}}
        style={styles.video}
        resizeMode="contain"
        repeat
        muted={isMuted}
        paused={paused}
      />
      <Pressable onPress={toggleMuted} style={styles.button}>
        <Ionicons
          name={isMuted ? 'volume-mute' : 'volume-medium'}
          size={14}
          color={'white'}
        />
      </Pressable>
    </View>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  video: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: colors.black,
  },
  button: {
    backgroundColor: colors.grey,
    padding: 5,
    position: 'absolute',
    bottom: 10,
    right: 10,
    borderRadius: 25,
  },
});
