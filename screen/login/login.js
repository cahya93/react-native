import React, { Component } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Button } from "react-native-elements";
// import { Avatar } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  onSubmit = () => {
    const { username, password } = this.state;
    console.log(username, password);
    if (username === "" && password === "")
      return Alert.alert("OPS..!", "username dan password kosong");
    if (username === "admin" && password === "123") this.props.isLogin(true);
    return Alert.alert("Okey!", "login suksess");
  };
  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.login}>
          <Icon
            raised
            name="users"
            type="font-awesome"
            color="black"
            onPress={() => console.log("hello")}
            size={50}
          />
          <Input
            focus
            placeholder="Username"
            leftIcon={{ type: "font-awesome", name: "user" }}
            onChangeText={(username) => this.setState({ username })}
          />
          <Input
            placeholder="Password"
            leftIcon={{ type: "font-awesome", name: "key" }}
            secureTextEntry={true}
            onChangeText={(password) => this.setState({ password })}
          />
          <Button title="LOGIN" onPress={this.onSubmit} />
        </View>
      </SafeAreaProvider>
    );
  }
}
const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
});
export default login;
