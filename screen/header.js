import React, { Component } from "react";
import { Header } from "react-native-elements/dist/header/Header";
class header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "home",
    };
  }
  render() {
    return (
      <Header
        style={{ backgroundColor: "red" }}
        leftComponent={{
          icon: "menu",
          color: "#fff",
          iconStyle: { color: "#fff" },
        }}
        centerComponent={{
          text: "My Title",
          style: { color: "#fff" },
        }}
        containerStyle={{
          backgroundColor: "#3D6DCC",
        }}
      />
    );
  }
}

export default header;
