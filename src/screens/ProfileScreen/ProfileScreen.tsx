import React from 'react';
import user from '../../assets/Data/user.json';
import ProfileHeader from './ProfileHeader';
import FeedGridView from '../../components/FeedGridView';
import { useRoute,useNavigation} from '@react-navigation/native';

const ProfileScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {userId}=route.params
  return <FeedGridView data={user.posts} ListHeaderComponent={ProfileHeader} />;
};

export default ProfileScreen;
