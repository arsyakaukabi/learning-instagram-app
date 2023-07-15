import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {
  Camera,
  CameraPictureOptions,
  CameraType,
  FlashMode,
  CameraRecordingOptions,
  VideoQuality,
} from 'expo-camera';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../theme/colors';

const flashSettings = {
  [FlashMode.off]: {
    icon: 'flash-off',
    nextMode: FlashMode.on,
  },
  [FlashMode.on]: {
    icon: 'flash-on',
    nextMode: FlashMode.auto,
  },
  [FlashMode.auto]: {
    icon: 'flash-auto',
    nextMode: FlashMode.torch,
  },
  [FlashMode.torch]: {
    icon: 'highlight',
    nextMode: FlashMode.off,
  },
};

const PostUploadScreen = () => {
  const [type, setType] = useState(CameraType.back);
  const [flash, setFlash] = useState(FlashMode.off);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [hasPermissions, setHasPermissions] = useState<boolean | null>(null);
  const camera = useRef<Camera>(null);
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = async () => {
    if (!isCameraReady || !camera.current || isRecording) {
      return;
    }
    const options: CameraRecordingOptions = {
      quality: VideoQuality['4:3'],
      mute: false,
      maxDuration: 60,
      maxFileSize: 10 * 1024 * 1024,
    };
    setIsRecording(true);

    try {
      const result = await camera.current.recordAsync(options);
      console.warn(result);
      setIsRecording(false);
    } catch (error) {
      console.warn(error);
    }
  };
  const stopRecording = () => {
    if (isRecording) {
      camera.current?.stopRecording();
      setIsRecording(false);
    }
  };
  const takePicture = async () => {
    if (!isCameraReady || !camera.current) {
      return;
    }
    const options: CameraPictureOptions = {
      quality: 0.4,
      base64: false,
      skipProcessing: true,
    };
    const result = await camera.current?.takePictureAsync(options);
    console.warn(result);
  };

  const toggleFlashMode = () => {
    setFlash(prevMode => flashSettings[prevMode].nextMode);
  };

  const toggleCameraType = () => {
    setType(currentType =>
      currentType === CameraType.back ? CameraType.front : CameraType.back,
    );
  };

  useEffect(() => {
    const getPermissions = async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const micPermission = await Camera.requestMicrophonePermissionsAsync();
      setHasPermissions(cameraPermission.granted && micPermission.granted);
    };
    getPermissions();
  });

  if (hasPermissions === null) {
    return <Text>Loading...</Text>;
  }
  if (hasPermissions === false) {
    return <Text>No access to the camera</Text>;
  }

  return (
    <View style={styles.page}>
      <Camera
        ref={camera}
        style={styles.camera}
        ratio="4:3"
        type={type}
        flashMode={flash}
        onCameraReady={() => setIsCameraReady(true)}
      />

      <View style={[styles.ButtonContainer, {top: 0}]}>
        <MaterialIcons name="close" size={30} color="white" />
        <Pressable onPress={toggleFlashMode}>
          <MaterialIcons
            name={flashSettings[flash].icon}
            size={30}
            color="white"
          />
        </Pressable>
        <MaterialIcons name="settings" size={30} color="white" />
      </View>
      <View style={[styles.ButtonContainer, {bottom: 0}]}>
        <MaterialIcons name="photo-library" size={30} color="white" />

        {isCameraReady && (
          <Pressable
            onPress={takePicture}
            onLongPress={startRecording}
            onPressOut={stopRecording}>
            <View
              style={[
                styles.circleButton,
                {backgroundColor: isRecording ? colors.accent : colors.white},
              ]}
            />
          </Pressable>
        )}

        <Pressable onPress={toggleCameraType}>
          <MaterialIcons name="flip-camera-ios" size={30} color="white" />
        </Pressable>
      </View>
    </View>
  );
};

export default PostUploadScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  camera: {
    aspectRatio: 3 / 4,
    width: '100%',
  },
  ButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
    position: 'absolute',
    flex: 1,
    padding: 15,
    paddingHorizontal: 25,
  },
  circleButton: {
    width: 75,
    aspectRatio: 1,
    borderRadius: 75,
    backgroundColor: 'white',
  },
});
