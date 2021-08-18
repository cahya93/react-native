import React, { Component } from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import { SafeAreaProvider } from "react-native-safe-area-context";
class status extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "Nama",
          chat: "haloo",
          date: "18:01",
          countChat: "",
        },
        {
          id: 2,
          name: "Nama 2",
          chat: "haloo2",
          date: "18:02",
          countChat: "",
        },
        {
          id: 3,
          name: "Nama 3",
          chat: "haloo 3",
          date: "18:03",
          countChat: "",
        },
        {
          id: 4,
          name: "Nama 4",
          chat: "haloo 4",
          date: "18:04",
          countChat: "",
        },
        {
          id: 5,
          name: "Nama 5",
          chat: "haloo 5",
          date: "18:05",
          countChat: "",
        },
        {
          id: 6,
          name: "Nama 6",
          chat: "haloo 6",
          date: "18:06",
          countChat: "",
        },
        {
          id: 7,
          name: "Nama 7",
          chat: "haloo 7",
          date: "18:07",
          countChat: "",
        },
        {
          id: 8,
          name: "Nama 8",
          chat: "haloo 8",
          date: "18:08",
          countChat: "",
        },
        {
          id: 9,
          name: "Nama 9",
          chat: "haloo 9",
          date: "18:09",
          countChat: "",
        },
        {
          id: 10,
          name: "Nama 10",
          chat: "haloo 10",
          date: "18:10",
          countChat: "",
        },
        {
          id: 11,
          name: "Nama 11",
          chat: "haloo 11",
          date: "18:11",
          countChat: "",
        },
        {
          id: 12,
          name: "Nama 12",
          chat: "haloo 12",
          date: "18:12",
          countChat: "",
        },
        {
          id: 13,
          name: "Nama 13",
          chat: "haloo 13",
          date: "18:13",
          countChat: "",
        },
        {
          id: 14,
          name: "Nama 14",
          chat: "haloo 14",
          date: "18:14",
          countChat: "",
        },
        {
          id: 15,
          name: "Nama 15",
          chat: "haloo 15",
          date: "18:15",
          countChat: "",
        },
      ],
    };
  }
  renderItem = ({ item }) => {
    return (
      <ListItem
        key={item.id}
        bottomDivider
        // containerStyle={{ backgroundColor: "rgba(64, 255, 0, 0.45)" }}
      >
        <Avatar
          size="medium"
          rounded
          source={{
            uri: "https://avatars.githubusercontent.com/u/49233072?s=60&v=4",
          }}
        />
        <ListItem.Content>
          <ListItem.Title style={{ color: "black" }}>
            {item.name}
          </ListItem.Title>
          <ListItem.Subtitle style={{ color: "black" }}>
            {item.date}
          </ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    );
  };
  render() {
    return (
      <SafeAreaProvider>
        <SafeAreaView>
          <View>
            <View style={{ flexDirection: "row" }}>
              <Avatar
                size="medium"
                rounded
                source={{
                  uri: "https://avatars.githubusercontent.com/u/49233072?s=60&v=4",
                }}
              />
              <View style={{ alignSelf: "center" }}>
                <Text style={{ fontSize: 18, marginLeft: 15 }}>
                  Status saya
                </Text>
                <Text style={{ marginLeft: 15 }}>Kemarin 18:00</Text>
              </View>
            </View>
            <View>
              <Text style={{ fontSize: 15, margin: 15 }}>
                Pembaharuan terkini
              </Text>
            </View>
            <FlatList
              data={this.state.data}
              renderItem={this.renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }
}

export default status;
