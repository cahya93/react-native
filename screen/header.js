import React, { Component } from "react";
import { Header } from "react-native-elements/dist/header/Header";
import Camera from "./camera";
import { Image } from "react-native-elements/dist/image/Image";
import { View, Text, Modal } from "react-native";

class header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      title: "Whatsapp",
    };
  }
  setModalVisible = (value) => {
    this.setState({
      open: value,
    });
  };
  myModal = () => {
    const { open } = this.state;
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={open}
        onRequestClose={() => {
          this.setModalVisible(!open);
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            width: 80,
            alignContent: "space-between",
          }}
        >
          <Text>Ini Modal</Text>
        </View>
      </Modal>
    );
  };
  render() {
    return (
      <>
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
            <Image
              source={{
                uri: "https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png",
              }}
              style={{ width: 20, height: 25, marginLeft: 5 }}
              onPress={() => this.setState({ open: true })}
            />
            // <Icon
            //   type="font-awesome"
            //   name="ellipsis-v"
            //   size={30}
            //   onPress={this.MyDrawer}
            // />
          }
        />
        {this.myModal()}
      </>
    );
  }
}

export default header;
