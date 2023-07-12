import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import user from '../../assets/Data/user.json';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import {useForm, Controller, RegisterOptions} from 'react-hook-form';
import {IUser} from '../../types/models';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

interface ICustomInput {
  labelName: string;
  multiline?: boolean;
  control: any;
  name: string;
  rules?: Omit<
    RegisterOptions,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
}
type IEditableUser = Pick<IUser, 'name' | 'username' | 'webstie' | 'bio'>;

const CustomInput = ({
  labelName,
  multiline = false,
  control,
  name,
  rules,
}: ICustomInput) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{labelName}</Text>
      <Controller
        control={control}
        rules={rules}
        render={({field: {onChange, value, onBlur}, fieldState: {error}}) => (
          <View style={{flex: 1}}>
            <TextInput
              style={[
                styles.input,
                {borderColor: error ? colors.error : colors.border},
              ]}
              placeholder={labelName}
              multiline={multiline}
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
            />
            {error && <Text style={{color: 'red'}}>{error.message}</Text>}
          </View>
        )}
        name={name}
        defaultValue=""
      />
    </View>
  );
};

const EditProfileScreen = () => {
  const urlRegex =
    /^(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&:/~+#]*[\w\-@?^=%&/~+#])?$/;

  const onSubmit = (data: IEditableUser) => {
    console.warn(data);
  };
  const {control, handleSubmit} = useForm<IEditableUser>();

  const [selectedPhoto, setSelectedPhoto] = useState('');

  const onChangePhoto = () => {
    launchImageLibrary(
      {mediaType: 'photo'},
      ({didCancel, errorCode, errorMessage, assets}) => {
        if (!didCancel && !errorCode) {
          setSelectedPhoto(assets[0]);
        }
      },
    );
  };

  return (
    <View style={styles.page}>
      <Image
        source={{uri: selectedPhoto?.uri || user.image}}
        style={styles.avatar}
      />
      <Text onPress={onChangePhoto} style={styles.textButton}>
        Change Profile Photo
      </Text>
      <CustomInput
        labelName="Name"
        name="name"
        control={control}
        rules={{required: 'Name is required'}}
      />
      <CustomInput
        labelName="Username"
        name="username"
        control={control}
        rules={{required: 'Username is required'}}
      />
      <CustomInput
        labelName="Website"
        name="website"
        control={control}
        rules={{
          required: 'Username is required',
          pattern: {
            value: urlRegex,
            message: 'Invalid URL',
          },
        }}
      />
      <CustomInput
        labelName="Bio"
        name="bio"
        control={control}
        multiline={true}
        rules={{
          required: 'Username is required',
          maxLength: {
            value: 200,
            message: 'Bio should be less than 200 characters',
          },
        }}
      />

      <Text onPress={handleSubmit(onSubmit)} style={styles.textButton}>
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
    borderBottomWidth: 1,
  },
});
