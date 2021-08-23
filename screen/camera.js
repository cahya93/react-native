import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  PermissionsAndroid,
} from "react-native";
import { RNCamera } from "react-native-camera";
import RNFS from "react-native-fs";
import moment from "moment";
class camera extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log("data:", data);
      const uri = data.uri.substr(7);
      console.log("uri", uri);

      this.copyToPic(uri);
    }
  };

  copyToPic = async (uri) => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: "Cool Photo App Camera Permission",
          message: "Your app needs permission.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        const newImg = moment().format("YYYYMMDD_HHmmss");
        RNFS.copyFile(
          uri,
          RNFS.PicturesDirectoryPath + "/PIC_" + newImg + ".jpg"
        )
          .then((res) => {
            console.log("res:", res);
          })
          .catch((err) => console.log("ERROR MESSAGE:", err));
      } else {
        console.log("Camera permission denied");
        return false;
      }
    } catch (err) {
      console.log("ERROR MESSAGE:", err);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={(ref) => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: "Permission to use camera",
            message: "We need your permission to use your camera",
            buttonPositive: "Ok",
            buttonNegative: "Cancel",
          }}
          androidRecordAudioPermissionOptions={{
            title: "Permission to use audio recording",
            message: "We need your permission to use your audio",
            buttonPositive: "Ok",
            buttonNegative: "Cancel",
          }}
          //   onGoogleVisionBarcodesDetected={({ barcodes }) => {
          //     console.log(barcodes);
          //   }}
        />
        <View
          style={{ flex: 0, flexDirection: "row", justifyContent: "center" }}
        >
          <TouchableOpacity onPress={this.takePicture} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black",
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  capture: {
    flex: 0,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: "center",
    margin: 20,
  },
});
export default camera;
