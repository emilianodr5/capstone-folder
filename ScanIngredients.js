// imports
import { useState, useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Camera } from "expo-camera";


const ScanIngredients = ({ navigation }) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraRef, setCameraRef] = useState(null);
    const [capturedPhoto, setCapturedPhoto] = useState(null);
    const [ingredients, setIngredients] = useState([]);
  
    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);  
  
    const takePicture = async () => {
      if (cameraRef) {
        const photo = await cameraRef.takePictureAsync();
        setCapturedPhoto(photo.uri);
        navigation.navigate('Preview', { capturedPhoto: photo.uri });
      }
    };
  
    if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
  
    return (
      <View style={{ flex: 1 }}>
        <Camera style={{ flex: 1 }} ref={ref => setCameraRef(ref)}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'row',
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                alignSelf: 'flex-end',
                alignItems: 'center',
                backgroundColor: 'white',
                borderRadius: 15,
                margin: 90,
              }}
              onPress={() => { takePicture(); }}
            >
              <Text style={{ fontSize: 25, marginBottom: 5, color: 'black' }}> Capture </Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    );
  };

  export default ScanIngredients;