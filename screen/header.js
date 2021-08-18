import React, { Component } from "react";
import { Alert } from "react-native";
import { Header } from "react-native-elements/dist/header/Header";
import Icon from "react-native-vector-icons/FontAwesome";
class header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Whatsapp",
    };
  }

  render() {
    return (
      <Header
        backgroundColor="green"
        centerComponent={{
          text: this.state.title,
          style: { color: "#fff", fontSize: 20 },
        }}
        containerStyle={{
          backgroundColor: "green",
        }}
        rightComponent={
          <Icon
            type="font-awesome"
            name="ellipsis-v"
            size={30}
            onPress={() => this.props.islogout(false)}
          />
        }
      />
    );
  }
}

export default header;
