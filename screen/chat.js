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
      data: [],
    };
  }
  setOpen = (value) => {
    this.setState({
      open: value,
    });
  };

  renderItem = ({ item }) => {
    console.log("cek item", item);
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
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    const { dataLogin, chatting } = this.props.dataUser;
    console.log("cek filter", dataLogin.email);

    chatting
      .filter((user) => user.email === dataLogin.email)
      .map((filterData) => {
        console.log("====================================");
        console.log(filterData.chat);
        console.log("====================================");
        this.setState({
          data: filterData.chat,
        });
        // return filterData.chat;
      });
  };
  render() {
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
