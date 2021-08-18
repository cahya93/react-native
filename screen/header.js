import React, { Component } from "react";
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
        rightComponent={{ icon: "ellipsis-v", color: "#fff" }}
      />
    );
  }
}

export default header;
