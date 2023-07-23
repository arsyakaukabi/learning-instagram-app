import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import user from '../../assets/Data/user.json';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import Navigation from '../../navigation';

const ProfileHeader = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.root}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Image source={{uri: user.image}} style={styles.userAvatar} />
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text>Posts</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text>Followers</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text>Following</Text>
        </View>
      </View>
      {/* Username & Bio */}
      <View>
        <Text style={styles.name}>{user.name}</Text>
        <Text>{user.bio}</Text>
      </View>
      {/* Button */}
      <View style={{flexDirection: 'row'}}>
        <Button text="Edit Profile" onPress={()=> navigation.navigate('Edit Profile')} />
        <Button text="Another" onPress={() => console.warn('loading...')} />
      </View>
    </View>
  );
};

export default ProfileHeader;
