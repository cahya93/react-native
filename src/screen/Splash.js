import React from "react";
import { StyleSheet, ImageBackground, ActivityIndicator } from "react-native";

export default class Splash extends React.Component {
  componentDidMount = () => {
    setTimeout(() => {
      this.props.navigation.navigate("Login", { animating: "data" });
    }, 5000);
  };

  render() {
    return (
      <ImageBackground
        source={require("../../assets/images/yantoweb-wa.png")}
        style={styles.backgroundImage}
      >
        <ActivityIndicator
          animating={true}
          color="#ffffff"
          size="large"
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        />
      </ImageBackground>
    );
  }
}

let styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or 'stretch'
  },
});
