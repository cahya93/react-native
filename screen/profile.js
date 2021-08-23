import React, { Component } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import { ListItem } from "react-native-elements";
import { Image } from "react-native-elements/dist/image/Image";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Header from "./header";
class profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [{ id: 1, name: "eko", email: "eko@mail.com" }],
    };
  }
  renderItem = ({ item }) => {
    console.log("profile", item);
    return (
      <ListItem bottomDivider={true}>
        <ListItem.Content>
          <Image
            source={{
              uri: "https://avatars.githubusercontent.com/u/49233072?s=48&v=4",
            }}
            style={{ width: 200, height: 200 }}
          />
          <ListItem.Title>{item.name}</ListItem.Title>
          <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };
  render() {
    return (
      <SafeAreaProvider>
        <SafeAreaView>
          <Header />
          <View>
            <FlatList
              data={this.state.users}
              keyExtractor={(item) => {
                return item.id;
              }}
              renderItem={this.renderItem}
            />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }
}

export default profile;
