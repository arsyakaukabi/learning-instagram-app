import {StyleSheet, View} from 'react-native';
import HomeScreen from './src/screens/HomeScreens/HomeScreens';
import CommentsScreen from './src/screens/CommentsScreen/CommentsScreen';

const App = () => {
  return (
    <View style={styles.app}>
      <HomeScreen />
      {/* <CommentsScreen /> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  app: {flex: 1},
});
