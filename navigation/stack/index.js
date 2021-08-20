import React, { Component } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Splash, Home, Login, Contact } from "../../screen";

const Stack = createNativeStackNavigator();
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        // initialRouteName="Splash"
        initialRouteName="Home"
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Login" children={(props) => <Login {...props} />} />
      </Stack.Navigator>
    );
  }
}

export default index;
