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
import { Avatar, ListItem, SpeedDial, FAB } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";

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
          date: "18:01",
          countChat: "1",
        },
        {
          id: 2,
          name: "Nama 2",
          chat: "haloo2",
          date: "18:02",
          countChat: "2",
        },
        {
          id: 3,
          name: "Nama 3",
          chat: "haloo 3",
          date: "18:03",
          countChat: "3",
        },
        {
          id: 4,
          name: "Nama 4",
          chat: "haloo 4",
          date: "18:04",
          countChat: "43",
        },
        {
          id: 5,
          name: "Nama 5",
          chat: "haloo 5",
          date: "18:05",
          countChat: "45",
        },
        {
          id: 6,
          name: "Nama 6",
          chat: "haloo 6",
          date: "18:06",
          countChat: "5",
        },
        {
          id: 7,
          name: "Nama 7",
          chat: "haloo 7",
          date: "18:07",
          countChat: "43",
        },
        {
          id: 8,
          name: "Nama 8",
          chat: "haloo 8",
          date: "18:08",
          countChat: "55",
        },
        {
          id: 9,
          name: "Nama 9",
          chat: "haloo 9",
          date: "18:09",
          countChat: "9",
        },
        {
          id: 10,
          name: "Nama 10",
          chat: "haloo 10",
          date: "18:10",
          countChat: "12",
        },
        {
          id: 11,
          name: "Nama 11",
          chat: "haloo 11",
          date: "18:11",
          countChat: "1",
        },
        {
          id: 12,
          name: "Nama 12",
          chat: "haloo 12",
          date: "18:12",
          countChat: "1",
        },
        {
          id: 13,
          name: "Nama 13",
          chat: "haloo 13",
          date: "18:13",
          countChat: "1",
        },
        {
          id: 14,
          name: "Nama 14",
          chat: "haloo 14",
          date: "18:14",
          countChat: "1",
        },
        {
          id: 15,
          name: "Nama 15",
          chat: "haloo 15",
          date: "18:15",
          countChat: "1",
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
    console.log("cek data", item);
    return (
      <ListItem
        key={item.email}
        bottomDivider
        containerStyle={{ backgroundColor: "rgba(252, 252, 252, 0.66)" }}
        onPress={() => this.props.navigation.navigate("ChatScreen")}
      >
        <Avatar
          size="medium"
          rounded
          source={{
            uri: "https://avatars.githubusercontent.com/u/49233072?s=60&v=4",
          }}
        />
        <ListItem.Content>
          <View style={{ flexDirection: "row" }}>
            <View>
              <Text style={{ color: "black" }}>{item.name}</Text>
              <Text style={{ color: "black" }}>{item.chat}</Text>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <View>
                <Text>{item.date}</Text>
              </View>
              <View>
                <Avatar
                  rounded
                  title={item.countChat}
                  backgroundColor="green"
                />
              </View>
            </View>
          </View>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    );
  };
  render() {
    console.log("cek data", this.props.dataUser.dataLogin);
    const { open } = this.state;
    return (
      <ImageBackground
        source={require("../images/wa.jpeg")}
        style={styles.backgroundImage}
      >
        <SafeAreaProvider>
          <View style={{ flex: 2 }}>
            <FlatList
              data={this.state.data}
              renderItem={this.renderItem}
              keyExtractor={(item) => item.id}
            />
            <FAB
              placement="right"
              color="green"
              icon={
                <Icon
                  type="font-awesome"
                  name="comments"
                  size={25}
                  color="white"
                  onPress={() => this.props.navigation.navigate("Contact")}
                />
              }
            />
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

const mapStateToProps = (state) => {
  console.log("state redux", state);
  return {
    dataUser: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  console.log("dispatch:", dispatch);
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
