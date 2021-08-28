import React, { Component } from "react";
import { Text, View } from "react-native";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import Icon from "react-native-vector-icons/FontAwesome";

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        <Avatar
          size="small"
          icon={{
            name: "street-view",
            color: "green",
            size: 25,
            type: "font-awesome",
          }}
        />
        <View
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "baseline",
          }}
        >
          <Text>Your Location</Text>
        </View>
      </View>
    );
  }
}

export default home;
