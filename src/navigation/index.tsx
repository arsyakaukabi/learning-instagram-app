import {StyleSheet, Text, View,Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import BottomTabNavigator from './BottomTabNavigator';
import CommentsScreen from '../screens/CommentsScreen/CommentsScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: true}}>

        <Stack.Screen 
          name="Home" 
          component={BottomTabNavigator} 
          options={{headerShown:false}}/>
        <Stack.Screen
          name='Comments'
          component={CommentsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const header = () => {
  return (
      <Image source={require('../assets/image/logo-fix1.png')} style={styles.feedHeader}/>
  );
};
const styles = StyleSheet.create({
  feedHeader:{
    width:150,
    height:40,
    resizeMode:'contain',
    alignSelf:'center'
  }
});
