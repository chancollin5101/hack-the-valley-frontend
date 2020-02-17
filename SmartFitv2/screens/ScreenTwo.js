import React, { PureComponent } from 'react'; 
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'; 
//pull in the ScrrenName 
import ScreenName from '../components/ScreenName.js';
import { RNCamera } from 'react-native-camera';
import { Ionicons } from '@expo/vector-icons';
import ImageResizer from 'react-native-image-resizer';
import ImgToBase64 from 'react-native-image-base64';

const TabIcon2 = (props) => (
    <Ionicons
        name={'md-camera'}
        size={35}
        color={props.focused ? 'orange' : 'darkgrey'}
    />
)

const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text>Waiting</Text>
  </View>
);

export default class ScreenTwo extends PureComponent { 
    
    static navigationOptions = { 
        tabBarIcon: TabIcon2
    }; 
    render() { 
        return (
            <View style={styles.container}>
                <RNCamera
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.off}
                    androidCameraPermissionOptions={{
                    title: 'Permission to use camera',
                    message: 'We need your permission to use your camera',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
                androidRecordAudioPermissionOptions={{
                    title: 'Permission to use audio recording',
                    message: 'We need your permission to use your audio',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
                >
                {({ camera, status, recordAudioPermissionStatus }) => {
                    if (status !== 'READY') return <PendingView />;
                    return (
                    <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => this.takePicture(camera)} style={styles.capture}>
                        <Text style={{ fontSize: 14 }}> SNAP </Text>
                        </TouchableOpacity>
                    </View>
                    );
                }}
                </RNCamera>
            </View>
        );
    }

takePicture = async function(camera) {
    const options = { quality: 0.01, base64: true };
    const data = await camera.takePictureAsync(options);
    ImageResizer.createResizedImage(data.uri, 50, 50, 'JPEG', 100, rotation=0)
    .then (obj => {
        ImgToBase64.getBase64String(obj.uri)
        .then(base64String => fetchModel(base64String))
        .catch(err => console.log(err));
    })
  };
}

function fetchModel(uri) { 
        console.log(uri);

  fetch(`http://35.202.172.36:5000/api/picture-to-macros?name=${uri}`, {
      method: 'GET',
    })
      .then(response => { 
        //return response.json()
        console.log(response.json());
      })
      .catch(error => {
        console.error(error);
      });
}


const styles = StyleSheet.create({
   container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});