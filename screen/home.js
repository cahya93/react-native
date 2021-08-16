import React, { Component } from "react";
import { Button, Text, View, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Avatar, ListItem, SpeedDial } from "react-native-elements";
import { Header } from ".";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  setOpen = (value) => {
    this.setState({
      open: value,
    });
  };
  render() {
    const { open } = this.state;
    return (
      <SafeAreaProvider>
        <SafeAreaView>
          <Header />
          <ListItem.Swipeable
            leftContent={
              <Button
                title="Info"
                icon={{ name: "info", color: "white" }}
                buttonStyle={{ minHeight: "100%" }}
              />
            }
            rightContent={
              <Button
                title="Delete"
                icon={{ name: "delete", color: "white" }}
                buttonStyle={{ minHeight: "100%", backgroundColor: "red" }}
              />
            }
          >
            {/* <Icon name="My Icon" /> */}
            <ListItem.Content>
              <ListItem.Title>Hello Swiper</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem.Swipeable>
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
    );
  }
}

export default Home;
