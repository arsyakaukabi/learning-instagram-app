import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Feed"
        screenOptions={{headerShown: true}}>
        <Stack.Screen name="Feed" component={HomeScreen} />
        <Stack.Screen
          name="UserProfile"
          component={ProfileScreen}
          options={{headerTitle: 'Profile'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const header = () => {
  return (
    <View>
      <Text>Custom Header</Text>
    </View>
  );
};
const styles = StyleSheet.create({});
