import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from "react-native";
import { Button, Avatar, ListItem } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Header } from ".";

class contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      refresh: false,
      limit: 15,
      page: 1,
    };
  }
  getData = (page = 1) => {
    // console.log("page:", page);
    this.setState({
      refresh: true,
    });
    const { limit } = this.state;
    fetch(
      `https://jsonplaceholder.typicode.com/comments?_limit=${limit}&_page=${page}`
    )
      .then((response) => response.json())
      .then((users) => {
        let newData = [];
        if (page === 1) newData = users;
        else newData = [...this.state.users, ...users];

        this.setState({
          users: newData,
          page,
          refresh: false,
        });
      });
  };
  componentDidMount() {
    this.getData();
  }
  onPressListener = (item) => {
    const { navigation } = this.props;
    navigation.navigate("Home", item);
  };
  renderItem = ({ item }) => {
    return (
      <ListItem.Swipeable
        leftContent={
          <Button
            title="Info"
            icon={{ name: "info", color: "white" }}
            buttonStyle={{ minHeight: "100%" }}
            onPress={() => Alert.alert("INFO press")}
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
        <Avatar
          size="medium"
          rounded
          title={item.name.substr(0, 1)}
          titleStyle={{
            flex: 1,
            color: "red",
            fontSize: 30,
            // alignItems: "center",
            // textAlign: "center",
            alignContent: "center",
            width: 100,
            height: 100,
            backgroundColor: "#12a6fc",
            // borderWidth: 2,
          }}
        />
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
          <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem.Swipeable>
    );
  };
  render() {
    return (
      <SafeAreaProvider>
        <Header />
        <View style={{ flex: 1 }}>
          <FlatList
            extraData={this.state}
            data={this.state.users}
            keyExtractor={(item) => {
              return item.id;
            }}
            renderItem={this.renderItem}
            onRefresh={() => this.getData(1)}
            refreshing={this.state.refresh}
            onEndReached={() => this.getData(this.state.page + 1)}
            onEndReachedThreshold={0.5}
          />
        </View>
      </SafeAreaProvider>
    );
  }
}
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#DCDCDC",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    padding: 10,
  },
  pic: {
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
    borderColor: "#12a6fc",
    borderRadius: 30,
    borderWidth: 1,
    width: 60,
    height: 60,
    color: "#fc1303",
    fontSize: 40,
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 280,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: "600",
    color: "#222",
    fontSize: 18,
    width: 170,
  },
  mblTxt: {
    fontWeight: "200",
    color: "#777",
    fontSize: 13,
  },
  msgContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  msgTxt: {
    fontWeight: "400",
    color: "#008B8B",
    fontSize: 12,
    marginLeft: 15,
  },
});
export default contact;
