import React, { Component } from "react";
import { View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
class status extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaProvider>
        <View>
          <Text>Ini status</Text>
        </View>
      </SafeAreaProvider>
    );
  }
}

export default status;
