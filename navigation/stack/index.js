import React, { Component } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Splash,
  Home,
  Login,
  Contact,
  ChatScreen,
  Counter,
} from "../../screen";

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
        initialRouteName="Counter"
      >
        <Stack.Screen
          name="Counter"
          children={(props) => <Counter {...props} />}
        />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="Login" children={(props) => <Login {...props} />} />
      </Stack.Navigator>
    );
  }
}

export default index;
