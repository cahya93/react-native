import React, { Component } from "react";
import {
  Button,
  Text,
  View,
  SafeAreaView,
  FlatList,
  StyleSheet,
} from "react-native";
import { ImageBackground } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Avatar, ListItem, SpeedDial } from "react-native-elements";
import { Header } from ".";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      data: [
        {
          id: 1,
          name: "Nama",
          chat: "haloo",
          date: "",
          countChat: "",
        },
        {
          id: 2,
          name: "Nama 2",
          chat: "haloo2",
          date: "",
          countChat: "",
        },
        {
          id: 3,
          name: "Nama 3",
          chat: "haloo 3",
          date: "",
          countChat: "",
        },
        {
          id: 4,
          name: "Nama 4",
          chat: "haloo 4",
          date: "",
          countChat: "",
        },
        {
          id: 5,
          name: "Nama 5",
          chat: "haloo 5",
          date: "",
          countChat: "",
        },
        {
          id: 6,
          name: "Nama 6",
          chat: "haloo 6",
          date: "",
          countChat: "",
        },
        {
          id: 7,
          name: "Nama 7",
          chat: "haloo 7",
          date: "",
          countChat: "",
        },
        {
          id: 8,
          name: "Nama 8",
          chat: "haloo 8",
          date: "",
          countChat: "",
        },
        {
          id: 9,
          name: "Nama 9",
          chat: "haloo 9",
          date: "",
          countChat: "",
        },
      ],
    };
  }
  setOpen = (value) => {
    this.setState({
      open: value,
    });
  };

  renderItem = ({ item }) => {
    return (
      <ListItem
        key={item.id}
        bottomDivider
        containerStyle={{ backgroundColor: "rgba(64, 255, 0, 0.45)" }}
      >
        {/* <Icon name={item.name} /> */}
        <ListItem.Content>
          <ListItem.Title style={{ color: "white" }}>
            {item.name}
          </ListItem.Title>
          <ListItem.Subtitle style={{ color: "white" }}>
            {item.chat}
          </ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    );
  };
  render() {
    const { open } = this.state;
    return (
      <ImageBackground
        source={require("../images/wa.jpeg")}
        style={styles.backgroundImage}
      >
        <SafeAreaProvider>
          <SafeAreaView>
            <FlatList
              data={this.state.data}
              renderItem={this.renderItem}
              keyExtractor={(item) => item.id}
            />
          </SafeAreaView>
          <View style={{ flex: 2 }}>
            <SpeedDial
              isOpen={open}
              icon={{ name: "edit", color: "#fff" }}
              openIcon={{ name: "close", color: "#fff" }}
              onOpen={() => this.setOpen(!open)}
              onClose={() => this.setOpen(!open)}
            >
              <SpeedDial.Action
                icon={{ name: "add", color: "#fff" }}
                title="Add"
                onPress={() => console.log("Add Something")}
              />
              <SpeedDial.Action
                icon={{ name: "delete", color: "#fff" }}
                title="Delete"
                onPress={() => console.log("Delete Something")}
              />
            </SpeedDial>
          </View>
        </SafeAreaProvider>
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
export default Home;
