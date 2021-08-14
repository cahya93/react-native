import React, { Component } from "react";
import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { Avatar, Header, Card, ListItem } from "react-native-elements";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: [
        {
          name: "Eko Cahyanto",
          phone: "087878123456",
          photo: "https://avatars.githubusercontent.com/u/49233072?s=48&v=4",
        },
        {
          name: "Edi Rustanto",
          phone: "087878654852",
          photo: "",
        },
        {
          name: "Yanto Web",
          phone: "+6287878025854",
          photo: "",
        },
        {
          name: "Yanti Olshop",
          phone: "087878654789",
          photo:
            "https://www.pngkey.com/png/full/128-1280659_clipart-user-icon.png",
        },
      ],
    };
  }
  logout = () => {
    this.props.isLogin(false);
    return Alert.alert("Okey!", "logout suksess");
  };
  render() {
    return (
      <View>
        <Header
          placement="left"
          leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={{ text: "MY CONTACT", style: { color: "#fff" } }}
          rightComponent={{ icon: "home", color: "#fff" }}
        />
        <View
          style={{
            width: "100%",
          }}
        >
          {this.state.contact.map((data, i) => (
            <TouchableOpacity
              onPress={() => {
                Alert.alert(data.name, "asd");
                this.setState({
                  detailStatus: true,
                  dataDetail: data,
                });
              }}
            >
              <ListItem key={i} bottomDivider>
                {data.photo ? (
                  <Avatar source={{ uri: data.photo }} />
                ) : (
                  <Avatar
                    titleStyle={{ color: "red" }}
                    rounded
                    title={data.name.substr(0, 1)}
                  />
                )}

                <ListItem.Content>
                  <ListItem.Title>{data.name}</ListItem.Title>
                  <ListItem.Subtitle>{data.phone}</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  contact: {
    marginLeft: 5,
  },
  navbar: {
    flexDirection: "row",
    borderColor: "blue",
    backgroundColor: "red",
  },
  logo: {
    flex: 2,
    fontSize: 30,
    color: "white",
    fontFamily: "times",
  },
});
export default Navbar;
