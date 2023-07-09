import {StyleSheet, View} from 'react-native';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import CommentsScreen from './src/screens/CommentsScreen/CommentsScreen';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';

const App = () => {
  return (
    <View style={styles.app}>
      {/* <HomeScreen /> */}
      {/* <CommentsScreen /> */}
      <ProfileScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  app: {flex: 1},
});
