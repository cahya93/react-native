import React, { Component } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Splash, Home, Login, Contact, ChatScreen, Profile } from "../screen";
import SQL from "../screen/sqlData";
import Camera from "../screen/camera";

const Stack = createNativeStackNavigator();
class stack extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        // initialRouteName="Splash"
        initialRouteName="SQL"
      >
        <Stack.Screen name="SQL" component={SQL} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="Login" children={(props) => <Login {...props} />} />
      </Stack.Navigator>
    );
  }
}

export default stack;
