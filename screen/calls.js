import React, { Component } from "react";
import { View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

class calls extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaProvider>
        <View>
          <Text>Ini Call</Text>
        </View>
      </SafeAreaProvider>
    );
  }
}

export default calls;
