import React, { Component } from "react";
import { Header } from "react-native-elements/dist/header/Header";
class header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  componentDidMount() {
    const { title } = this.props;
    this.setState({
      title: title,
    });
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
          text: this.state.title,
          style: { color: "#fff", fontSize: 20 },
        }}
        containerStyle={{
          backgroundColor: "#3D6DCC",
        }}
        // title={this.setTitle(this.props.name)}
      />
    );
  }
}

export default header;
