import React, { Component } from "react";
import { Button, Text, View, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Avatar, ListItem } from "react-native-elements";
import { Header } from ".";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
      </SafeAreaProvider>
    );
  }
}

export default Home;
