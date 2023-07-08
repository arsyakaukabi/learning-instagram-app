import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from './src/theme/colors';
import font from './src/theme/fonts';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const App = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        style={{
          color: colors.primary,
          fontSize: font.size.xxlg,
          fontWeight: font.weight.bold,
        }}>
        Hello World
        <FontAwesome5 name="check" size={25} />
      </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
