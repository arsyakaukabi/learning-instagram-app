import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';
import user from '../../assets/Data/user.json';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

interface ICustomInput {
  labelName: string;
  multiline?: boolean;
}
const CustomInput = ({labelName, multiline = false}: ICustomInput) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{labelName}</Text>
      <TextInput
        style={styles.input}
        placeholder={labelName}
        multiline={multiline}
      />
    </View>
  );
};

const EditProfileScreen = () => {
  const onSubmit = () => {
    console.warn('Loading..');
  };
  return (
    <View style={styles.page}>
      <Image source={{uri: user.image}} style={styles.avatar} />
      <Text style={styles.textButton}>Change Profile Photo</Text>
      <CustomInput labelName="Name" />
      <CustomInput labelName="Username" />
      <CustomInput labelName="Website" />
      <CustomInput labelName="Bio" multiline={true} />

      <Text onPress={onSubmit} style={styles.textButton}>
        Submit
      </Text>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 100,
  },
  textButton: {
    color: colors.primary,
    fontWeight: fonts.weight.semi,
    margin: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    width: 75,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
});
